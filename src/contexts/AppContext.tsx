import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AppContextType, Module, UserProgress } from '../types';
import { 
  signInUser, 
  onAuthStateChange,
  saveUserProgress,
  getUserProgress,
  listenToUserProgress,
  saveReflection,
  getReflection
} from '../services/firebase';
import type { User } from 'firebase/auth';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize user authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (authUser) => {
      if (authUser) {
        setUser(authUser);
        // Load user progress
        try {
          const progress = await getUserProgress(authUser.uid);
          if (progress) {
            setUserProgress(progress);
          } else {
            // Initialize new user progress
            const newProgress: UserProgress = {
              userId: authUser.uid,
              currentModule: '',
              currentSection: 0,
              completedModules: [],
              completedSections: {},
              reflections: {},
              quizScores: {},
            };
            setUserProgress(newProgress);
            await saveUserProgress(authUser.uid, newProgress);
          }
        } catch (error) {
          console.error('Error loading user progress:', error);
        }
      } else {
        // Sign in anonymously if no user
        try {
          const newUser = await signInUser();
          setUser(newUser);
        } catch (error) {
          console.error('Error signing in user:', error);
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Listen to real-time progress updates
  useEffect(() => {
    if (!user) return;

    const unsubscribe = listenToUserProgress(user.uid, (progress) => {
      if (progress) {
        setUserProgress(progress);
      }
    });

    return () => unsubscribe();
  }, [user]);

  const updateProgress = async (updates: Partial<UserProgress>) => {
    if (!user || !userProgress) return;

    const updatedProgress = { ...userProgress, ...updates };
    setUserProgress(updatedProgress);
    
    try {
      await saveUserProgress(user.uid, updatedProgress);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const saveUserReflection = async (moduleId: string, sectionId: string, reflection: string) => {
    if (!user) return;

    try {
      await saveReflection(user.uid, moduleId, sectionId, reflection);
      
      // Update local state
      if (userProgress) {
        const updatedReflections = {
          ...userProgress.reflections,
          [`${moduleId}_${sectionId}`]: reflection,
        };
        await updateProgress({ reflections: updatedReflections });
      }
    } catch (error) {
      console.error('Error saving reflection:', error);
    }
  };

  const getUserReflection = async (moduleId: string, sectionId: string): Promise<string | null> => {
    if (!user) return null;

    try {
      return await getReflection(user.uid, moduleId, sectionId);
    } catch (error) {
      console.error('Error getting reflection:', error);
      return null;
    }
  };

  const value: AppContextType = {
    currentPage,
    setCurrentPage,
    currentModule,
    setCurrentModule,
    currentSection,
    setCurrentSection,
    userProgress,
    setUserProgress,
    user,
    isLoading,
    updateProgress,
    saveUserReflection,
    getUserReflection,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}; 