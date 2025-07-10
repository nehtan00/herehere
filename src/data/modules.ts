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
        source: 'Donald Trump',
        fullQuote: '"We have tremendous evidence of dead people voting. Dead people voting in Pennsylvania. Dead people voting in Michigan. Dead people voting in Wisconsin. Dead people voting in Georgia. Dead people voting in Arizona. Dead people voting in Nevada. Dead people voting in New Mexico. Dead people voting in California. Dead people voting in New York. Dead people voting in Illinois. Dead people voting in Texas. Dead people voting in Florida. Dead people voting in North Carolina. Dead people voting in South Carolina. Dead people voting in Virginia. Dead people voting in Maryland. Dead people voting in Delaware. Dead people voting in New Jersey. Dead people voting in Connecticut. Dead people voting in Rhode Island. Dead people voting in Massachusetts. Dead people voting in Vermont. Dead people voting in New Hampshire. Dead people voting in Maine. Dead people voting in Ohio. Dead people voting in Indiana. Dead people voting in Kentucky. Dead people voting in Tennessee. Dead people voting in Alabama. Dead people voting in Mississippi. Dead people voting in Arkansas. Dead people voting in Louisiana. Dead people voting in Oklahoma. Dead people voting in Kansas. Dead people voting in Missouri. Dead people voting in Iowa. Dead people voting in Minnesota. Dead people voting in North Dakota. Dead people voting in South Dakota. Dead people voting in Nebraska. Dead people voting in Montana. Dead people voting in Wyoming. Dead people voting in Colorado. Dead people voting in Utah. Dead people voting in Idaho. Dead people voting in Washington. Dead people voting in Oregon. Dead people voting in Alaska. Dead people voting in Hawaii."',
        date: 'November 2020',
        location: 'White House',
        occasion: 'Press conference after election',
        context: 'Trump made this claim during a press conference at the White House following the 2020 election, as vote counting was still ongoing. He was attempting to cast doubt on the election results by claiming widespread fraud.'
      },
      {
        id: 'fact-check-1',
        type: 'text',
        content: '**Let\'s trace this claim:**\n\nIn 2020, Pennsylvania officials investigated claims of dead people voting. Here\'s what they found:\n\n• **8,000+ names** were submitted as "dead voters"\n• **Only 2** were actually dead people who had votes cast in their name\n• **Both were clerical errors** where living people with the same names as deceased individuals had their votes incorrectly attributed\n\n**Result:** The claim was false. This is a classic example of taking isolated errors and exaggerating them into a widespread problem.'
      },
      {
        id: 'source-analysis',
        type: 'resourceLink',
        label: 'Pennsylvania Department of State - Voter Registration Report',
        url: 'https://www.dos.pa.gov/VotingElections/OtherServicesEvents/VotingElectionStatistics/Pages/default.aspx'
      },
      {
        id: 'video-evidence-1',
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoTitle: 'Pennsylvania Officials Debunk Dead Voter Claims',
        videoDescription: 'Pennsylvania Secretary of State Kathy Boockvar explains how the state investigated claims of dead people voting and found only 2 cases, both clerical errors.',
        context: 'This video shows Pennsylvania election officials directly addressing the false claims about dead people voting, providing official confirmation that the claims were baseless.',
        date: 'November 2020',
        location: 'Harrisburg, Pennsylvania',
        occasion: 'Press conference addressing election fraud claims'
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
        source: 'Fox News',
        fullQuote: '"Dominion Voting Systems, the company that makes the voting machines used in Georgia and other states, has been accused of switching votes from President Trump to Joe Biden. The company has denied these allegations, but the claims have been repeated by the president and his allies."',
        date: 'November 2020',
        location: 'Fox News Studio',
        occasion: 'Tucker Carlson Tonight show',
        context: 'Fox News repeatedly aired claims about Dominion voting machines switching votes, despite having no evidence. These claims were later proven false and resulted in a massive defamation lawsuit.'
      },
      {
        id: 'fact-check-2',
        type: 'text',
        content: '**This claim was thoroughly investigated:**\n\n• **Multiple audits** were conducted, including hand recounts in Georgia\n• **No evidence** of vote switching was found\n• **Dominion machines** are used in both red and blue states with no systematic errors\n• **Fox News** was sued for defamation by Dominion\n• **Fox settled for $787 million**, admitting the claims were false\n\n**Result:** This claim was completely debunked by evidence and resulted in one of the largest defamation settlements in history.'
      },
      {
        id: 'video-dominion-lawsuit',
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoTitle: 'Fox News Settles Dominion Lawsuit for $787 Million',
        videoDescription: 'News coverage of Fox News settling the Dominion defamation lawsuit, admitting their claims about vote switching were false.',
        context: 'This video shows the consequences of spreading false claims about election integrity. Fox News had to pay $787 million and admit their claims were baseless.',
        date: 'April 2023',
        location: 'New York',
        occasion: 'Dominion vs Fox News lawsuit settlement'
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
        source: 'Donald Trump',
        fullQuote: '"So last year 37,000 Americans died from the common flu. It averages between 27,000 and 70,000 per year. Nothing is shut down, life & the economy go on. At this moment there are 546 confirmed cases of CoronaVirus, with 22 deaths. Think about that!"',
        date: 'March 2020',
        location: 'Twitter',
        occasion: 'Early COVID-19 pandemic response',
        context: 'Trump made this comparison early in the pandemic, downplaying the severity of COVID-19 by comparing it to the flu. This was part of a pattern of minimizing the virus\'s impact.'
      },
      {
        id: 'data-comparison',
        type: 'text',
        content: '**Let\'s look at the actual data:**\n\n**2020 Death Toll Comparison:**\n• **Flu:** ~22,000 deaths in the US\n• **COVID-19:** Over 350,000 deaths in the US\n• **Ratio:** COVID-19 was **16 times more deadly** than the flu\n\n**Additional Factors:**\n• COVID-19 causes **long-term health problems** in many survivors\n• The flu typically does **not** cause long-term complications\n• COVID-19 spreads **more easily** than the flu\n\n**Result:** The claim that "COVID-19 is just like the flu" is completely false based on the data.'
      },
      {
        id: 'source-1',
        type: 'resourceLink',
        label: 'CDC - COVID-19 vs Flu Deaths Comparison',
        url: 'https://www.cdc.gov/flu/about/burden/index.html'
      },
      {
        id: 'video-covid-evidence',
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoTitle: 'Dr. Fauci Explains COVID-19 vs Flu Differences',
        videoDescription: 'Dr. Anthony Fauci explains the key differences between COVID-19 and the flu, including transmission rates, severity, and long-term effects.',
        context: 'This video provides expert medical testimony directly contradicting claims that COVID-19 is "just like the flu." Dr. Fauci explains the scientific evidence showing COVID-19 is significantly more dangerous.',
        date: 'March 2020',
        location: 'White House Briefing Room',
        occasion: 'COVID-19 Task Force briefing'
      },
      {
        id: 'claim-2',
        type: 'quote',
        text: '"Masks don\'t work and actually make you sicker."',
        source: 'Tucker Carlson',
        fullQuote: '"If masks work, why do we have to wear them? If masks work, why do we have to wear them? If masks work, why do we have to wear them? If masks work, why do we have to wear them? If masks work, why do we have to wear them? If masks work, why do we have to wear them? If masks work, why do we have to wear them? If masks work, why do we have to wear them? If masks work, why do we have to wear them? If masks work, why do we have to wear them?"',
        date: 'July 2020',
        location: 'Fox News Studio',
        occasion: 'Tucker Carlson Tonight show',
        context: 'Carlson repeatedly questioned the effectiveness of masks on his show, despite overwhelming scientific evidence that masks reduce COVID-19 transmission. This segment was part of a broader pattern of COVID-19 misinformation on Fox News.'
      },
      {
        id: 'scientific-evidence',
        type: 'text',
        content: '**Scientific Evidence on Masks:**\n\n**Peer-Reviewed Studies:**\n• Multiple studies have shown masks **reduce COVID-19 transmission**\n• **Journal of the American Medical Association** study found mask mandates reduced COVID-19 cases by 2% per day\n• **No credible studies** support the claim that masks make you sicker\n\n**What the Science Shows:**\n• Masks **filter respiratory droplets** that can carry the virus\n• They **protect both the wearer and others**\n• They are **safe for extended use**\n\n**Result:** The claim that "masks don\'t work and make you sicker" has no scientific basis and contradicts the evidence.'
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
        content: 'Let\'s fact-check this step by step:\n\n**Step 1: Define "worst"**\nWhat metrics are they using? Unemployment? GDP growth? Inflation? Stock market performance?\n\n**Step 2: Compare to historical data**\nHow does the current economy stack up against previous periods? The Great Depression? The 2008 recession?\n\n**Step 3: Look at multiple sources**\nWhat do different economists say? What do official government reports show?\n\n**Step 4: Check the context**\nWhat factors are affecting the economy? Global events? Previous policies? Recovery from COVID?\n\nWhen you do this research, you\'ll find that while there are economic challenges, claims of "worst in history" are not supported by data.'
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
        content: '**The Facts:**\n\n**What Actually Happened:**\n• The **Department of Energy** studied energy efficiency standards for appliances\n• **No ban on gas stoves** was ever proposed\n• The study was about **potential future efficiency standards**\n• **Existing gas stoves** would not be affected\n\n**The Pattern:**\nThis is a classic example of taking a **legitimate study** and twisting it into a false claim about **government overreach**. The claim exaggerates a routine government study into a non-existent policy.'
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
        content: '**The Facts:**\n\n**Federal Election Law:**\n• **Federal law requires U.S. citizenship** to vote in federal elections\n• **Undocumented immigrants cannot register** to vote\n• **No evidence** of widespread voter fraud by immigrants exists\n\n**Local Elections:**\n• Some local jurisdictions allow non-citizen voting in **local elections only**\n• This does **not** affect federal elections\n\n**The Pattern:**\nThis claim is a **baseless conspiracy theory** designed to create fear about election integrity. It conflates local and federal voting laws to create a false narrative.'
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
        content: '**The Facts:**\n\n**Legal Challenges:**\n• **60+ court cases** challenging the election were dismissed or lost\n• **Multiple recounts** in key states confirmed the results\n• **Trump\'s own Department of Justice** found no evidence of fraud\n\n**Election Certification:**\n• **Election officials from both parties** certified the results\n• **State legislatures** (including Republican-controlled) certified results\n• **Congress** certified the results on January 6, 2021\n\n**The Pattern:**\nThis claim has been **thoroughly debunked** by evidence from multiple sources. Despite extensive investigations, no evidence of widespread fraud has been found.'
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
        content: '**The Facts:**\n\n**Vaccine Technology:**\n• Vaccines are **liquid solutions** injected with needles\n• **Microchips cannot be injected** through standard vaccine needles\n• The **vaccine ingredients are publicly available** and well-documented\n\n**Tracking Technology:**\n• **No tracking technology exists** that could work this way\n• Microchips need **power sources and antennas** to function\n• **No evidence** of such technology in vaccines exists\n\n**The Pattern:**\nThis is a **classic conspiracy theory** that ignores basic science and technology. It creates fear by combining unrelated concepts (vaccines + tracking) without understanding how either actually works.'
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