import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from './firebase';

type ActionType = 'Created' | 'Edited' | 'Deleted';
type ResourceType = 'Project' | 'Category' | 'Post';

export const logActivity = async (
  action: ActionType,
  resourceType: ResourceType,
  resourceName: string
) => {
  const userEmail = auth.currentUser?.email;
  if (!userEmail) return;

  try {
    await addDoc(collection(db, 'activity_logs'), {
      userEmail,
      action,
      resourceType,
      resourceName,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Failed to log activity', error);
  }
};
