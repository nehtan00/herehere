export interface ContentSection {
  id: string;
  type: 'thoughtExperiment' | 'quote' | 'text' | 'resourceLink' | 'quiz';
  title?: string;
  content?: string;
  prompt?: string;
  text?: string;
  source?: string;
  url?: string;
  label?: string;
  questions?: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  sections: ContentSection[];
}

export interface UserProgress {
  userId: string;
  currentModule: string;
  currentSection: number;
  completedModules: string[];
  completedSections: Record<string, number[]>;
  reflections: Record<string, string>;
  quizScores: Record<string, number>;
}

export interface Resource {
  id: string;
  type: 'fact-checking' | 'education' | 'media-analysis' | 'science' | 'health' | 'economics' | 'demographics' | 'politics';
  title: string;
  description: string;
  url: string;
}

export interface AppContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  currentModule: Module | null;
  setCurrentModule: (module: Module | null) => void;
  currentSection: number;
  setCurrentSection: (section: number) => void;
  userProgress: UserProgress | null;
  setUserProgress: (progress: UserProgress | null) => void;
  user: any; // Firebase User type
  isLoading: boolean;
  updateProgress: (updates: Partial<UserProgress>) => Promise<void>;
  saveUserReflection: (moduleId: string, sectionId: string, reflection: string) => Promise<void>;
  getUserReflection: (moduleId: string, sectionId: string) => Promise<string | null>;
} 