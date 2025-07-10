import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAppContext } from '../contexts/AppContext';
import { Brain, ArrowRight, Clock, BookOpen } from 'lucide-react';
import type { Module } from '../types';
import { modules } from '../data/modules';

export const ModulesPage: React.FC = () => {
  const { setCurrentPage, setCurrentModule, setCurrentSection } = useAppContext();

  const handleStartModule = (module: Module) => {
    setCurrentModule(module);
    setCurrentSection(0);
    setCurrentPage('module');
  };

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-4 slide-up">
        <Brain className="h-12 w-12 text-primary-600 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-900">
          Choose Your Module
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select a module to begin your critical thinking journey. Each module contains 
          thought experiments, resources, and interactive content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <Card key={module.id} className="space-y-4 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {module.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>~15 min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{module.sections.length} sections</span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              onClick={() => handleStartModule(module)}
              className="w-full"
            >
              Start Module
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Card>
        ))}
      </div>

      <Card className="slide-up">
        <div className="text-center py-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            More Modules Coming Soon
          </h2>
          <p className="text-gray-600">
            Additional modules covering topics like logical fallacies, cognitive biases, 
            and fact-checking techniques will be available in the next sprint.
          </p>
        </div>
      </Card>
    </div>
  );
}; 