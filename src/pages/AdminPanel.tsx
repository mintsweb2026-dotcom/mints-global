import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../lib/AuthContext";
import {
  auth,
  db,
  storage,
  handleFirestoreError,
  OperationType,
} from "../lib/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Link,
  Heading,
  Quote,
  X,
  Settings2,
  FileText,
  Image,
  LayoutDashboard,
  Activity,
  CheckSquare,
} from "lucide-react";
import { AdminWorksTab } from "../components/admin/AdminWorksTab";
import { AdminCategoriesTab } from "../components/admin/AdminCategoriesTab";
import { AdminActivityLogTab } from "../components/admin/AdminActivityLogTab";
import { AdminSeoAuditTab } from "../components/admin/AdminSeoAuditTab";

const calculateSeoScore = (post: any) => {
  let score = 0;

  const titleLength = (post.seoTitle || post.title || "").length;
  if (titleLength > 10 && titleLength <= 60) score += 25;
  else if (titleLength > 0 && titleLength <= 80) score += 15;

  const descLength = (post.seoDescription || post.excerpt || "").length;
  if (descLength > 50 && descLength <= 160) score += 25;
  else if (descLength > 0 && descLength <= 200) score += 15;

  const wordCount = post.content ? post.content.split(/\s+/).length : 0;
  if (wordCount > 300) score += 30;
  else if (wordCount > 100) score += 15;

  if (post.image) score += 10;
  if (post.tags && post.tags.length > 0) score += 10;

  return Math.min(100, Math.max(0, score));
};

const getSeoScoreColor = (score: number) => {
  if (score >= 80) return "text-green-400 bg-green-400/10 border-green-500/20";
  if (score >= 50)
    return "text-yellow-400 bg-yellow-400/10 border-yellow-500/20";
  return "text-red-400 bg-red-400/10 border-red-500/20";
};

const getCrossLinkSuggestions = (
  content: string,
  allPosts: any[],
  currentPostId: string | null,
) => {
  if (!content || !allPosts) return [];
  const suggestions: { title: string; slug: string; foundKeyword: string }[] =
    [];
  const contentLower = content.toLowerCase();

  for (const post of allPosts) {
    if (post.id === currentPostId) continue;

    const titleLower = (post.title || "").toLowerCase();
    if (titleLower && titleLower.length > 4) {
      const escapedTitle = titleLower.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\b${escapedTitle}\\b`);

      const slug = post.slug || post.id;
      if (regex.test(contentLower) && !contentLower.includes(slug)) {
        suggestions.push({
          title: post.title,
          slug,
          foundKeyword: post.title,
        });
      }
    }
  }
  return suggestions;
};

export function AdminPanel() {
  const { user, loading } = useAuth();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("DIGITAL MARKETING");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [tagError, setTagError] = useState("");

  const handleAddTag = (rawTag: string) => {
    setTagError("");
    const normalizedTag = rawTag.trim().toLowerCase();

    if (!normalizedTag) return;

    if (normalizedTag.length > 20) {
      setTagError("Tag must be 20 characters or less.");
      return;
    }

    if (!/^[a-z0-9-]+$/.test(normalizedTag)) {
      setTagError(
        "Tags can only contain lowercase letters, numbers, and hyphens.",
      );
      return;
    }

    if (tags.length >= 5) {
      setTagError("Maximum 5 tags allowed.");
      return;
    }

    if (tags.includes(normalizedTag)) {
      setTagError("Tag already exists.");
      return;
    }

    setTags([...tags, normalizedTag]);
    setTagInput("");
  };
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageAlt, setImageAlt] = useState("");
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [draftLoaded, setDraftLoaded] = useState(false);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const [activeAdminTab, setActiveAdminTab] = useState<
    "posts" | "works" | "categories" | "activity" | "seoAudit"
  >("posts");
  const [bulkSeoDescription, setBulkSeoDescription] = useState("");
  const [bulkSeoSaving, setBulkSeoSaving] = useState(false);
  const [showBulkSeoForm, setShowBulkSeoForm] = useState(false);

  const [editingSeoId, setEditingSeoId] = useState<string | null>(null);
  const [inlineSeoTitle, setInlineSeoTitle] = useState("");
  const [inlineSeoDescription, setInlineSeoDescription] = useState("");
  const [inlineSeoSaving, setInlineSeoSaving] = useState(false);

  const missingSeoPosts = posts.filter(
    (post) => !post.seoTitle || !post.seoDescription,
  );

  const handleInlineSeoEdit = (post: any) => {
    setEditingSeoId(post.id);
    setInlineSeoTitle(post.seoTitle || post.title || "");
    setInlineSeoDescription(post.seoDescription || post.excerpt || "");
  };

  const handleInlineSeoSave = async (id: string, slug: string) => {
    setInlineSeoSaving(true);
    try {
      await setDoc(
        doc(db, "posts", slug),
        {
          seoTitle: inlineSeoTitle || null,
          seoDescription: inlineSeoDescription || null,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );
      setEditingSeoId(null);
      fetchPosts();
    } catch (e: any) {
      console.error(e);
      setErrorMsg("Failed to update SEO metadata.");
    } finally {
      setInlineSeoSaving(false);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!slugEdited) {
      setSlug(generateSlug(newTitle));
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
    setSlugEdited(true);
  };

  const insertFormatting = (prefix: string, suffix: string = "") => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);

    const newText =
      text.substring(0, start) +
      prefix +
      selectedText +
      suffix +
      text.substring(end);
    setContent(newText);

    // Set cursor position back after React re-renders
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        end + prefix.length + selectedText.length,
      );
    }, 0);
  };

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedPosts = querySnapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setPosts(fetchedPosts);
    } catch (e: any) {
      console.error(e);
      if (
        e.message.includes("permission-denied") ||
        e.message.includes("Missing or insufficient permissions")
      ) {
        setErrorMsg(
          "You do not have admin permissions to read or manage posts.",
        );
      } else {
        handleFirestoreError(e, OperationType.LIST, "posts");
      }
    }
  };

  useEffect(() => {
    const loadDraft = async () => {
      if (user && !editingPostId && !draftLoaded) {
        try {
          const draftSnap = await getDoc(doc(db, "drafts", user.uid));
          if (draftSnap.exists()) {
            const draft = draftSnap.data();
            if (
              window.confirm(
                "You have a saved draft. Would you like to restore it?",
              )
            ) {
              setTitle(draft.title || "");
              setSlug(draft.slug || "");
              setSlugEdited(!!draft.slug);
              setContent(draft.content || "");
              setExcerpt(draft.excerpt || "");
              setCategory(draft.category || "DIGITAL MARKETING");
              setTags(draft.tags || []);
              setSeoTitle(draft.seoTitle || "");
              setSeoDescription(draft.seoDescription || "");
            } else {
              await deleteDoc(doc(db, "drafts", user.uid));
            }
          }
        } catch (e) {
          console.error("Failed to load draft", e);
        } finally {
          setDraftLoaded(true);
        }
      }
    };
    loadDraft();
  }, [user, editingPostId, draftLoaded]);

  useEffect(() => {
    if (!user || editingPostId || !draftLoaded) return;

    // Only save if there's actual content
    if (
      !title &&
      !content &&
      !excerpt &&
      !seoTitle &&
      !seoDescription &&
      tags.length === 0
    )
      return;

    const handler = setTimeout(async () => {
      setIsAutoSaving(true);
      try {
        const draftData = {
          title,
          slug,
          content,
          excerpt,
          category,
          seoTitle,
          seoDescription,
          tags,
          updatedAt: serverTimestamp(),
        };
        await setDoc(doc(db, "drafts", user.uid), draftData);
        setLastSaved(new Date());
      } catch (e) {
        console.error("Auto-save failed", e);
      } finally {
        setIsAutoSaving(false);
      }
    }, 2000);

    return () => clearTimeout(handler);
  }, [
    title,
    slug,
    content,
    excerpt,
    category,
    seoTitle,
    seoDescription,
    tags,
    user,
    editingPostId,
    draftLoaded,
  ]);

  useEffect(() => {
    if (user) {
      if (user.email === "binuarjunanand@gmail.com" || user.email === "anandbhari123@gmail.com" || user.email === "shynim90@gmail.com") {
        const bootstrapAdmin = async () => {
          try {
            const adminRef = doc(db, "admins", user.uid);
            const adminSnap = await getDoc(adminRef);
            if (!adminSnap.exists()) {
              await setDoc(adminRef, {
                email: user.email,
                createdAt: serverTimestamp(),
              });
              console.log("Admin bootstrapped successfully");
            }
          } catch (e) {
            console.error("Failed to bootstrap admin", e);
          }
        };
        bootstrapAdmin().then(fetchPosts);
      } else {
        fetchPosts();
      }
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error(e);
      setErrorMsg("Login failed.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const finalSlug = slug.trim() || generateSlug(title);
    if (!finalSlug) {
      setErrorMsg("A valid slug is required.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");
    try {
      let imageUrl = "";
      if (imageFile) {
        const imageRef = ref(
          storage,
          `blog_images/${Date.now()}_${imageFile.name}`,
        );
        const uploadResult = await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(uploadResult.ref);
      }

      const postData: any = {
        title,
        content,
        excerpt,
        category,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        slug: finalSlug,
        tags,
        imageAlt: imageAlt || null,
        authorId: user?.uid,
        updatedAt: serverTimestamp(),
      };

      if (imageUrl) {
        postData.image = imageUrl;
      } else if (!imagePreview) {
        postData.image = null;
      }

      if (!editingPostId) {
        postData.createdAt = serverTimestamp();
        if (user) {
          await deleteDoc(doc(db, "drafts", user.uid)).catch(console.error);
          setLastSaved(null);
        }
      }

      await setDoc(doc(db, "posts", finalSlug), postData, { merge: true });

      if (editingPostId && editingPostId !== finalSlug) {
        await deleteDoc(doc(db, "posts", editingPostId));
      }

      handleCancelEdit();
      fetchPosts();
    } catch (e: any) {
      console.error(e);
      if (e.code === "permission-denied" || (e.message && e.message.includes("permission-denied"))) {
        setErrorMsg(
          "Permission denied: You must be an authorized admin to post. (Check your email/login).",
        );
      } else {
        setErrorMsg(`An error occurred submitting the block: ${e.message || e}`);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await deleteDoc(doc(db, "posts", id));
      setSelectedPosts((prev) => prev.filter((pId) => pId !== id));
      fetchPosts();
    } catch (e: any) {
      console.error(e);
      if (e.message.includes("permission-denied")) {
        setErrorMsg("Permission denied: You must be an admin to delete posts.");
      } else {
        setErrorMsg("Failed to delete.");
      }
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedPosts.length === 0) return;
    if (
      !window.confirm(
        `Are you sure you want to delete ${selectedPosts.length} post(s)?`,
      )
    )
      return;
    try {
      await Promise.all(
        selectedPosts.map((id) => deleteDoc(doc(db, "posts", id))),
      );
      setSelectedPosts([]);
      fetchPosts();
    } catch (e: any) {
      console.error(e);
      if (e.message.includes("permission-denied")) {
        setErrorMsg("Permission denied: You must be an admin to delete posts.");
      } else {
        setErrorMsg("Failed to delete selected posts.");
      }
    }
  };

  const handleBulkSeoUpdate = async () => {
    if (selectedPosts.length === 0) return;
    if (!bulkSeoDescription) {
      setErrorMsg("SEO Description is required for bulk update.");
      return;
    }
    setBulkSeoSaving(true);
    try {
      await Promise.all(
        selectedPosts.map((id) =>
          setDoc(
            doc(db, "posts", id),
            {
              seoDescription: bulkSeoDescription,
              updatedAt: serverTimestamp(),
            },
            { merge: true },
          ),
        ),
      );
      setBulkSeoDescription("");
      setShowBulkSeoForm(false);
      setSelectedPosts([]);
      fetchPosts();
    } catch (e: any) {
      console.error(e);
      setErrorMsg("Failed to update SEO descriptions.");
    } finally {
      setBulkSeoSaving(false);
    }
  };

  const handleEdit = (post: any) => {
    setEditingPostId(post.id);
    setTitle(post.title || "");
    setSlug(post.slug || post.id);
    setSlugEdited(true);
    setContent(post.content || "");
    setExcerpt(post.excerpt || "");
    setCategory(post.category || "DIGITAL MARKETING");
    setTags(post.tags || []);
    setTagInput("");
    setTagError("");
    setSeoTitle(post.seoTitle || "");
    setSeoDescription(post.seoDescription || "");
    setImageFile(null);
    setImagePreview(post.image || null);
    setImageAlt(post.imageAlt || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setTitle("");
    setSlug("");
    setSlugEdited(false);
    setContent("");
    setExcerpt("");
    setCategory("DIGITAL MARKETING");
    setTags([]);
    setTagInput("");
    setTagError("");
    setSeoTitle("");
    setSeoDescription("");
    setImageFile(null);
    setImagePreview(null);
    setImageAlt("");
  };

  if (loading)
    return <div className="p-20 text-center text-white">Loading...</div>;

  if (!user) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
          <h2 className="text-3xl font-display font-light text-white mb-6">
            Admin Access
          </h2>
          <button
            onClick={handleLogin}
            className="w-full bg-olive-500 text-brand-black px-6 py-3 rounded-full hover:bg-olive-400 transition-colors"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-brand-black/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm sticky top-32">
            <div className="mb-8">
              <h1 className="text-2xl font-display font-bold text-white mb-1">
                Admin
              </h1>
              <p className="text-xs text-brand-white-50 truncate">
                {user?.email}
              </p>
            </div>

            <nav className="flex flex-col gap-2">
              {[
                { id: "posts", label: "Blog Posts", icon: FileText },
                { id: "works", label: "Portfolio Works", icon: Image },
                {
                  id: "categories",
                  label: "Categories",
                  icon: LayoutDashboard,
                },
                { id: "activity", label: "Activity Log", icon: Activity },
                { id: "seoAudit", label: "SEO Audit", icon: CheckSquare },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAdminTab(tab.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                    activeAdminTab === tab.id
                      ? "bg-olive-500 text-black shadow-lg shadow-olive-500/20"
                      : "text-brand-white-70 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </nav>

            <button
              onClick={handleLogout}
              className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors text-sm font-medium"
            >
              Sign out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {activeAdminTab === "works" ? (
            <AdminWorksTab />
          ) : activeAdminTab === "categories" ? (
            <AdminCategoriesTab />
          ) : activeAdminTab === "activity" ? (
            <AdminActivityLogTab />
          ) : activeAdminTab === "seoAudit" ? (
            <AdminSeoAuditTab />
          ) : (
            <div className="w-full">
              {errorMsg && (
                <div className="mb-8 p-4 bg-red-500/20 border border-red-500 text-red-100 rounded-xl">
                  {errorMsg}
                </div>
              )}

              {missingSeoPosts.length > 0 && (
                <div className="mb-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h2 className="text-2xl font-light text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Action Needed: Missing SEO Metadata (
                    {missingSeoPosts.length})
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-brand-white-70 text-sm">
                          <th className="pb-3 font-medium">Post Title</th>
                          <th className="pb-3 font-medium">Missing</th>
                          <th className="pb-3 font-medium text-right">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {missingSeoPosts.map((post) => (
                          <React.Fragment key={post.id}>
                            <tr className="border-b border-white/5 text-white">
                              <td className="py-4 font-medium">{post.title}</td>
                              <td className="py-4 text-sm text-red-400">
                                {!post.seoTitle && !post.seoDescription
                                  ? "Title & Description"
                                  : !post.seoTitle
                                    ? "Title"
                                    : "Description"}
                              </td>
                              <td className="py-4 text-right">
                                <button
                                  onClick={() => handleInlineSeoEdit(post)}
                                  className="text-olive-400 hover:text-olive-300 text-sm px-3 py-1 bg-olive-400/10 rounded-full"
                                >
                                  Edit SEO
                                </button>
                              </td>
                            </tr>
                            {editingSeoId === post.id && (
                              <tr className="bg-black/20">
                                <td
                                  colSpan={3}
                                  className="px-4 py-6 rounded-b-xl border-x border-b border-white/10"
                                >
                                  <div className="space-y-4 max-w-2xl">
                                    <div>
                                      <label className="block text-sm font-medium text-brand-white-70 mb-1">
                                        SEO Title (max 60 chars)
                                      </label>
                                      <input
                                        type="text"
                                        value={inlineSeoTitle}
                                        onChange={(e) =>
                                          setInlineSeoTitle(e.target.value)
                                        }
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500"
                                      />
                                      <p
                                        className={`mt-1 text-xs ${inlineSeoTitle.length > 60 ? "text-red-400" : "text-brand-white-50"}`}
                                      >
                                        {inlineSeoTitle.length}/60
                                      </p>
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-brand-white-70 mb-1">
                                        SEO Description (max 160 chars)
                                      </label>
                                      <textarea
                                        value={inlineSeoDescription}
                                        onChange={(e) =>
                                          setInlineSeoDescription(
                                            e.target.value,
                                          )
                                        }
                                        rows={2}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500"
                                      />
                                      <p
                                        className={`mt-1 text-xs ${inlineSeoDescription.length > 160 ? "text-red-400" : "text-brand-white-50"}`}
                                      >
                                        {inlineSeoDescription.length}/160
                                      </p>
                                    </div>

                                    {(() => {
                                      const suggestions =
                                        getCrossLinkSuggestions(
                                          post.content || "",
                                          posts,
                                          post.id,
                                        );
                                      if (suggestions.length === 0) return null;
                                      return (
                                        <div className="mt-4 p-4 bg-olive-500/10 border border-olive-500/20 rounded-xl">
                                          <h4 className="text-olive-400 font-medium mb-2 text-sm flex items-center gap-2">
                                            <Link size={14} /> SEO Opportunity:
                                            Internal Cross-Linking
                                          </h4>
                                          <p className="text-xs text-brand-white-70 mb-3">
                                            We noticed you mentioned topics
                                            covered in your other posts. Edit
                                            the post content to add these links
                                            and improve SEO authority:
                                          </p>
                                          <ul className="space-y-2">
                                            {suggestions.map((s, idx) => (
                                              <li
                                                key={idx}
                                                className="flex flex-wrap items-center gap-2 text-xs"
                                              >
                                                <span className="text-white">
                                                  Mentioned:{" "}
                                                  <span className="font-medium px-2 py-0.5 bg-black/40 rounded border border-white/5">
                                                    "{s.foundKeyword}"
                                                  </span>
                                                </span>
                                                <span className="text-brand-white-50">
                                                  →
                                                </span>
                                                <code className="bg-black/60 px-2 py-1 rounded text-olive-300 font-mono border border-olive-500/20">
                                                  [{s.title}](/blog/{s.slug})
                                                </code>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      );
                                    })()}

                                    <div className="flex gap-3">
                                      <button
                                        onClick={() =>
                                          handleInlineSeoSave(
                                            post.id,
                                            post.slug || post.id,
                                          )
                                        }
                                        disabled={inlineSeoSaving}
                                        className="bg-olive-500 text-brand-black px-4 py-2 rounded-full text-sm font-medium hover:bg-olive-400 disabled:opacity-50 focus:outline-none"
                                      >
                                        {inlineSeoSaving
                                          ? "Saving..."
                                          : "Save Metadata"}
                                      </button>
                                      <button
                                        onClick={() => setEditingSeoId(null)}
                                        disabled={inlineSeoSaving}
                                        className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 disabled:opacity-50 focus:outline-none"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-light text-white">
                      {editingPostId ? "Edit Post" : "Create New Post"}
                    </h2>
                    {!editingPostId && (
                      <span className="text-xs text-brand-white-50">
                        {isAutoSaving
                          ? "Saving..."
                          : lastSaved
                            ? `Draft saved at ${lastSaved.toLocaleTimeString()}`
                            : ""}
                      </span>
                    )}
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm text-brand-white-70 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-brand-white-70 mb-2">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        value={slug}
                        onChange={handleSlugChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500"
                        placeholder="auto-generated-from-title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-brand-white-70 mb-2">
                        Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500"
                      >
                        <option value="DIGITAL MARKETING">
                          DIGITAL MARKETING
                        </option>
                        <option value="IT INFRASTRUCTURE">
                          IT INFRASTRUCTURE
                        </option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Software Engineering">
                          Software Engineering
                        </option>
                        <option value="SEO">SEO</option>
                        <option value="Design">Design</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-brand-white-70 mb-2">
                        Tags
                      </label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {tags.map((tag, index) => (
                          <span
                            key={index}
                            className="flex items-center gap-1 bg-white/10 text-white px-2 py-1 rounded text-sm"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => {
                                setTags(tags.filter((_, i) => i !== index));
                                setTagError("");
                              }}
                              className="text-brand-white-70 hover:text-white"
                            >
                              <X size={14} />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 mb-1">
                        <input
                          type="text"
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleAddTag(tagInput);
                            }
                          }}
                          placeholder="add-a-tag"
                          className={`flex-1 bg-black/40 border ${tagError ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-olive-500"} rounded-xl px-4 py-2 text-white focus:outline-none transition-colors`}
                        />
                        <button
                          type="button"
                          onClick={() => handleAddTag(tagInput)}
                          className="px-4 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
                        >
                          Add
                        </button>
                      </div>
                      {tagError && (
                        <p className="text-red-400 text-xs">{tagError}</p>
                      )}
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-brand-white-70">
                          SEO Meta Title (Optional)
                        </label>
                        <span
                          className={`text-xs ${seoTitle.length > 60 ? "text-red-400 font-medium" : "text-brand-white-50"}`}
                        >
                          {seoTitle.length > 60 && (
                            <span className="mr-1">⚠</span>
                          )}
                          {seoTitle.length}/60
                        </span>
                      </div>
                      <input
                        type="text"
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                        className={`w-full bg-black/40 border ${seoTitle.length > 60 ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-olive-500"} rounded-xl px-4 py-2 text-white focus:outline-none transition-colors`}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-brand-white-70">
                          SEO Meta Description (Optional)
                        </label>
                        <span
                          className={`text-xs ${seoDescription.length > 160 ? "text-red-400 font-medium" : "text-brand-white-50"}`}
                        >
                          {seoDescription.length > 160 && (
                            <span className="mr-1">⚠</span>
                          )}
                          {seoDescription.length}/160
                        </span>
                      </div>
                      <textarea
                        value={seoDescription}
                        onChange={(e) => setSeoDescription(e.target.value)}
                        rows={2}
                        className={`w-full bg-black/40 border ${seoDescription.length > 160 ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-olive-500"} rounded-xl px-4 py-2 text-white focus:outline-none transition-colors`}
                      />
                    </div>

                    {/* Google Search Result Preview */}
                    <div
                      className={`mt-4 p-5 bg-[#202124] border ${(seoTitle || title || "").length > 60 || (seoDescription || excerpt || "").length > 160 ? "border-red-500/30" : "border-white/10"} rounded-xl font-sans transition-colors`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="block text-xs font-semibold text-brand-white-50 uppercase tracking-wider">
                          Search Preview
                        </span>
                        <div className="flex gap-3 text-xs">
                          <span
                            className={
                              (seoTitle || title || "").length > 60
                                ? "text-red-400 font-medium flex items-center gap-1"
                                : "text-brand-white-50 flex items-center gap-1"
                            }
                          >
                            {(seoTitle || title || "").length > 60 && (
                              <span>⚠</span>
                            )}
                            Title: {(seoTitle || title || "").length}/60
                          </span>
                          <span
                            className={
                              (seoDescription || excerpt || "").length > 160
                                ? "text-red-400 font-medium flex items-center gap-1"
                                : "text-brand-white-50 flex items-center gap-1"
                            }
                          >
                            {(seoDescription || excerpt || "").length > 160 && (
                              <span>⚠</span>
                            )}
                            Desc: {(seoDescription || excerpt || "").length}/160
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">
                          M
                        </div>
                        <div>
                          <div className="text-sm text-[#dadce0]">
                            mintsglobal.com
                          </div>
                          <div className="text-[12px] text-[#bdc1c6]">
                            https://mintsglobal.com/blog/
                            {slug || "your-post-url"}
                          </div>
                        </div>
                      </div>
                      <div className="text-xl text-[#8ab4f8] hover:underline cursor-pointer truncate mb-1">
                        {seoTitle || title || "Meta Title Preview"}
                      </div>
                      <div className="text-sm text-[#bdc1c6] line-clamp-2">
                        {seoDescription ||
                          excerpt ||
                          "Meta description preview will appear here. It should be compelling and describe the content."}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-brand-white-70 mb-2">
                        Excerpt (Optional)
                      </label>
                      <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        rows={2}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <label className="block text-sm text-brand-white-70">
                          Content (Markdown)
                        </label>
                        <div className="flex gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
                          <button
                            type="button"
                            onClick={() => insertFormatting("**", "**")}
                            className="p-1.5 hover:bg-white/10 rounded text-brand-white-70 hover:text-white transition-colors"
                            title="Bold"
                          >
                            <Bold size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("*", "*")}
                            className="p-1.5 hover:bg-white/10 rounded text-brand-white-70 hover:text-white transition-colors"
                            title="Italic"
                          >
                            <Italic size={16} />
                          </button>
                          <div className="w-[1px] bg-white/10 mx-1 my-0.5"></div>
                          <button
                            type="button"
                            onClick={() => insertFormatting("# ", "")}
                            className="p-1.5 hover:bg-white/10 rounded text-brand-white-70 hover:text-white transition-colors"
                            title="Heading"
                          >
                            <Heading size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("\n- ", "")}
                            className="p-1.5 hover:bg-white/10 rounded text-brand-white-70 hover:text-white transition-colors"
                            title="Bullet List"
                          >
                            <List size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("\n1. ", "")}
                            className="p-1.5 hover:bg-white/10 rounded text-brand-white-70 hover:text-white transition-colors"
                            title="Numbered List"
                          >
                            <ListOrdered size={16} />
                          </button>
                          <div className="w-[1px] bg-white/10 mx-1 my-0.5"></div>
                          <button
                            type="button"
                            onClick={() => insertFormatting("[", "](url)")}
                            className="p-1.5 hover:bg-white/10 rounded text-brand-white-70 hover:text-white transition-colors"
                            title="Link"
                          >
                            <Link size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("\n> ", "")}
                            className="p-1.5 hover:bg-white/10 rounded text-brand-white-70 hover:text-white transition-colors"
                            title="Quote"
                          >
                            <Quote size={16} />
                          </button>
                        </div>
                      </div>
                      <textarea
                        ref={contentRef}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={10}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500 font-mono text-sm"
                        required
                      />

                      {(() => {
                        const suggestions = getCrossLinkSuggestions(
                          content,
                          posts,
                          editingPostId,
                        );
                        if (suggestions.length === 0) return null;
                        return (
                          <div className="mt-4 p-4 bg-olive-500/10 border border-olive-500/20 rounded-xl">
                            <h4 className="text-olive-400 font-medium mb-2 text-sm flex items-center gap-2">
                              <Link size={14} /> SEO Opportunity: Internal
                              Cross-Linking
                            </h4>
                            <p className="text-xs text-brand-white-70 mb-3">
                              We noticed you mentioned topics covered in your
                              other posts. Linking to them improves SEO
                              authority:
                            </p>
                            <ul className="space-y-2">
                              {suggestions.map((s, idx) => (
                                <li
                                  key={idx}
                                  className="flex flex-wrap items-center gap-2 text-xs"
                                >
                                  <span className="text-white">
                                    Mentioned:{" "}
                                    <span className="font-medium px-2 py-0.5 bg-black/40 rounded border border-white/5">
                                      "{s.foundKeyword}"
                                    </span>
                                  </span>
                                  <span className="text-brand-white-50">→</span>
                                  <code className="bg-black/60 px-2 py-1 rounded text-olive-300 font-mono border border-olive-500/20">
                                    [{s.title}](/blog/{s.slug})
                                  </code>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })()}
                    </div>
                    <div>
                      <label className="block text-sm text-brand-white-70 mb-2">
                        Featured Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setImageFile(file);
                            setImagePreview(URL.createObjectURL(file));
                          } else {
                            setImageFile(null);
                            setImagePreview(null);
                          }
                        }}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500 mb-2"
                      />
                      {imagePreview && (
                        <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
                          <img
                            src={imagePreview}
                            alt={imageAlt || "Preview"}
                            className="w-full h-auto object-cover max-h-48"
                          />
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm text-brand-white-70 mb-2">
                        Featured Image Alt Text (for SEO & Accessibility)
                      </label>
                      <input
                        type="text"
                        value={imageAlt}
                        onChange={(e) => setImageAlt(e.target.value)}
                        placeholder="e.g. A digital marketing campaign dashboard"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-olive-500"
                      />
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 bg-olive-500 text-brand-black px-6 py-3 rounded-full hover:bg-olive-400 transition-colors disabled:opacity-50"
                      >
                        {submitting
                          ? editingPostId
                            ? "Updating..."
                            : "Publishing..."
                          : editingPostId
                            ? "Update Post"
                            : "Publish Post"}
                      </button>
                      {editingPostId && (
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                          disabled={submitting}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-light text-white">
                      Manage Posts
                    </h2>
                    {selectedPosts.length > 0 && (
                      <div className="flex gap-3">
                        <button
                          onClick={() => setShowBulkSeoForm(!showBulkSeoForm)}
                          className="text-olive-400 hover:text-olive-300 text-sm px-4 py-2 bg-olive-400/10 rounded-full transition-colors font-medium"
                        >
                          Bulk Edit SEO ({selectedPosts.length})
                        </button>
                        <button
                          onClick={handleDeleteSelected}
                          className="text-red-400 hover:text-red-300 text-sm px-4 py-2 bg-red-400/10 rounded-full transition-colors font-medium"
                        >
                          Delete Selected ({selectedPosts.length})
                        </button>
                      </div>
                    )}
                  </div>

                  {showBulkSeoForm && selectedPosts.length > 0 && (
                    <div className="bg-olive-900/40 border border-olive-500/20 rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-medium text-white mb-4">
                        Bulk Update SEO Description for {selectedPosts.length}{" "}
                        posts
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <textarea
                            value={bulkSeoDescription}
                            onChange={(e) =>
                              setBulkSeoDescription(e.target.value)
                            }
                            placeholder="Enter the common SEO description to apply to all selected posts..."
                            rows={3}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-olive-500"
                          />
                          <p
                            className={`mt-1 text-xs ${bulkSeoDescription.length > 160 ? "text-red-400" : "text-brand-white-50"}`}
                          >
                            {bulkSeoDescription.length}/160 characters
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={handleBulkSeoUpdate}
                            disabled={bulkSeoSaving || !bulkSeoDescription}
                            className="bg-olive-500 text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-olive-400 disabled:opacity-50 transition-colors"
                          >
                            {bulkSeoSaving
                              ? "Applying..."
                              : "Apply to Selected"}
                          </button>
                          <button
                            onClick={() => setShowBulkSeoForm(false)}
                            disabled={bulkSeoSaving}
                            className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {posts.length > 0 && (
                    <div className="flex items-center px-4 mb-2">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedPosts.length === posts.length}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPosts(posts.map((p) => p.id));
                            } else {
                              setSelectedPosts([]);
                            }
                          }}
                          className="form-checkbox h-4 w-4 bg-black/40 border-white/10 rounded text-olive-500 focus:ring-olive-500 focus:ring-offset-black"
                        />
                        <span className="text-brand-white-70 text-sm">
                          Select All
                        </span>
                      </label>
                    </div>
                  )}
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-4"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <div className="pt-1 pointer-events-auto">
                            <input
                              type="checkbox"
                              checked={selectedPosts.includes(post.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedPosts([...selectedPosts, post.id]);
                                } else {
                                  setSelectedPosts(
                                    selectedPosts.filter(
                                      (id) => id !== post.id,
                                    ),
                                  );
                                }
                              }}
                              className="form-checkbox h-4 w-4 bg-black/40 border-white/10 rounded text-olive-500 focus:ring-olive-500 focus:ring-offset-black"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg text-white font-medium mb-1">
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-3">
                              <p className="text-sm text-brand-white-70">
                                {post.createdAt
                                  ? new Date(
                                      post.createdAt.toDate(),
                                    ).toLocaleDateString()
                                  : "Just now"}
                              </p>
                              <div className="flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-md bg-olive-500/20 text-olive-400">
                                <svg
                                  className="w-3.5 h-3.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  ></path>
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  ></path>
                                </svg>
                                {post.views || 0} views
                              </div>
                              <div
                                className={`flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-md border ${getSeoScoreColor(calculateSeoScore(post))}`}
                              >
                                SEO Score: {calculateSeoScore(post)}%
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEdit(post)}
                            className="text-olive-400 hover:text-olive-300 text-sm px-3 py-1 bg-olive-400/10 rounded-full whitespace-nowrap"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="text-red-400 hover:text-red-300 text-sm px-3 py-1 bg-red-400/10 rounded-full whitespace-nowrap"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      {/* Search Engine Result Preview */}
                      <div
                        className={`px-4 py-3 bg-[#202124] border ${(post.seoTitle || post.title || "").length > 60 || (post.seoDescription || post.excerpt || "").length > 160 ? "border-red-500/30" : "border-white/10"} rounded-xl font-sans opacity-80 hover:opacity-100 transition-all`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">
                              M
                            </div>
                            <div>
                              <div className="text-xs text-[#dadce0]">
                                mintsglobal.com
                              </div>
                              <div className="text-[10px] text-[#bdc1c6]">
                                https://mintsglobal.com/blog/
                                {post.slug || post.id}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-[10px] text-right">
                            <span
                              className={
                                (post.seoTitle || post.title || "").length > 60
                                  ? "text-red-400 font-medium flex items-center gap-0.5 justify-end"
                                  : "text-brand-white-50 flex items-center gap-0.5 justify-end"
                              }
                            >
                              {(post.seoTitle || post.title || "").length >
                                60 && <span>⚠</span>}
                              Title:{" "}
                              {(post.seoTitle || post.title || "").length}/60
                            </span>
                            <span
                              className={
                                (post.seoDescription || post.excerpt || "")
                                  .length > 160
                                  ? "text-red-400 font-medium flex items-center gap-0.5 justify-end"
                                  : "text-brand-white-50 flex items-center gap-0.5 justify-end"
                              }
                            >
                              {(post.seoDescription || post.excerpt || "")
                                .length > 160 && <span>⚠</span>}
                              Desc:{" "}
                              {
                                (post.seoDescription || post.excerpt || "")
                                  .length
                              }
                              /160
                            </span>
                          </div>
                        </div>
                        <div className="text-lg text-[#8ab4f8] truncate mb-1">
                          {post.seoTitle || post.title}
                        </div>
                        <div className="text-xs text-[#bdc1c6] line-clamp-2">
                          {post.seoDescription ||
                            post.excerpt ||
                            "No excerpt or meta description available."}
                        </div>
                      </div>
                    </div>
                  ))}
                  {posts.length === 0 && (
                    <p className="text-brand-white-70">No posts found.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
