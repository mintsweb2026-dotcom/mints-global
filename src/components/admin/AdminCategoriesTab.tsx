import React, { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp, orderBy, query } from 'firebase/firestore';
import { logActivity } from '../../lib/activity';

export function AdminCategoriesTab() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchCategories = async () => {
    setLoading(true);
    try {
       const q = query(collection(db, 'work_categories'), orderBy('createdAt', 'desc'));
       const snapshot = await getDocs(q);
       const catData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
       setCategories(catData);
    } catch (e) {
       console.error("Error fetching categories", e);
    } finally {
       setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    setSubmitting(true);
    setErrorMsg('');

    try {
      const data = {
        name,
        description,
        updatedAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, 'work_categories', editingId), data);
        await logActivity('Edited', 'Category', data.name);
      } else {
        await addDoc(collection(db, 'work_categories'), {
          ...data,
          createdAt: serverTimestamp()
        });
        await logActivity('Created', 'Category', data.name);
      }
      
      setEditingId(null);
      setName('');
      setDescription('');
      fetchCategories();
    } catch (e: any) {
      console.error(e);
      setErrorMsg(e.message || 'Error saving category.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (cat: any) => {
    setEditingId(cat.id);
    setName(cat.name || '');
    setDescription(cat.description || '');
  };

  const handleDelete = async (id: string, categoryName: string) => {
    if (!window.confirm(`Are you sure you want to delete "${categoryName}"?`)) return;
    try {
      await deleteDoc(doc(db, 'work_categories', id));
      await logActivity('Deleted', 'Category', categoryName);
      fetchCategories();
    } catch (e: any) {
      console.error(e);
      alert('Error deleting category');
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
       {/* Form Section */}
       <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-fit">
         <h2 className="text-2xl font-light text-white mb-6">{editingId ? 'Edit Category' : 'Add New Category'}</h2>
         
         <form onSubmit={handleSubmit} className="space-y-4">
           {errorMsg && <div className="text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">{errorMsg}</div>}
           
           <div>
             <label className="block text-sm text-brand-white-70 mb-1">Category Name</label>
             <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500" />
           </div>

           <div>
             <label className="block text-sm text-brand-white-70 mb-1">Description (Optional)</label>
             <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-olive-500" />
           </div>

           <div className="pt-4 flex gap-3">
             <button type="submit" disabled={submitting} className="flex-1 bg-olive-500 text-black px-4 py-3 rounded-xl font-bold hover:bg-olive-400 disabled:opacity-50 transition-colors">
               {submitting ? 'Saving...' : editingId ? 'Update Category' : 'Add Category'}
             </button>
             {editingId && (
               <button type="button" onClick={() => { setEditingId(null); setName(''); setDescription(''); setErrorMsg(''); }} className="px-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors font-medium">Cancel</button>
             )}
           </div>
         </form>
       </div>

       {/* List Section */}
       <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-fit">
         <h2 className="text-2xl font-light text-white mb-6">Manage Categories</h2>
         {loading ? (
             <p className="text-brand-white-70">Loading categories...</p>
         ) : categories.length === 0 ? (
             <p className="text-brand-white-70">No categories added yet.</p>
         ) : (
             <div className="space-y-4">
                 {categories.map((cat) => (
                     <div key={cat.id} className="flex items-center justify-between p-4 border border-white/5 bg-black/20 rounded-xl hover:border-olive-500/30 transition-colors">
                         <div className="flex-1 min-w-0 pr-4">
                             <h3 className="text-white font-medium truncate">{cat.name}</h3>
                             {cat.description && <p className="text-xs text-brand-white-50 truncate">{cat.description}</p>}
                         </div>
                         <div className="flex flex-col gap-2 shrink-0">
                             <button onClick={() => handleEdit(cat)} className="text-xs px-3 py-1 bg-olive-500/10 text-olive-400 rounded-full hover:bg-olive-500/20">Edit</button>
                             <button onClick={() => handleDelete(cat.id, cat.name)} className="text-xs px-3 py-1 bg-red-500/10 text-red-400 rounded-full hover:bg-red-500/20">Delete</button>
                         </div>
                     </div>
                 ))}
             </div>
         )}
       </div>
    </div>
  );
}
