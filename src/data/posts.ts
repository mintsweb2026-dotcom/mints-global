import { db } from '../lib/firebase';
import { collection, getDocs, query, orderBy, where, limit } from 'firebase/firestore';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags?: string[];
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  author?: string;
  image?: string;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  views?: number;
  updatedAtIso?: string;
}

export const getPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      const createdAtDate = data.createdAt ? data.createdAt.toDate() : new Date();
      return {
        id: doc.id,
        title: data.title,
        slug: doc.id, // using document ID as slug for simplicity since we don't store slug in FS
        category: data.category || 'BLOG',
        date: data.createdAt ? createdAtDate.toLocaleDateString() : 'Just now',
        updatedAtIso: (data.updatedAt ? data.updatedAt.toDate() : createdAtDate).toISOString(),
        readTime: data.readTime || '5 min read',
        excerpt: data.excerpt || '',
        content: data.content || '',
        author: data.author || 'Mints Global',
        image: data.image || '',
        imageAlt: data.imageAlt || '',
        seoTitle: data.seoTitle || '',
        seoDescription: data.seoDescription || '',
        views: data.views || 0,
        tags: data.tags || [],
        ...data,
      } as BlogPost;
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug || p.id === slug);
};


