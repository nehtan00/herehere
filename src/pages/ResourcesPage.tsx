import React from 'react';
import { Card } from '../components/Card';
import { BookOpen, ExternalLink, Film, Users, FileText } from 'lucide-react';
import { resources } from '../data/resources';

const typeIcon = {
  book: BookOpen,
  article: FileText,
  documentary: Film,
  organization: Users,
};

export const ResourcesPage: React.FC = () => {
  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-4 slide-up">
        <BookOpen className="h-12 w-12 text-primary-600 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-900">
          Resources Library
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access a curated collection of books, articles, documentaries, and organizations 
          that promote critical thinking and evidence-based analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => {
          const Icon = typeIcon[resource.type];
          return (
            <Card key={resource.id} className="flex flex-col h-full justify-between slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="flex items-center space-x-3 mb-2">
                <Icon className="h-6 w-6 text-primary-600" />
                <span className="text-base font-semibold text-gray-900">
                  {resource.title}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4 flex-1">
                {resource.description}
              </p>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium underline mt-auto transition-colors duration-200"
              >
                Visit Resource
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Card>
          );
        })}
      </div>
    </div>
  );
}; 