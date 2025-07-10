import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAppContext } from '../contexts/AppContext';
import { ThoughtExperimentDisplay } from '../components/ThoughtExperimentDisplay';
import { QuoteDisplay } from '../components/QuoteDisplay';
import { Video } from '../components/Video';
import { ArrowLeft, ArrowRight, Home, Link, HelpCircle } from 'lucide-react';
import { Quiz } from '../components/Quiz';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';

export const ModulePage: React.FC = () => {
  const { 
    currentModule, 
    currentSection, 
    setCurrentSection, 
    setCurrentPage 
  } = useAppContext();

  if (!currentModule) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          No module selected
        </h2>
        <Button onClick={() => setCurrentPage('modules')}>
          Choose a Module
        </Button>
      </div>
    );
  }

  const currentSectionData = currentModule.sections[currentSection];
  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === currentModule.sections.length - 1;

  const handlePrevious = () => {
    if (!isFirstSection) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (!isLastSection) {
      setCurrentSection(currentSection + 1);
    }
  };

  const renderSectionContent = () => {
    if (!currentSectionData) return null;

    switch (currentSectionData.type) {
      case 'thoughtExperiment':
        return (
          <ThoughtExperimentDisplay
            prompt={currentSectionData.prompt || ''}
            moduleId={currentModule.id}
            sectionId={currentSectionData.id}
          />
        );
      case 'quote':
        return (
          <QuoteDisplay
            text={currentSectionData.text || ''}
            source={currentSectionData.source || ''}
            fullQuote={currentSectionData.fullQuote}
            context={currentSectionData.context}
            date={currentSectionData.date}
            location={currentSectionData.location}
            occasion={currentSectionData.occasion}
          />
        );
      case 'text':
        return (
          <Card>
            <div className="prose max-w-none">
              <ReactMarkdown>{DOMPurify.sanitize(currentSectionData.content || '')}</ReactMarkdown>
            </div>
          </Card>
        );
      case 'resourceLink':
        return (
          <Card>
            <div className="flex items-center space-x-3">
              <Link className="h-5 w-5 text-primary-600" />
              <a
                href={currentSectionData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline hover:text-primary-900 text-lg font-medium"
              >
                {currentSectionData.label || currentSectionData.url}
              </a>
            </div>
          </Card>
        );
      case 'quiz':
        // For now, show the first question if multiple questions exist
        const firstQuestion = currentSectionData.questions?.[0];
        if (!firstQuestion) return null;
        
        return (
          <Quiz
            question={firstQuestion.question}
            options={firstQuestion.options.map((option, index) => ({
              id: index.toString(),
              text: option,
              isCorrect: index === firstQuestion.correctAnswer,
              explanation: firstQuestion.explanation
            }))}
            onComplete={(score: number, total: number) => {
              console.log(`Quiz completed with score: ${score}/${total}`);
            }}
          />
        );
      case 'video':
        return (
          <Video
            videoUrl={currentSectionData.videoUrl || ''}
            videoTitle={currentSectionData.videoTitle || ''}
            videoDescription={currentSectionData.videoDescription || ''}
            context={currentSectionData.context}
            date={currentSectionData.date}
            location={currentSectionData.location}
            occasion={currentSectionData.occasion}
          />
        );
      default:
        return (
          <Card>
            <div className="flex items-center space-x-2">
              <HelpCircle className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">Content type not yet implemented.</span>
            </div>
          </Card>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="secondary"
            onClick={() => setCurrentPage('modules')}
            size="sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Modules
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {currentModule.title}
            </h1>
            <p className="text-gray-600">
              Section {currentSection + 1} of {currentModule.sections.length}
            </p>
          </div>
        </div>
        <Button
          variant="secondary"
          onClick={() => setCurrentPage('home')}
          size="sm"
        >
          <Home className="h-4 w-4 mr-2" />
          Home
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{
            width: `${((currentSection + 1) / currentModule.sections.length) * 100}%`,
          }}
        />
      </div>

      {/* Content */}
      {renderSectionContent()}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="secondary"
          onClick={handlePrevious}
          disabled={isFirstSection}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <span className="text-sm text-gray-500">
          {currentSection + 1} of {currentModule.sections.length}
        </span>

        <Button
          onClick={handleNext}
          disabled={isLastSection}
        >
          Next
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}; 