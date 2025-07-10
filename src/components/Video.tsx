import React from 'react';
import { Card } from './Card';
import { ExternalLink } from 'lucide-react';

interface VideoProps {
  videoUrl: string;
  videoTitle: string;
  videoDescription: string;
  context?: string;
  date?: string;
  location?: string;
  occasion?: string;
}

export const Video: React.FC<VideoProps> = ({
  videoUrl,
  videoTitle,
  videoDescription,
  context,
  date,
  location,
  occasion
}) => {
  // Extract video ID from YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 
      ? `https://www.youtube.com/embed/${match[2]}?rel=0`
      : url;
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <Card className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{videoTitle}</h3>
        {date && (
          <p className="text-sm text-gray-500">
            {date}
            {location && ` • ${location}`}
            {occasion && ` • ${occasion}`}
          </p>
        )}
      </div>

      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          title={videoTitle}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {context && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <h4 className="font-medium text-blue-900 mb-2">Context:</h4>
          <p className="text-blue-800 text-sm">{context}</p>
        </div>
      )}

      <div className="space-y-2">
        <p className="text-gray-700">{videoDescription}</p>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium text-sm transition-colors duration-200"
        >
          Watch on YouTube
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </Card>
  );
}; 