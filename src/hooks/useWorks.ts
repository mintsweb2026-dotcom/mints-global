import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { projects as staticProjects, Project } from '../data/projects';

export function useWorks() {
  const [works, setWorks] = useState<Project[]>(staticProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchWorks() {
      try {
        const q = query(collection(db, 'works'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const dynamicWorks = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            _id: doc.id,
            title: data.title,
            description: data.description,
            titleImage: data.titleImage,
            titleImageAlt: data.titleImageAlt || '',
            type: data.type || '',
            mediaUrls: data.mediaUrls || [],
            category: { _id: data.category || '', name: data.category || '', description: '' },
            tags: data.tags || [],
            kpi: data.kpi || '',
            duration: data.duration || '',
            featured: data.featured || false,
            createdAt: data.createdAt ? new Date(data.createdAt.toDate()).toISOString() : new Date().toISOString(),
            updatedAt: data.updatedAt ? new Date(data.updatedAt.toDate()).toISOString() : new Date().toISOString(),
            __v: 0
          } as Project;
        });
        setWorks([...dynamicWorks, ...staticProjects]);
      } catch (err) {
        console.error('Failed to fetch works:', err);
        setError('Failed to fetch works');
      } finally {
        setLoading(false);
      }
    }
    
    fetchWorks();
  }, []);

  return { works, loading, error };
}
