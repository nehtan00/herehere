import React, { useState } from 'react';
import { Card } from '../components/Card';
import { 
  BookOpen, 
  ExternalLink, 
  Search, 
  CheckCircle, 
  GraduationCap, 
  Monitor, 
  TestTube, 
  Heart, 
  TrendingUp, 
  Users, 
  Vote
} from 'lucide-react';
import { resources } from '../data/resources';

const typeIcon = {
  'fact-checking': CheckCircle,
  'education': GraduationCap,
  'media-analysis': Monitor,
  'science': TestTube,
  'health': Heart,
  'economics': TrendingUp,
  'demographics': Users,
  'politics': Vote,
};

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'fact-checking', name: 'Fact-Checking' },
    { id: 'education', name: 'Education' },
    { id: 'media-analysis', name: 'Media Analysis' },
    { id: 'science', name: 'Science' },
    { id: 'health', name: 'Health' },
    { id: 'economics', name: 'Economics' },
    { id: 'demographics', name: 'Demographics' },
    { id: 'politics', name: 'Politics' },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.type === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-4 slide-up">
        <BookOpen className="h-12 w-12 text-primary-600 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-900">
          Fact-Checking & Research Resources
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access reliable sources for verifying claims, understanding bias, and developing critical thinking skills.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => {
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

      {filteredResources.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No resources found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}; 