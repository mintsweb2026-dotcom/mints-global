import React, { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';

export function AdminActivityLogTab() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'activity_logs'), orderBy('createdAt', 'desc'), limit(100));
        const snapshot = await getDocs(q);
        setLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        console.error("Error fetching activity logs", e);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-light text-white mb-6">Activity Log</h2>
      {loading ? (
        <p className="text-brand-white-70">Loading logs...</p>
      ) : logs.length === 0 ? (
        <p className="text-brand-white-70">No activities recorded yet.</p>
      ) : (
        <div className="space-y-4">
          {logs.map((log) => {
            const date = log.createdAt ? new Date(log.createdAt.toDate()).toLocaleString() : 'Just now';
            return (
              <div key={log.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-white/5 bg-black/20 rounded-xl hover:border-olive-500/30 transition-colors gap-2">
                <div className="flex-1 min-w-0 pr-4">
                  <p className="text-white">
                    <span className="font-semibold text-olive-400">{log.action}</span> {log.resourceType}: <span className="font-medium">"{log.resourceName}"</span>
                  </p>
                  <p className="text-xs text-brand-white-50 mt-1">by {log.userEmail}</p>
                </div>
                <div className="text-xs text-brand-white-50 shrink-0">
                  {date}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
