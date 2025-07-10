import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Quiz } from '../components/Quiz';
import { TestTube, CheckCircle, ArrowRight } from 'lucide-react';

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
  const [isAnswered, setIsAnswered] = useState(false);

  const quizzes: QuizData[] = [
    {
      id: 'fox-election-1',
      question: 'Fox News (2020): "There is massive evidence of widespread voter fraud in the 2020 election." Is this claim true, false, or misleading?',
      options: [
        {
          id: 'a',
          text: 'True - There was massive fraud',
          isCorrect: false,
          explanation: 'False. Multiple audits, recounts, and over 60 court cases found no evidence of widespread fraud. The Cybersecurity and Infrastructure Security Agency called the 2020 election "the most secure in American history." [CISA Statement](https://www.cisa.gov/news-events/news/statement-election-security-officials-november-12-2020)'
        },
        {
          id: 'b',
          text: 'False - There was no evidence of widespread fraud',
          isCorrect: true,
          explanation: 'Correct. All credible investigations found no evidence of widespread fraud.'
        },
        {
          id: 'c',
          text: 'Misleading - There were some isolated incidents',
          isCorrect: false,
          explanation: 'While isolated incidents exist in every election, there was no evidence of fraud on a scale that could affect the outcome.'
        }
      ]
    },
    {
      id: 'fox-aca-1',
      question: 'Fox News (2010): "Obamacare is a government takeover of healthcare that will put bureaucrats between you and your doctor." Is this claim true, false, or misleading?',
      options: [
        {
          id: 'a',
          text: 'True - The ACA is a government takeover',
          isCorrect: false,
          explanation: 'False. The ACA builds on private insurance, does not create a government-run system, and doctors/hospitals remain private. [KFF: ACA Myths](https://www.kff.org/health-reform/issue-brief/obamacare-myths/)'
        },
        {
          id: 'b',
          text: 'False - The ACA builds on private insurance',
          isCorrect: true,
          explanation: 'Correct. The ACA expands private insurance coverage and sets rules for insurers.'
        },
        {
          id: 'c',
          text: 'Misleading - It increases regulation but is not a takeover',
          isCorrect: false,
          explanation: 'The ACA does increase regulation, but the claim of a "government takeover" is false.'
        }
      ]
    },
    {
      id: 'fox-immigration-1',
      question: 'Fox News (2018): "A massive caravan of migrants is storming toward our border. What will this mean for your safety?" Is this framing accurate?',
      options: [
        {
          id: 'a',
          text: 'True - The caravan was a major criminal threat',
          isCorrect: false,
          explanation: 'False. The caravan was mostly composed of families seeking asylum, not criminals. Crime rates among immigrants are lower than among native-born Americans. [Cato Institute, 2018](https://www.cato.org/blog/illegal-immigrants-us-crime-rates-are-lower-citizens)'
        },
        {
          id: 'b',
          text: 'False - The framing was designed to create fear',
          isCorrect: true,
          explanation: 'Correct. The segment used emotional priming to create fear, not reflect reality.'
        },
        {
          id: 'c',
          text: 'Misleading - There was a caravan, but the threat was exaggerated',
          isCorrect: false,
          explanation: 'The threat was exaggerated; the framing was misleading and fear-based.'
        }
      ]
    },
    {
      id: 'fox-climate-1',
      question: 'Fox News (2022): "Climate change is a hoax invented by China to destroy American industry." Is this claim true, false, or misleading?',
      options: [
        {
          id: 'a',
          text: 'True - It is a hoax',
          isCorrect: false,
          explanation: 'False. Climate change is supported by overwhelming scientific evidence from NASA, NOAA, and thousands of scientists worldwide. [NASA Climate Evidence](https://climate.nasa.gov/evidence/)'
        },
        {
          id: 'b',
          text: 'False - Climate change is real and not a hoax',
          isCorrect: true,
          explanation: 'Correct. The claim is a conspiracy theory with no basis in fact.'
        },
        {
          id: 'c',
          text: 'Misleading - China benefits from climate policy',
          isCorrect: false,
          explanation: 'China is investing heavily in renewable energy; the claim is not supported by evidence.'
        }
      ]
    },
    {
      id: 'fox-crime-1',
      question: 'Fox News (2022): "Crime is out of control in cities run by Democrats. You’re not safe anymore." Is this claim supported by crime data?',
      options: [
        {
          id: 'a',
          text: 'True - Crime is at historic highs in these cities',
          isCorrect: false,
          explanation: 'False. Crime rates in many cities have been falling for decades, and violent crime is not at historic highs. [Bureau of Justice Statistics](https://bjs.ojp.gov/).'
        },
        {
          id: 'b',
          text: 'False - The claim is exaggerated and not supported by data',
          isCorrect: true,
          explanation: 'Correct. The perception of rising crime is often out of proportion to actual data.'
        },
        {
          id: 'c',
          text: 'Misleading - Some cities have seen increases, but not all',
          isCorrect: false,
          explanation: 'Some cities have seen increases, but the overall claim is misleading.'
        }
      ]
    },
    {
      id: 'fox-christian-1',
      question: 'Which of the following is a direct teaching of Jesus (according to the Bible)?',
      options: [
        {
          id: 'a',
          text: '“Love your enemies and pray for those who persecute you.”',
          isCorrect: true,
          explanation: '“Love your enemies and pray for those who persecute you.” (Matthew 5:44) is a direct teaching of Jesus.'
        },
        {
          id: 'b',
          text: '“An eye for an eye, a tooth for a tooth.”',
          isCorrect: false,
          explanation: '“An eye for an eye” is Old Testament law, not a teaching of Jesus.'
        },
        {
          id: 'c',
          text: '“God helps those who help themselves.”',
          isCorrect: false,
          explanation: '“God helps those who help themselves” is not in the Bible.'
        },
        {
          id: 'd',
          text: '“Render unto Caesar what is Caesar’s, and unto God what is God’s.”',
          isCorrect: false,
          explanation: 'While this is a teaching of Jesus (Matthew 22:21), the first option is the most direct call to radical love.'
        }
      ]
    }
  ];

  const handleQuizComplete = (score: number) => {
    const newScores = [...scores];
    newScores[currentQuizIndex] = score;
    setScores(newScores);
    setIsAnswered(true);
  };

  const handleNext = () => {
    setIsAnswered(false);
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuizIndex(0);
    setScores([]);
    setShowResults(false);
    setIsAnswered(false);
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
        key={quizzes[currentQuizIndex].id}
        question={quizzes[currentQuizIndex].question}
        options={quizzes[currentQuizIndex].options}
        onComplete={handleQuizComplete}
        className="slide-up"
      />
      {isAnswered && (
        <button
          onClick={handleNext}
          className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center mx-auto"
        >
          Next
          <ArrowRight className="h-4 w-4 ml-2" />
        </button>
      )}
    </div>
  );
}; 