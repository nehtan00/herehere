import { 
  signInAnonymously, 
  onAuthStateChanged, 
  type User 
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  onSnapshot
} from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import type { UserProgress } from '../types';

const APP_ID = 'lets-talk-app';

// User Authentication
export const signInUser = async (): Promise<User> => {
  try {
    const result = await signInAnonymously(auth);
    return result.user;
  } catch (error) {
    console.error('Error signing in user:', error);
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// User Progress Management
export const getUserProgressRef = (userId: string) => {
  return doc(db, 'artifacts', APP_ID, 'users', userId, 'progress', 'data');
};

export const saveUserProgress = async (userId: string, progress: UserProgress): Promise<void> => {
  try {
    const progressRef = getUserProgressRef(userId);
    await setDoc(progressRef, progress, { merge: true });
  } catch (error) {
    console.error('Error saving user progress:', error);
    throw error;
  }
};

export const getUserProgress = async (userId: string): Promise<UserProgress | null> => {
  try {
    const progressRef = getUserProgressRef(userId);
    const docSnap = await getDoc(progressRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as UserProgress;
    }
    return null;
  } catch (error) {
    console.error('Error getting user progress:', error);
    throw error;
  }
};

export const updateUserProgress = async (userId: string, updates: Partial<UserProgress>): Promise<void> => {
  try {
    const progressRef = getUserProgressRef(userId);
    await updateDoc(progressRef, updates);
  } catch (error) {
    console.error('Error updating user progress:', error);
    throw error;
  }
};

export const listenToUserProgress = (userId: string, callback: (progress: UserProgress | null) => void) => {
  const progressRef = getUserProgressRef(userId);
  return onSnapshot(progressRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data() as UserProgress);
    } else {
      callback(null);
    }
  });
};

// Reflections Management
export const saveReflection = async (userId: string, moduleId: string, sectionId: string, reflection: string): Promise<void> => {
  try {
    const reflectionRef = doc(db, 'artifacts', APP_ID, 'users', userId, 'reflections', `${moduleId}_${sectionId}`);
    await setDoc(reflectionRef, {
      moduleId,
      sectionId,
      reflection,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error saving reflection:', error);
    throw error;
  }
};

export const getReflection = async (userId: string, moduleId: string, sectionId: string): Promise<string | null> => {
  try {
    const reflectionRef = doc(db, 'artifacts', APP_ID, 'users', userId, 'reflections', `${moduleId}_${sectionId}`);
    const docSnap = await getDoc(reflectionRef);
    
    if (docSnap.exists()) {
      return docSnap.data().reflection;
    }
    return null;
  } catch (error) {
    console.error('Error getting reflection:', error);
    throw error;
  }
}; 