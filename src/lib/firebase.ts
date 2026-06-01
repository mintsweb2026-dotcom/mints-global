import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

const firebaseConfig = {
  projectId: typeof import.meta.env !== 'undefined' ? import.meta.env.VITE_FIREBASE_PROJECT_ID : (typeof process !== 'undefined' && process.env ? process.env.VITE_FIREBASE_PROJECT_ID : undefined),
  appId: typeof import.meta.env !== 'undefined' ? import.meta.env.VITE_FIREBASE_APP_ID : (typeof process !== 'undefined' && process.env ? process.env.VITE_FIREBASE_APP_ID : undefined),
  apiKey: typeof import.meta.env !== 'undefined' ? import.meta.env.VITE_FIREBASE_API_KEY : (typeof process !== 'undefined' && process.env ? process.env.VITE_FIREBASE_API_KEY : undefined),
  authDomain: typeof import.meta.env !== 'undefined' ? import.meta.env.VITE_FIREBASE_AUTH_DOMAIN : (typeof process !== 'undefined' && process.env ? process.env.VITE_FIREBASE_AUTH_DOMAIN : undefined),
  storageBucket: typeof import.meta.env !== 'undefined' ? import.meta.env.VITE_FIREBASE_STORAGE_BUCKET : (typeof process !== 'undefined' && process.env ? process.env.VITE_FIREBASE_STORAGE_BUCKET : undefined),
  messagingSenderId: typeof import.meta.env !== 'undefined' ? import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID : (typeof process !== 'undefined' && process.env ? process.env.VITE_FIREBASE_MESSAGING_SENDER_ID : undefined),
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, typeof import.meta.env !== 'undefined' ? import.meta.env.VITE_FIREBASE_FIRESTORE_DB_ID : (typeof process !== 'undefined' && process.env ? process.env.VITE_FIREBASE_FIRESTORE_DB_ID : undefined)); // CRITICAL: Database ID
export const auth = getAuth(app);
export const storage = getStorage(app);

export let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firebase Connection verified");
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
