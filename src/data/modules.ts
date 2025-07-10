import type { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'bias-discovery',
    title: 'Discover Your Own Biases',
    description: 'Start by understanding your own thinking patterns and how they might influence what you believe.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: 'Before we examine media claims, let\'s first understand how our own minds work. We all have biases that can make us more likely to believe certain types of information, even when it\'s not accurate.'
      },
      {
        id: 'bias-test-1',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: 'When you hear a claim that supports your political views, what do you typically do first?',
            options: [
              'Accept it as true and share it with others',
              'Look for additional sources to verify it',
              'Question it and seek opposing viewpoints',
              'Feel good about it and move on'
            ],
            correctAnswer: 1,
            explanation: 'The correct approach is to verify claims regardless of whether they support your views. This helps avoid confirmation bias.'
          }
        ]
      },
      {
        id: 'bias-test-2',
        type: 'quiz',
        questions: [
          {
            id: 'q2',
            question: 'If you see a headline that makes you angry about the "other side," what should you do?',
            options: [
              'Share it immediately to warn others',
              'Read the full article before forming an opinion',
              'Assume it\'s true because it confirms your beliefs',
              'Look for the original source and context'
            ],
            correctAnswer: 3,
            explanation: 'Emotional headlines are often designed to trigger bias. Always seek the original source and full context.'
          }
        ]
      },
      {
        id: 'reflection-1',
        type: 'thoughtExperiment',
        prompt: 'Think about the last time you shared a political post on social media. What made you believe it was true? Did you check the source or verify the claims before sharing?'
      }
    ]
  },
  {
    id: 'election-fraud-claims',
    title: 'Examining Election Fraud Claims',
    description: 'Let\'s look at specific claims about election fraud and trace them back to their sources.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: 'After the 2020 election, many claims about fraud circulated widely. Let\'s examine some of the most prominent ones and trace them back to their original sources.'
      },
      {
        id: 'claim-1',
        type: 'quote',
        text: '"Dead people voted in Pennsylvania!"',
        source: 'Donald Trump, November 2020'
      },
      {
        id: 'fact-check-1',
        type: 'text',
        content: 'Let\'s trace this claim: In 2020, Pennsylvania officials investigated claims of dead people voting. They found that of the 8,000+ names submitted as "dead voters," only 2 were actually dead people who had votes cast in their name. Both were clerical errors where living people with the same names as deceased individuals had their votes incorrectly attributed. The claim was false.'
      },
      {
        id: 'source-analysis',
        type: 'resourceLink',
        label: 'Pennsylvania Department of State - Voter Registration Report',
        url: 'https://www.dos.pa.gov/VotingElections/OtherServicesEvents/VotingElectionStatistics/Pages/default.aspx'
      },
      {
        id: 'reflection-2',
        type: 'thoughtExperiment',
        prompt: 'When you first heard claims about dead people voting, what was your immediate reaction? How might confirmation bias have influenced your initial belief?'
      },
      {
        id: 'claim-2',
        type: 'quote',
        text: '"Dominion voting machines switched votes from Trump to Biden!"',
        source: 'Fox News, November 2020'
      },
      {
        id: 'fact-check-2',
        type: 'text',
        content: 'This claim was thoroughly investigated. Multiple audits, including hand recounts in Georgia, found no evidence of vote switching. Dominion machines are used in both red and blue states, and there were no systematic errors. The company sued Fox News for defamation, and Fox settled for $787 million, admitting the claims were false.'
      },
      {
        id: 'quiz-1',
        type: 'quiz',
        questions: [
          {
            id: 'q3',
            question: 'What should you do when you hear a claim about voting machines switching votes?',
            options: [
              'Believe it because it comes from a major news source',
              'Look for official election audits and investigations',
              'Share it immediately to warn others',
              'Assume it\'s true if it supports your candidate'
            ],
            correctAnswer: 1,
            explanation: 'Official audits and investigations by election officials are the most reliable sources for claims about election integrity.'
          }
        ]
      }
    ]
  },
  {
    id: 'covid-misinformation',
    title: 'COVID-19 Misinformation Analysis',
    description: 'Examine how misinformation about COVID-19 spread and how to identify it.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: 'The COVID-19 pandemic was accompanied by a flood of misinformation. Let\'s examine some specific claims and learn how to identify patterns in misleading information.'
      },
      {
        id: 'claim-1',
        type: 'quote',
        text: '"COVID-19 is just like the flu, no big deal."',
        source: 'Various right-wing media outlets, 2020-2021'
      },
      {
        id: 'data-comparison',
        type: 'text',
        content: 'Let\'s look at the actual data: In 2020, the flu caused about 22,000 deaths in the US. COVID-19 caused over 350,000 deaths in the same year. COVID-19 was 16 times more deadly than the flu. Additionally, COVID-19 causes long-term health problems in many survivors, which the flu typically does not.'
      },
      {
        id: 'source-1',
        type: 'resourceLink',
        label: 'CDC - COVID-19 vs Flu Deaths Comparison',
        url: 'https://www.cdc.gov/flu/about/burden/index.html'
      },
      {
        id: 'claim-2',
        type: 'quote',
        text: '"Masks don\'t work and actually make you sicker."',
        source: 'Tucker Carlson, Fox News'
      },
      {
        id: 'scientific-evidence',
        type: 'text',
        content: 'Multiple peer-reviewed studies have shown that masks reduce COVID-19 transmission. A study in the Journal of the American Medical Association found that mask mandates reduced COVID-19 cases by 2% per day. The claim that masks make you sicker has no scientific basis.'
      },
      {
        id: 'reflection-3',
        type: 'thoughtExperiment',
        prompt: 'Think about how you evaluated COVID-19 information during the pandemic. What sources did you trust most? How might your political beliefs have influenced which information you accepted?'
      },
      {
        id: 'quiz-2',
        type: 'quiz',
        questions: [
          {
            id: 'q4',
            question: 'When evaluating health claims, what\'s the most reliable source?',
            options: [
              'Social media posts from friends',
              'Opinion shows on cable news',
              'Peer-reviewed scientific studies',
              'Politicians\' statements'
            ],
            correctAnswer: 2,
            explanation: 'Peer-reviewed scientific studies are the gold standard for health information, as they undergo rigorous review by experts.'
          }
        ]
      }
    ]
  },
  {
    id: 'media-literacy',
    title: 'Media Literacy in Practice',
    description: 'Learn practical skills for evaluating media claims and identifying bias.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: 'Now let\'s practice the skills you\'ve learned. We\'ll look at recent media claims and walk through how to evaluate them step by step.'
      },
      {
        id: 'recent-claim',
        type: 'quote',
        text: '"Biden\'s economy is the worst in history!"',
        source: 'Recent right-wing media coverage'
      },
      {
        id: 'fact-checking-steps',
        type: 'text',
        content: 'Let\'s fact-check this step by step:\n\n1. Define "worst" - what metrics are they using?\n2. Compare to historical data - how does it stack up?\n3. Look at multiple sources - what do different economists say?\n4. Check the context - what factors are affecting the economy?\n\nWhen you do this research, you\'ll find that while there are economic challenges, claims of "worst in history" are not supported by data.'
      },
      {
        id: 'source-2',
        type: 'resourceLink',
        label: 'Federal Reserve Economic Data (FRED)',
        url: 'https://fred.stlouisfed.org/'
      },
      {
        id: 'practice-exercise',
        type: 'thoughtExperiment',
        prompt: 'Think of a recent claim you\'ve heard in the media. How would you apply these fact-checking steps to evaluate it? What sources would you consult?'
      },
      {
        id: 'final-quiz',
        type: 'quiz',
        questions: [
          {
            id: 'q5',
            question: 'What\'s the first step when you encounter a shocking claim?',
            options: [
              'Share it immediately to warn others',
              'Check your emotional reaction and pause',
              'Look for sources that confirm it',
              'Assume it\'s true if it comes from trusted sources'
            ],
            correctAnswer: 1,
            explanation: 'Pausing to check your emotional reaction helps prevent confirmation bias and allows for more rational evaluation.'
          }
        ]
      }
    ]
  },
  {
    id: 'recent-claims-analysis',
    title: 'Recent Claims Analysis',
    description: 'Practice fact-checking with current examples from right-wing media.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: 'Let\'s examine some recent claims that have been circulating and practice our fact-checking skills on real examples.'
      },
      {
        id: 'claim-1',
        type: 'quote',
        text: '"The border is completely open and millions of criminals are pouring in!"',
        source: 'Fox News, 2024'
      },
      {
        id: 'fact-check-1',
        type: 'text',
        content: 'Let\'s examine the data:\n\n• Border apprehensions are tracked by Customs and Border Protection\n• The majority of border crossers are families seeking asylum, not criminals\n• Crime rates in border states are actually lower than national averages\n• Most undocumented immigrants have been in the US for over 10 years\n\nThis claim uses emotional language ("pouring in") and conflates different issues to create fear.'
      },
      {
        id: 'source-1',
        type: 'resourceLink',
        label: 'CBP Border Statistics',
        url: 'https://www.cbp.gov/newsroom/stats/southwest-land-border-encounters'
      },
      {
        id: 'claim-2',
        type: 'quote',
        text: '"Climate change is a hoax invented by China to destroy American industry!"',
        source: 'Donald Trump, 2024'
      },
      {
        id: 'fact-check-2',
        type: 'text',
        content: 'This claim has multiple problems:\n\n• Climate change was first identified by scientists in the 1800s\n• NASA, NOAA, and thousands of scientists worldwide have confirmed it\n• China is actually investing heavily in renewable energy\n• The claim ignores that climate change affects all countries, including China\n\nThis is an example of conspiracy thinking - attributing complex issues to secret plots.'
      },
      {
        id: 'source-2',
        type: 'resourceLink',
        label: 'NASA Climate Change Evidence',
        url: 'https://climate.nasa.gov/evidence/'
      },
      {
        id: 'reflection-1',
        type: 'thoughtExperiment',
        prompt: 'When you hear claims like these, what emotions do they trigger? How might those emotions affect your ability to evaluate the claims objectively?'
      },
      {
        id: 'quiz-1',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: 'What\'s a red flag when evaluating a claim?',
            options: [
              'It comes from a major news organization',
              'It uses emotional language like "pouring in" or "destroy"',
              'It includes specific numbers and dates',
              'It\'s shared by many people on social media'
            ],
            correctAnswer: 1,
            explanation: 'Emotional language is often used to bypass critical thinking and trigger fear or anger.'
          }
        ]
      }
    ]
  },
  {
    id: 'misinformation-detection-test',
    title: 'Test Your Misinformation Detection',
    description: 'Practice identifying lies and misinformation with real-world examples.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: 'Now let\'s test your skills! Below are real claims from recent news and social media. For each one, decide whether you think it\'s true, false, or misleading, then we\'ll reveal the facts.'
      },
      {
        id: 'test-1',
        type: 'quote',
        text: '"Biden wants to ban all gas stoves and force everyone to use electric!"',
        source: 'Social media posts, 2023'
      },
      {
        id: 'quiz-test-1',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: 'Is this claim true, false, or misleading?',
            options: [
              'True - Biden is banning gas stoves',
              'False - Biden never proposed banning gas stoves',
              'Misleading - There was a study about gas stove emissions, but no ban was proposed',
              'I\'m not sure'
            ],
            correctAnswer: 2,
            explanation: 'This is misleading. A federal agency studied gas stove emissions, but no ban was ever proposed. The claim exaggerates a study into a non-existent policy.'
          }
        ]
      },
      {
        id: 'fact-check-test-1',
        type: 'text',
        content: '**The Facts:**\n\n• The Department of Energy studied energy efficiency standards for appliances\n• No ban on gas stoves was ever proposed\n• The study was about potential future efficiency standards\n• Existing gas stoves would not be affected\n\nThis is a classic example of taking a legitimate study and twisting it into a false claim about government overreach.'
      },
      {
        id: 'test-2',
        type: 'quote',
        text: '"Democrats are importing millions of illegal immigrants to vote in elections!"',
        source: 'Right-wing media, 2024'
      },
      {
        id: 'quiz-test-2',
        type: 'quiz',
        questions: [
          {
            id: 'q2',
            question: 'Is this claim true, false, or misleading?',
            options: [
              'True - Democrats are importing voters',
              'False - Undocumented immigrants cannot vote in federal elections',
              'Misleading - There are some local jurisdictions that allow non-citizen voting',
              'I\'m not sure'
            ],
            correctAnswer: 1,
            explanation: 'This is false. Undocumented immigrants cannot vote in federal elections. The claim is a conspiracy theory with no evidence.'
          }
        ]
      },
      {
        id: 'fact-check-test-2',
        type: 'text',
        content: '**The Facts:**\n\n• Federal law requires U.S. citizenship to vote in federal elections\n• Undocumented immigrants cannot register to vote\n• There is no evidence of widespread voter fraud by immigrants\n• Some local jurisdictions allow non-citizen voting in local elections only\n\nThis claim is a baseless conspiracy theory designed to create fear about election integrity.'
      },
      {
        id: 'test-3',
        type: 'quote',
        text: '"The 2020 election was stolen through massive voter fraud!"',
        source: 'Donald Trump and supporters, 2020-2024'
      },
      {
        id: 'quiz-test-3',
        type: 'quiz',
        questions: [
          {
            id: 'q3',
            question: 'Is this claim true, false, or misleading?',
            options: [
              'True - There was massive fraud',
              'False - Multiple investigations found no evidence of widespread fraud',
              'Misleading - There were some isolated cases but not enough to change the result',
              'I\'m not sure'
            ],
            correctAnswer: 1,
            explanation: 'This is false. Multiple investigations, audits, and court cases found no evidence of widespread voter fraud that could have changed the election result.'
          }
        ]
      },
      {
        id: 'fact-check-test-3',
        type: 'text',
        content: '**The Facts:**\n\n• 60+ court cases challenging the election were dismissed or lost\n• Multiple recounts in key states confirmed the results\n• Trump\'s own Department of Justice found no evidence of fraud\n• Election officials from both parties certified the results\n\nThis claim has been thoroughly debunked by evidence from multiple sources.'
      },
      {
        id: 'test-4',
        type: 'quote',
        text: '"COVID vaccines contain microchips to track people!"',
        source: 'Social media conspiracy theories, 2021'
      },
      {
        id: 'quiz-test-4',
        type: 'quiz',
        questions: [
          {
            id: 'q4',
            question: 'Is this claim true, false, or misleading?',
            options: [
              'True - The vaccines contain tracking devices',
              'False - Vaccines cannot contain microchips',
              'Misleading - There might be some tracking technology',
              'I\'m not sure'
            ],
            correctAnswer: 1,
            explanation: 'This is false. Vaccines are liquid solutions that cannot contain microchips. The claim is a baseless conspiracy theory.'
          }
        ]
      },
      {
        id: 'fact-check-test-4',
        type: 'text',
        content: '**The Facts:**\n\n• Vaccines are liquid solutions injected with needles\n• Microchips cannot be injected through needles\n• The vaccine ingredients are publicly available\n• No tracking technology exists that could work this way\n\nThis is a classic conspiracy theory that ignores basic science and technology.'
      },
      {
        id: 'reflection-final',
        type: 'thoughtExperiment',
        prompt: 'How did you do on these tests? Were you surprised by any of the correct answers? What patterns did you notice in the false claims?'
      },
      {
        id: 'quiz-final',
        type: 'quiz',
        questions: [
          {
            id: 'q5',
            question: 'What\'s the best approach when you encounter a shocking claim?',
            options: [
              'Share it immediately to warn others',
              'Pause, check your emotional reaction, then fact-check',
              'Assume it\'s true if it comes from trusted sources',
              'Look for sources that confirm your existing beliefs'
            ],
            correctAnswer: 1,
            explanation: 'Always pause to check your emotional reaction first, then fact-check using reliable sources before forming an opinion.'
          }
        ]
      }
    ]
  }
]; 