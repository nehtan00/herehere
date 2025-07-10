import React from 'react';
import { Menu, Brain, User, BookOpen } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

export const Header: React.FC = () => {
  const { currentPage, setCurrentPage, user } = useAppContext();

  const navigationItems = [
    { id: 'home', label: 'Home', page: 'home' },
    { id: 'modules', label: 'Modules', page: 'modules' },
    { id: 'resources', label: 'Resources', page: 'resources' },
    { id: 'tests', label: 'Tests', page: 'tests' },
    { id: 'reflections', label: 'My Reflections', page: 'reflections', icon: BookOpen },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-primary-600" aria-hidden="true" />
            <h1 className="text-xl font-semibold text-gray-900">
              Let's Talk
            </h1>
            <span className="text-sm text-gray-500 hidden sm:inline">
              Critical Thinking Journey
            </span>
          </div>
          
          <nav className="flex items-center space-x-4" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 ${
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={item.label}
                >
                  {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            {/* User ID Display */}
            {user && (
              <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg" role="status" aria-label="User ID">
                <User className="h-4 w-4 text-gray-600" aria-hidden="true" />
                <span className="text-sm text-gray-700 font-mono">
                  {user.uid.slice(0, 8)}...
                </span>
              </div>
            )}
            
            <button
              className="h-6 w-6 text-gray-600 lg:hidden"
              aria-label="Open mobile menu"
              aria-expanded="false"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}; 