import React, { useState, useEffect } from 'react';
import { db, storage } from '../../lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp, orderBy, query } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { X, ArrowUpRight, Eye } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import { z } from 'zod';
import { logActivity } from '../../lib/activity';

const workFormSchema = z.object({
  title: z.string().min(1, "Project Title is required"),
  description: z.string().min(1, "Description is required"),
  titleImage: z.string().url("Title Image must be a valid URL"),
  category: z.string().min(1, "Category is required"),
  type: z.string().min(1, "Type is required"),
  tags: z.string().optional(),
  kpi: z.string().optional(),
  duration: z.string().optional(),
});

const getMissingSeoFields = (fields: { title: string; description: string; titleImage: string; tags: string; titleImageAlt: string }) => {
  const missing: string[] = [];
  if (!fields.title.trim()) missing.push("Project Title");
  if (!fields.description.trim()) missing.push("Description");
  if (!fields.titleImage.trim()) missing.push("Title Image URL");
  if (!fields.tags.trim()) missing.push("Tags");
  if (!fields.titleImageAlt.trim()) missing.push("Title Image Alt Text");
  return missing;
};

export function AdminWorksTab() {
  const [works, setWorks] = useState<any[]>([]);
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleImage, setTitleImage] = useState('');
  const [titleImageAlt, setTitleImageAlt] = useState('');
  const [type, setType] = useState('Design');
  const [category, setCategory] = useState('Digital Marketing');
  const [tags, setTags] = useState('');
  const [kpi, setKpi] = useState('');
  const [duration, setDuration] = useState('');
  const [featured, setFeatured] = useState(false);
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const fetchWorks = async () => {
    setLoading(true);
    try {
       const q = query(collection(db, 'works'), orderBy('createdAt', 'desc'));
       const snapshot = await getDocs(q);
       const worksData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
       setWorks(worksData);
    } catch (e) {
       console.error("Error fetching works", e);
    } finally {
       setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
       const q = query(collection(db, 'work_categories'), orderBy('createdAt', 'desc'));
       const snapshot = await getDocs(q);
       setCategoriesList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (e) {
       console.error("Error fetching categories", e);
    }
  };

  useEffect(() => {
    fetchWorks();
    fetchCategories();
  }, []);

  const handleMediaFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMediaFiles(prev => [...prev, ...Array.from(e.target.files as FileList)]);
    }
  };

  const removeMediaFile = (index: number) => {
    setMediaFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeMediaUrl = (urlToRemove: string) => {
    setMediaUrls(prev => prev.filter(url => url !== urlToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const validationResult = workFormSchema.safeParse({
        title,
        description,
        titleImage,
        category,
        type,
        tags,
        kpi,
        duration
      });

      if (!validationResult.success) {
        setErrorMsg(validationResult.error.issues.map(err => err.message).join(', '));
        setSubmitting(false);
        return;
      }

      const uploadedUrls = [];
      if (mediaFiles.length > 0) {
        for (const file of mediaFiles) {
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
          };
          const compressedFile = await imageCompression(file, options);
          const fileRef = ref(storage, `works/${Date.now()}-${file.name}`);
          const snapshot = await uploadBytes(fileRef, compressedFile);
          const url = await getDownloadURL(snapshot.ref);
          uploadedUrls.push(url);
        }
      }

      const allMediaUrls = [...mediaUrls, ...uploadedUrls];

      const workData = {
        title,
        description,
        titleImage,
        titleImageAlt,
        type,
        category,
        mediaUrls: allMediaUrls,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        kpi,
        duration,
        featured,
        updatedAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, 'works', editingId), workData);
        await logActivity('Edited', 'Project', workData.title);
      } else {
        await addDoc(collection(db, 'works'), {
          ...workData,
          createdAt: serverTimestamp()
        });
        await logActivity('Created', 'Project', workData.title);
      }
      
      resetForm();
      fetchWorks();
    } catch (e: any) {
      console.error(e);
      setErrorMsg(e.message || 'Error saving work.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (work: any) => {
    setEditingId(work.id);
    setTitle(work.title || '');
    setDescription(work.description || '');
    setTitleImage(work.titleImage || '');
    setTitleImageAlt(work.titleImageAlt || '');
    setType(work.type || 'Design');
    setCategory(work.category || '');
    setTags((work.tags || []).join(', '));
    setKpi(work.kpi || '');
    setDuration(work.duration || '');
    setFeatured(work.featured || false);
    setMediaUrls(work.mediaUrls || []);
    setMediaFiles([]);
  };

  const handleDelete = async (id: string, workTitle: string) => {
    if (!window.confirm(`Are you sure you want to delete "${workTitle}"?`)) return;
    try {
      await deleteDoc(doc(db, 'works', id));
      await logActivity('Deleted', 'Project', workTitle);
      fetchWorks();
    } catch (e: any) {
      console.error(e);
      alert('Error deleting work');
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setDescription('');
    setTitleImage('');
    setTitleImageAlt('');
    setType('Design');
    setCategory('Digital Marketing');
    setTags('');
    setKpi('');
    setDuration('');
    setFeatured(false);
    setMediaUrls([]);
    setMediaFiles([]);
    setErrorMsg('');
  };

  const missingSeoFields = getMissingSeoFields({ title, description, titleImage, tags, titleImageAlt });
  const totalMediaSize = mediaFiles.reduce((acc, file) => acc + file.size, 0);
  const isOverBudget = totalMediaSize > 5 * 1024 * 1024; // 5MB

  return (
    <>
    <div className="grid md:grid-cols-2 gap-8">
       {/* Form Section */}
       <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-fit">
         <h2 className="text-2xl font-light text-white mb-6">{editingId ? 'Edit Work' : 'Add New Work'}</h2>
         
         <form onSubmit={handleSubmit} className="space-y-4">
           {errorMsg && <div className="text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">{errorMsg}</div>}
           {missingSeoFields.length > 0 && (
             <div className="text-yellow-400 bg-yellow-400/10 border border-yellow-500/20 p-3 rounded-lg text-sm">
               <strong>Missing SEO Fields:</strong> {missingSeoFields.join(', ')}. Complete these to improve search visibility.
             </div>
           )}
           
           <div>
             <label className={`block text-sm mb-1 ${missingSeoFields.includes('Project Title') ? 'text-yellow-400' : 'text-brand-white-70'}`}>Project Title</label>
             <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className={`w-full bg-black/40 border rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500 ${missingSeoFields.includes('Project Title') ? 'border-yellow-500/50' : 'border-white/10'}`} />
           </div>

           <div>
             <label className={`block text-sm mb-1 ${missingSeoFields.includes('Description') ? 'text-yellow-400' : 'text-brand-white-70'}`}>Description</label>
             <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className={`w-full bg-black/40 border rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500 ${missingSeoFields.includes('Description') ? 'border-yellow-500/50' : 'border-white/10'}`} />
           </div>

           <div>
             <label className={`block text-sm mb-1 ${missingSeoFields.includes('Title Image URL') ? 'text-yellow-400' : 'text-brand-white-70'}`}>Title Image URL (Cloudinary / external link)</label>
             <input type="url" value={titleImage} onChange={e => setTitleImage(e.target.value)} required className={`w-full bg-black/40 border rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500 ${missingSeoFields.includes('Title Image URL') ? 'border-yellow-500/50' : 'border-white/10'}`} />
             {titleImage && (
               <div className="mt-3">
                 <p className="text-xs text-brand-white-50 mb-1">Preview:</p>
                 <img src={titleImage} alt={titleImageAlt || "Title Image Preview"} className="w-full h-32 object-cover rounded-lg border border-white/10 bg-black/40" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.display = 'block')} />
               </div>
             )}
           </div>

           <div>
             <label className={`block text-sm mb-1 ${missingSeoFields.includes('Title Image Alt Text') ? 'text-yellow-400' : 'text-brand-white-70'}`}>Title Image Alt Text (for SEO & Accessibility)</label>
             <input type="text" value={titleImageAlt} onChange={e => setTitleImageAlt(e.target.value)} placeholder="e.g. A sleek dark mode dashboard" required className={`w-full bg-black/40 border rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500 ${missingSeoFields.includes('Title Image Alt Text') ? 'border-yellow-500/50' : 'border-white/10'}`} />
           </div>
           
           <div>
             <label className="block text-sm text-brand-white-70 mb-1">Gallery Images</label>
             <input type="file" multiple accept="image/*" onChange={handleMediaFileChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-olive-500 file:text-black hover:file:bg-olive-400" />
             {isOverBudget && (
               <div className="mt-2 text-yellow-400 bg-yellow-400/10 border border-yellow-500/20 p-2 rounded text-xs flex items-start gap-2">
                 <span>⚠️</span>
                 <span><strong>Performance Warning:</strong> Total media size exceeds 5MB ({(totalMediaSize / (1024 * 1024)).toFixed(2)}MB). Compressing large images may increase upload time or impact frontend performance. Consider optimizing images before upload.</span>
               </div>
             )}
             
             {/* Preview existing saved URLs */}
             {mediaUrls.length > 0 && (
               <div className="mt-3 grid grid-cols-4 gap-2">
                 {mediaUrls.map((url) => (
                   <div key={url} className="relative group">
                     <img src={url} alt="Gallery item" className="w-full h-16 object-cover rounded-lg border border-white/10" />
                     <button type="button" onClick={() => removeMediaUrl(url)} className="absolute top-1 right-1 bg-black/70 hover:bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                       <X size={12} />
                     </button>
                   </div>
                 ))}
               </div>
             )}

             {/* Preview local files to upload */}
             {mediaFiles.length > 0 && (
               <div className="mt-3 grid grid-cols-4 gap-2">
                 {mediaFiles.map((file, index) => (
                   <div key={`${file.name}-${index}`} className="relative group">
                     <img src={URL.createObjectURL(file)} alt="Upload preview" className="w-full h-16 object-cover rounded-lg border border-olive-500/50" />
                     <button type="button" onClick={() => removeMediaFile(index)} className="absolute top-1 right-1 bg-black/70 hover:bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                       <X size={12} />
                     </button>
                   </div>
                 ))}
               </div>
             )}
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-sm text-brand-white-70 mb-1">Category</label>
               <select value={category} onChange={e => setCategory(e.target.value)} required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500 appearance-none">
                 <option value="" disabled>Select a Category...</option>
                 <option value="Digital Marketing">Digital Marketing</option>
                 <option value="Bespoke Software">Bespoke Software</option>
                 <option value="Cyber Security">Cyber Security</option>
                 {categoriesList.map(c => (
                   <option key={c.id} value={c.name}>{c.name}</option>
                 ))}
               </select>
             </div>
             <div>
               <label className="block text-sm text-brand-white-70 mb-1">Type</label>
               <input type="text" value={type} onChange={e => setType(e.target.value)} placeholder="e.g. Graphic Design" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500" />
             </div>
           </div>

           <div>
             <label className={`block text-sm mb-1 ${missingSeoFields.includes('Tags') ? 'text-yellow-400' : 'text-brand-white-70'}`}>Tags (comma separated)</label>
             <input type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="React, UI/UX, Marketing" className={`w-full bg-black/40 border rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500 ${missingSeoFields.includes('Tags') ? 'border-yellow-500/50' : 'border-white/10'}`} />
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-sm text-brand-white-70 mb-1">KPI Achieved</label>
               <input type="text" value={kpi} onChange={e => setKpi(e.target.value)} placeholder="e.g. +200% Conversions" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500" />
             </div>
             <div>
               <label className="block text-sm text-brand-white-70 mb-1">Project Duration</label>
               <input type="text" value={duration} onChange={e => setDuration(e.target.value)} placeholder="e.g. 3 Months" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500" />
             </div>
           </div>

           <div className="flex items-center gap-2">
             <input type="checkbox" id="featuredWork" checked={featured} onChange={e => setFeatured(e.target.checked)} className="w-4 h-4 rounded bg-black/40 border-white/10 accent-olive-500" />
             <label htmlFor="featuredWork" className="text-sm text-white">Feature on Home Screen</label>
           </div>

           <div className="pt-4 flex gap-3 flex-wrap">
             <button type="submit" disabled={submitting} className="flex-1 bg-olive-500 text-black px-4 py-3 rounded-xl font-bold hover:bg-olive-400 disabled:opacity-50 transition-colors">
               {submitting ? 'Saving...' : editingId ? 'Update Work' : 'Add Work'}
             </button>
             <button type="button" onClick={() => setShowPreview(true)} className="px-4 py-3 bg-white/10 text-olive-400 rounded-xl hover:bg-white/20 transition-colors font-medium flex items-center justify-center gap-2">
               <Eye size={18} /> Preview
             </button>
             {editingId && (
               <button type="button" onClick={resetForm} className="px-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors font-medium">Cancel</button>
             )}
           </div>
         </form>
       </div>

       {/* List Section */}
       <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-fit">
         <h2 className="text-2xl font-light text-white mb-6">Manage Works</h2>
         {loading ? (
             <p className="text-brand-white-70">Loading works...</p>
         ) : works.length === 0 ? (
             <p className="text-brand-white-70">No custom works added yet. (Static works are hidden from here)</p>
         ) : (
             <div className="space-y-4">
                 {works.map((work) => (
                     <div key={work.id} className="flex items-center gap-4 p-4 border border-white/5 bg-black/20 rounded-xl hover:border-olive-500/30 transition-colors">
                         {work.titleImage && (
                             <img src={work.titleImage} alt={work.title} className="w-16 h-16 rounded-lg object-cover bg-white/5" />
                         )}
                         <div className="flex-1 min-w-0">
                             <h3 className="text-white font-medium truncate">
                               {work.title}
                               {work.featured && <span className="ml-2 inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-olive-500/20 text-olive-400 border border-olive-500/30 align-middle">Featured</span>}
                             </h3>
                             <p className="text-xs text-brand-white-50 truncate">{work.category} • {work.type}</p>
                         </div>
                         <div className="flex flex-col gap-2">
                             <button onClick={() => handleEdit(work)} className="text-xs px-3 py-1 bg-olive-500/10 text-olive-400 rounded-full hover:bg-olive-500/20">Edit</button>
                             <button onClick={() => handleDelete(work.id, work.title)} className="text-xs px-3 py-1 bg-red-500/10 text-red-400 rounded-full hover:bg-red-500/20">Delete</button>
                         </div>
                     </div>
                 ))}
             </div>
         )}
       </div>
    </div>
        {showPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90" onClick={() => setShowPreview(false)}>
             <div onClick={e => e.stopPropagation()} className="relative w-full max-w-sm">
                <button onClick={() => setShowPreview(false)} className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors bg-white/10 p-2 rounded-full"><X size={20}/></button>
                <div className="group relative w-full overflow-hidden rounded-[2rem] bg-olive-900 border border-white/5 shadow-2xl relative text-left">
                  <div className="aspect-[4/3] relative w-full h-auto">
                   <img 
                     src={titleImage || 'https://via.placeholder.com/800x600?text=Preview+Image'}
                     alt="Preview"
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                   />
                   <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-olive-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 backdrop-blur-md">
                      <ArrowUpRight size={24} />
                   </div>
                  </div>
                  <div className="flex flex-col items-start px-6 pt-4 pb-6 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                     <span className="text-olive-500 text-xs font-bold uppercase tracking-widest mb-3 border border-olive-500/30 px-3 py-1 rounded-full">{category || 'Category'}</span>
                     <h2 className="font-display font-black text-[clamp(1.25rem,4vw,1.875rem)] uppercase tracking-tight text-white mb-2 shadow-sm break-words hyphens-auto">{title || 'Project Title'}</h2>
                     {(duration || kpi) && (
                       <div className="flex items-center gap-3 mt-1 w-full text-xs font-medium uppercase tracking-wider text-white">
                         {duration && <span className="bg-white/10 px-2 py-1 rounded-sm backdrop-blur-md">⏱ {duration}</span>}
                         {kpi && <span className="text-olive-400 bg-black/60 border border-olive-500/20 px-2 py-1 rounded-sm backdrop-blur-md">🚀 {kpi}</span>}
                       </div>
                     )}
                  </div>
                </div>
             </div>
          </div>
        )}
    </>
  );
}
