import React, { useState } from 'react';
import { Card } from './Card';
import { Quote, ChevronDown, ChevronUp, Calendar, MapPin, Info } from 'lucide-react';

interface QuoteDisplayProps {
  text: string;
  source: string;
  fullQuote?: string;
  context?: string;
  date?: string;
  location?: string;
  occasion?: string;
}

export const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ 
  text, 
  source, 
  fullQuote, 
  context, 
  date, 
  location, 
  occasion 
}) => {
  const [showFullContext, setShowFullContext] = useState(false);

  return (
    <Card className="relative">
      <div className="absolute top-4 left-4">
        <Quote className="h-8 w-8 text-gray-300" />
      </div>
      <div className="pl-12">
        <blockquote className="text-lg text-gray-800 italic leading-relaxed mb-4">
          "{text}"
        </blockquote>
        
        <footer className="text-sm text-gray-600 font-medium mb-3">
          — {source}
        </footer>

        {/* Context Information */}
        {(date || location || occasion) && (
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {date}
              </div>
            )}
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {location}
              </div>
            )}
            {occasion && (
              <div className="flex items-center gap-1">
                <Info className="h-3 w-3" />
                {occasion}
              </div>
            )}
          </div>
        )}

        {/* Expandable Context */}
        {(fullQuote || context) && (
          <div className="border-t border-gray-200 pt-3">
            <button
              onClick={() => setShowFullContext(!showFullContext)}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors duration-200"
            >
              {showFullContext ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show Full Context
                </>
              )}
            </button>

            {showFullContext && (
              <div className="mt-3 space-y-3">
                {context && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                    <h4 className="font-medium text-blue-900 mb-1">Context:</h4>
                    <p className="text-blue-800 text-sm">{context}</p>
                  </div>
                )}
                
                {fullQuote && fullQuote !== text && (
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-gray-900 mb-2">Full Quote:</h4>
                    <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                      "{fullQuote}"
                    </blockquote>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}; 