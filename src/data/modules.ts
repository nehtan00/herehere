import type { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'confirmation-bias',
    title: 'Understanding Confirmation Bias',
    description: 'Explore how we naturally seek information that confirms our existing beliefs and how this affects our thinking.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: 'Confirmation bias is the tendency to search for, interpret, and remember information in a way that confirms our preconceptions.'
      },
      {
        id: 'experiment-1',
        type: 'thoughtExperiment',
        prompt: 'Imagine you strongly believe that a particular political party is always right. How might this affect how you interpret news stories?'
      },
      {
        id: 'quote-1',
        type: 'quote',
        text: 'We see the world not as it is, but as we are.',
        source: 'Stephen R. Covey'
      },
      {
        id: 'resource-1',
        type: 'resourceLink',
        label: 'Wikipedia: Confirmation Bias',
        url: 'https://en.wikipedia.org/wiki/Confirmation_bias'
      },
      {
        id: 'quiz-1',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: 'What is confirmation bias?',
            options: [
              'A tendency to seek information that confirms our beliefs',
              'A method of scientific testing',
              'A type of logical fallacy',
              'A way to confirm appointments'
            ],
            correctAnswer: 0,
            explanation: 'Confirmation bias is the tendency to seek out or interpret information in a way that confirms our existing beliefs.'
          }
        ]
      }
    ]
  },
  {
    id: 'media-literacy',
    title: 'Media Literacy Fundamentals',
    description: 'Learn to critically evaluate media sources, identify bias, and distinguish between fact and opinion.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: 'Media literacy is the ability to access, analyze, evaluate, and create media in a variety of forms.'
      },
      {
        id: 'experiment-1',
        type: 'thoughtExperiment',
        prompt: 'Think about a news story you recently read or watched. What made you trust or distrust the source?'
      },
      {
        id: 'quote-1',
        type: 'quote',
        text: 'The most effective way to destroy people is to deny and obliterate their own understanding of their history.',
        source: 'George Orwell'
      },
      {
        id: 'resource-1',
        type: 'resourceLink',
        label: 'Media Literacy Now',
        url: 'https://medialiteracynow.org/'
      },
      {
        id: 'quiz-1',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: 'What is media literacy?',
            options: [
              'The ability to read books',
              'The ability to access, analyze, evaluate, and create media',
              'A type of news reporting',
              'A form of entertainment'
            ],
            correctAnswer: 1,
            explanation: 'Media literacy is the ability to access, analyze, evaluate, and create media in a variety of forms.'
          }
        ]
      }
    ]
  }
]; 