import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAppContext } from '../contexts/AppContext';
import { Brain, Target, BookOpen, TestTube } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentPage } = useAppContext();

  const features = [
    {
      icon: Brain,
      title: 'Thought Experiments',
      description: 'Engage with carefully crafted scenarios that challenge your assumptions and expand your perspective.',
    },
    {
      icon: Target,
      title: 'Critical Analysis',
      description: 'Learn to identify logical fallacies, cognitive biases, and manipulative techniques in media.',
    },
    {
      icon: BookOpen,
      title: 'Factual Resources',
      description: 'Access a curated library of evidence-based information and diverse viewpoints.',
    },
    {
      icon: TestTube,
      title: 'Interactive Tests',
      description: 'Test your understanding and track your progress through engaging quizzes and assessments.',
    },
  ];

  return (
    <div className="space-y-8 fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-6 slide-up">
        <div className="flex justify-center">
          <Brain className="h-16 w-16 text-primary-600 bounce-in" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to Let's Talk
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A journey of critical thinking and perspective examination. Explore thought experiments, 
          challenge your assumptions, and develop a more nuanced understanding of complex issues.
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={() => setCurrentPage('modules')}
            className="text-lg px-8 py-4 bounce-in"
          >
            Start Your Journey
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center space-y-4 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-center">
              <feature.icon className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      {/* About Section */}
      <Card className="space-y-4 slide-up">
        <h2 className="text-2xl font-semibold text-gray-900">
          About This Journey
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This application is designed to help you develop critical thinking skills and examine 
          your perspectives on various issues. Through interactive thought experiments, factual 
          resources, and reflective exercises, you'll learn to identify biases, question assumptions, 
          and engage with information more thoughtfully.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Remember, the goal is not to change your mind, but to help you think more clearly, 
          understand different viewpoints, and make more informed decisions based on evidence 
          rather than emotion or preconceived notions.
        </p>
      </Card>
    </div>
  );
}; 