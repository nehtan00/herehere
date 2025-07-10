import React from 'react';
import { Card } from './Card';
import { Quote } from 'lucide-react';

interface QuoteDisplayProps {
  text: string;
  source: string;
}

export const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ text, source }) => {
  return (
    <Card className="relative">
      <div className="absolute top-4 left-4">
        <Quote className="h-8 w-8 text-gray-300" />
      </div>
      <div className="pl-12">
        <blockquote className="text-lg text-gray-800 italic leading-relaxed mb-4">
          "{text}"
        </blockquote>
        <footer className="text-sm text-gray-600 font-medium">
          — {source}
        </footer>
      </div>
    </Card>
  );
}; 