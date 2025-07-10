import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Quiz } from '../components/Quiz';
import { TestTube, CheckCircle } from 'lucide-react';

interface QuizData {
  id: string;
  question: string;
  options: Array<{
    id: string;
    text: string;
    isCorrect: boolean;
    explanation?: string;
  }>;
}

export const TestsPage: React.FC = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const quizzes: QuizData[] = [
    {
      id: 'bias-1',
      question: 'What is confirmation bias?',
      options: [
        {
          id: 'a',
          text: 'The tendency to search for, interpret, and remember information that confirms our preexisting beliefs',
          isCorrect: true,
          explanation: 'Confirmation bias is a cognitive bias where people tend to favor information that confirms their existing beliefs or hypotheses.'
        },
        {
          id: 'b',
          text: 'The tendency to avoid making decisions',
          isCorrect: false,
          explanation: 'This describes decision paralysis, not confirmation bias.'
        },
        {
          id: 'c',
          text: 'The tendency to trust authority figures',
          isCorrect: false,
          explanation: 'This describes authority bias, not confirmation bias.'
        },
        {
          id: 'd',
          text: 'The tendency to follow the crowd',
          isCorrect: false,
          explanation: 'This describes herd mentality or groupthink, not confirmation bias.'
        }
      ]
    },
    {
      id: 'media-1',
      question: 'Which of the following is a red flag for potential misinformation?',
      options: [
        {
          id: 'a',
          text: 'The article cites multiple credible sources',
          isCorrect: false,
          explanation: 'Citing credible sources is actually a good sign of reliable information.'
        },
        {
          id: 'b',
          text: 'The headline uses emotional language and makes extraordinary claims',
          isCorrect: true,
          explanation: 'Emotional language and extraordinary claims without evidence are common red flags for misinformation.'
        },
        {
          id: 'c',
          text: 'The article was published recently',
          isCorrect: false,
          explanation: 'Recent publication date alone is not a red flag.'
        },
        {
          id: 'd',
          text: 'The article includes statistics',
          isCorrect: false,
          explanation: 'Statistics can be legitimate, though they should be properly sourced and contextualized.'
        }
      ]
    },
    {
      id: 'critical-1',
      question: 'What is the first step in critical thinking?',
      options: [
        {
          id: 'a',
          text: 'Forming an opinion immediately',
          isCorrect: false,
          explanation: 'Jumping to conclusions is the opposite of critical thinking.'
        },
        {
          id: 'b',
          text: 'Identifying the question or problem clearly',
          isCorrect: true,
          explanation: 'Clearly understanding what you\'re trying to figure out is the foundation of critical thinking.'
        },
        {
          id: 'c',
          text: 'Finding evidence that supports your view',
          isCorrect: false,
          explanation: 'This describes confirmation bias, not critical thinking.'
        },
        {
          id: 'd',
          text: 'Asking others what they think',
          isCorrect: false,
          explanation: 'While gathering perspectives can be helpful, it\'s not the first step in critical thinking.'
        }
      ]
    }
  ];

  const handleQuizComplete = (score: number) => {
    const newScores = [...scores];
    newScores[currentQuizIndex] = score;
    setScores(newScores);
    
    // Move to next quiz after a delay
    setTimeout(() => {
      if (currentQuizIndex < quizzes.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1);
      } else {
        setShowResults(true);
      }
    }, 3000);
  };

  const handleRestart = () => {
    setCurrentQuizIndex(0);
    setScores([]);
    setShowResults(false);
  };

  const totalScore = scores.reduce((sum, score) => sum + score, 0);
  const maxScore = quizzes.length;

  if (showResults) {
    return (
      <div className="space-y-6 fade-in">
        <div className="text-center space-y-4 slide-up">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
          <h1 className="text-3xl font-bold text-gray-900">
            Quiz Complete!
          </h1>
          <p className="text-gray-600">
            You scored {totalScore} out of {maxScore} points.
          </p>
        </div>

        <Card className="slide-up">
          <div className="text-center py-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Results
            </h2>
            <div className="space-y-4">
              {quizzes.map((quiz, index) => (
                <div key={quiz.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Question {index + 1}</span>
                  <span className={`font-semibold ${scores[index] === 1 ? 'text-green-600' : 'text-red-600'}`}>
                    {scores[index] === 1 ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={handleRestart}
              className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Take Quiz Again
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-4 slide-up">
        <TestTube className="h-12 w-12 text-primary-600 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-900">
          Interactive Tests
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Test your understanding of critical thinking concepts, identify biases, 
          and track your progress through engaging quizzes and assessments.
        </p>
      </div>

      <Card className="slide-up">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Question {currentQuizIndex + 1} of {quizzes.length}
            </span>
            <span className="text-sm text-gray-600">
              Score: {scores.reduce((sum, score) => sum + score, 0)} / {currentQuizIndex}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuizIndex + 1) / quizzes.length) * 100}%` }}
            />
          </div>
        </div>
      </Card>

      <Quiz
        question={quizzes[currentQuizIndex].question}
        options={quizzes[currentQuizIndex].options}
        onComplete={handleQuizComplete}
        className="slide-up"
      />
    </div>
  );
}; 