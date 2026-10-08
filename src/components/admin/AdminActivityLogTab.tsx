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
    <div className="bg-white border border-[#E4E4E4] rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-light text-[#182012] mb-6">Activity Log</h2>
      {loading ? (
        <p className="text-[#5A644D]">Loading logs...</p>
      ) : logs.length === 0 ? (
        <p className="text-[#5A644D]">No activities recorded yet.</p>
      ) : (
        <div className="space-y-4">
          {logs.map((log) => {
            const date = log.createdAt ? new Date(log.createdAt.toDate()).toLocaleString() : 'Just now';
            return (
              <div key={log.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-[#E4E4E4] bg-white rounded-xl hover:border-olive-500/40 transition-colors gap-2 shadow-xs">
                <div className="flex-1 min-w-0 pr-4">
                  <p className="text-[#182012]">
                    <span className="font-semibold text-olive-600">{log.action}</span> {log.resourceType}: <span className="font-medium">"{log.resourceName}"</span>
                  </p>
                  <p className="text-xs text-[#859177] mt-1">by {log.userEmail}</p>
                </div>
                <div className="text-xs text-[#859177] shrink-0">
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
