import React, { Suspense, lazy } from 'react';
import { AppProvider } from './contexts/AppContext';
import { Layout } from './components/Layout';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useAppContext } from './contexts/AppContext';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load page components for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ModulesPage = lazy(() => import('./pages/ModulesPage').then(module => ({ default: module.ModulesPage })));
const ModulePage = lazy(() => import('./pages/ModulePage').then(module => ({ default: module.ModulePage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(module => ({ default: module.ResourcesPage })));
const TestsPage = lazy(() => import('./pages/TestsPage').then(module => ({ default: module.TestsPage })));
const MyReflectionsPage = lazy(() => import('./pages/MyReflectionsPage').then(module => ({ default: module.MyReflectionsPage })));

const AppContent: React.FC = () => {
  const { currentPage } = useAppContext();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'modules':
        return <ModulesPage />;
      case 'module':
        return <ModulePage />;
      case 'resources':
        return <ResourcesPage />;
      case 'tests':
        return <TestsPage />;
      case 'reflections':
        return <MyReflectionsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        {renderPage()}
      </Suspense>
    </Layout>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
