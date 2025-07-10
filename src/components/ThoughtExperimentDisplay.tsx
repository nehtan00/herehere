import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';
import { Lightbulb, Edit3, Sparkles } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { generateGeminiPrompt } from '../services/gemini';

interface ThoughtExperimentDisplayProps {
  prompt: string;
  moduleId: string;
  sectionId: string;
  onReflectionChange?: (reflection: string) => void;
  initialReflection?: string;
}

export const ThoughtExperimentDisplay: React.FC<ThoughtExperimentDisplayProps> = ({
  prompt,
  moduleId,
  sectionId,
  onReflectionChange,
  initialReflection = '',
}) => {
  const { saveUserReflection, getUserReflection } = useAppContext();
  const [reflection, setReflection] = useState(initialReflection);
  const [isSaving, setIsSaving] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load existing reflection on component mount
  useEffect(() => {
    const loadReflection = async () => {
      const savedReflection = await getUserReflection(moduleId, sectionId);
      if (savedReflection) {
        setReflection(savedReflection);
        onReflectionChange?.(savedReflection);
      }
    };
    loadReflection();
  }, [moduleId, sectionId, getUserReflection, onReflectionChange]);

  const handleReflectionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setReflection(value);
    onReflectionChange?.(value);
  };

  const handleSaveReflection = async () => {
    if (!reflection.trim()) return;
    
    setIsSaving(true);
    try {
      await saveUserReflection(moduleId, sectionId, reflection);
    } catch (error) {
      console.error('Error saving reflection:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const generateReflectionPrompt = async () => {
    setIsGenerating(true);
    setError(null);
    setGeneratedPrompt(null);
    try {
      const result = await generateGeminiPrompt(prompt, reflection);
      setGeneratedPrompt(result);
    } catch (err) {
      setError('Failed to generate prompt. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="space-y-6">
      <div className="flex items-start space-x-3">
        <Lightbulb className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Thought Experiment
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {prompt}
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Edit3 className="h-5 w-5 text-gray-500" />
            <label htmlFor="reflection" className="text-sm font-medium text-gray-700">
              Your Reflection
            </label>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={generateReflectionPrompt}
            disabled={isGenerating}
            className="flex items-center space-x-2"
          >
            {isGenerating ? (
              <LoadingSpinner size="sm" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            <span>Generate Prompt</span>
          </Button>
        </div>
        <textarea
          id="reflection"
          value={reflection}
          onChange={handleReflectionChange}
          placeholder="Take a moment to reflect on this thought experiment. What comes to mind? What questions does it raise for you?"
          className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {generatedPrompt && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <Sparkles className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-blue-900 mb-1">
                AI-Generated Reflection Prompt
              </h4>
              <p className="text-sm text-blue-800">
                {generatedPrompt}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-end">
        <Button
          variant="primary"
          onClick={handleSaveReflection}
          disabled={!reflection.trim() || isSaving}
        >
          {isSaving ? (
            <>
              <LoadingSpinner size="sm" />
              <span className="ml-2">Saving...</span>
            </>
          ) : (
            'Save Reflection'
          )}
        </Button>
      </div>
    </Card>
  );
}; 