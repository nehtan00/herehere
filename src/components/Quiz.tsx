import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
  onComplete: (score: number, total: number) => void;
  className?: string;
}

export const Quiz: React.FC<QuizProps> = ({ question, options, onComplete, className = '' }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    setIsAnswered(true);
    setShowExplanation(true);
    
    const correctAnswers = options.filter(option => option.isCorrect).length;
    const selectedCorrect = options.find(option => option.id === selectedOption)?.isCorrect || false;
    const score = selectedCorrect ? 1 : 0;
    
    onComplete(score, correctAnswers);
  };

  const handleKeyDown = (event: React.KeyboardEvent, optionId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOptionSelect(optionId);
    }
  };

  const getOptionClasses = (option: QuizOption) => {
    const baseClasses = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
    
    if (!isAnswered) {
      return `${baseClasses} border-gray-200 hover:border-gray-300 hover:bg-gray-50 ${
        selectedOption === option.id ? 'border-primary-500 bg-primary-50' : ''
      }`;
    }
    
    if (option.isCorrect) {
      return `${baseClasses} border-green-500 bg-green-50 text-green-800`;
    }
    
    if (selectedOption === option.id && !option.isCorrect) {
      return `${baseClasses} border-red-500 bg-red-50 text-red-800`;
    }
    
    return `${baseClasses} border-gray-200 bg-gray-50 text-gray-500`;
  };

  const correctOption = options.find(option => option.isCorrect);
  const selectedOptionData = options.find(option => option.id === selectedOption);

  return (
    <Card className={`space-y-6 ${className}`}>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4" id="quiz-question">
          {question}
        </h3>
        
        <div className="space-y-3" role="radiogroup" aria-labelledby="quiz-question">
          {options.map((option) => (
            <div key={option.id} className="relative">
              <button
                type="button"
                className={getOptionClasses(option)}
                onClick={() => handleOptionSelect(option.id)}
                onKeyDown={(e) => handleKeyDown(e, option.id)}
                disabled={isAnswered}
                role="radio"
                aria-checked={selectedOption === option.id}
                aria-describedby={`option-${option.id}`}
                tabIndex={isAnswered ? -1 : 0}
              >
                <div className="flex items-center justify-between">
                  <span id={`option-${option.id}`}>{option.text}</span>
                  {isAnswered && option.isCorrect && (
                    <CheckCircle className="h-5 w-5 text-green-600" aria-label="Correct answer" />
                  )}
                  {isAnswered && selectedOption === option.id && !option.isCorrect && (
                    <XCircle className="h-5 w-5 text-red-600" aria-label="Incorrect answer" />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {!isAnswered && (
        <Button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className="w-full"
          aria-label="Submit quiz answer"
        >
          Submit Answer
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}

      {showExplanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
          <h4 className="font-semibold text-blue-900">Explanation</h4>
          {selectedOptionData?.explanation && (
            <p className="text-blue-800">{selectedOptionData.explanation}</p>
          )}
          {correctOption && correctOption.id !== selectedOption && (
            <div className="text-blue-800">
              <p className="font-medium">Correct answer:</p>
              <p>{correctOption.text}</p>
              {correctOption.explanation && (
                <p className="mt-2 text-sm">{correctOption.explanation}</p>
              )}
            </div>
          )}
        </div>
      )}
    </Card>
  );
}; 