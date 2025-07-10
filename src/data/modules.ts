import type { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'bias-discovery',
    title: 'The Psychology of Belief',
    description: 'Discover how your brain processes information and why you might believe things that aren\'t true.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: '**Why do smart people believe false things?**\n\nIt\'s not about intelligence - it\'s about psychology. Your brain has evolved to protect your worldview, not to seek truth. Understanding this is the first step to thinking more clearly.\n\n**The Problem:** When facts contradict your beliefs, your brain doesn\'t just accept the facts. Instead, it works overtime to protect your existing worldview.'
      },
      {
        id: 'cognitive-dissonance',
        type: 'text',
        content: '**Cognitive Dissonance: The Mental Discomfort**\n\nWhen you encounter information that conflicts with your beliefs, your brain experiences **cognitive dissonance** - a feeling of mental discomfort.\n\n**Your brain has three options:**\n1. **Accept the new information** (requires changing your mind)\n2. **Reject the information** (easier, protects your worldview)\n3. **Rationalize** (find ways to make both beliefs coexist)\n\n**Most people choose options 2 or 3** because changing your mind feels like admitting you were wrong - and that\'s psychologically painful.'
      },
      {
        id: 'experiment-1',
        type: 'thoughtExperiment',
        prompt: 'Think of a time when someone showed you evidence that contradicted something you believed. What was your first reaction? Did you immediately accept the evidence, or did you feel defensive? How did you resolve the conflict?'
      },
      {
        id: 'confirmation-bias-test',
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
        id: 'backfire-effect',
        type: 'text',
        content: '**The Backfire Effect: When Facts Make Things Worse**\n\n**Here\'s the scary part:** Sometimes when you show people facts that contradict their beliefs, they become **more convinced** of their original position.\n\n**Why this happens:**\n- Presenting facts can feel like an attack on their identity\n- Their brain works harder to protect their worldview\n- They seek out information that confirms their original belief\n- They remember the "attack" but not the facts\n\n**The Solution:** Instead of just presenting facts, we need to understand the psychological barriers first.'
      },
      {
        id: 'social-identity',
        type: 'text',
        content: '**Social Identity: Why Facts Don\'t Matter**\n\nYour political beliefs aren\'t just opinions - they\'re part of your **identity**. When someone challenges your political views, it feels like they\'re attacking **who you are**.\n\n**The Identity Trap:**\n- "I\'m a conservative/liberal" becomes part of your self-concept\n- Information that contradicts your group feels like a personal attack\n- You defend your group\'s beliefs to protect your identity\n- Facts become secondary to group loyalty\n\n**Breaking Free:** The key is separating your identity from your beliefs. You can change your mind without changing who you are.'
      },
      {
        id: 'reflection-2',
        type: 'thoughtExperiment',
        prompt: 'Think about your political identity. How much of "who you are" is tied to your political beliefs? What would it feel like to change your mind on a major political issue? What would your friends and family think?'
      }
    ]
  },
  {
    id: 'media-manipulation',
    title: 'The Psychology of Media Manipulation',
    description: 'Discover how media uses psychological techniques to control what you think and how you feel.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: '**Media doesn\'t just inform you - it programs you.**\n\nEvery headline, every story, every image is carefully crafted to trigger specific psychological responses. Understanding these techniques is your first defense against manipulation.\n\n**The Goal:** To make you think you\'re making independent decisions while actually controlling your thoughts and emotions.'
      },
      {
        id: 'agenda-setting',
        type: 'text',
        content: '**Agenda Setting: Controlling What You Think About**\n\n**The Theory:** Media doesn\'t tell you what to think - it tells you **what to think about**.\n\n**How it works:**\n- Media chooses which issues get attention\n- Issues that get repeated coverage seem more important\n- You start believing these are the "real" problems\n- Other issues disappear from your awareness\n\n**Example:** If media constantly covers "border crisis" stories, you start believing immigration is the most important issue, regardless of actual statistics.\n\n**The Psychological Effect:** Your brain naturally assumes that what gets attention is what matters most.'
      },
      {
        id: 'priming',
        type: 'text',
        content: '**Priming: Setting Up Your Brain**\n\n**Priming** is when media puts you in a specific mental state before presenting information.\n\n**The Process:**\n1. **Emotional Trigger** - "BREAKING: Shocking development that will outrage you"\n2. **Mental State** - You\'re now angry and ready to be outraged\n3. **Information** - Facts presented while you\'re emotionally charged\n4. **Result** - You process information through the lens of anger\n\n**Why it works:** Your brain processes information differently when you\'re emotional vs. when you\'re calm.\n\n**The Pattern:** Emotional word → Emotional state → Biased processing'
      },
      {
        id: 'cultivation-theory',
        type: 'text',
        content: '**Cultivation Theory: The "Mean World Syndrome"**\n\n**The Theory:** The more media you consume, the more you believe the world is dangerous and threatening.\n\n**How it works:**\n- Media over-reports crime, violence, and threats\n- You start believing the world is more dangerous than it actually is\n- This makes you more receptive to "tough" solutions and authoritarian leaders\n- You become more fearful and less trusting\n\n**The Research:** Heavy media consumers consistently overestimate crime rates and believe the world is more dangerous than statistics show.\n\n**The Psychological Effect:** Fear makes you more likely to accept extreme solutions and less likely to question authority.'
      },
      {
        id: 'emotional-manipulation',
        type: 'text',
        content: '**Emotional Manipulation: The Feelings Game**\n\n**The Strategy:** Control emotions to control thoughts.\n\n**Key Emotions Used:**\n\n**1. Fear**\n- Makes you feel threatened and vulnerable\n- Increases receptivity to "protection" messages\n- Reduces critical thinking\n\n**2. Anger**\n- Motivates action and sharing\n- Creates "us vs them" thinking\n- Makes you feel morally superior\n\n**3. Outrage**\n- Triggers the "justice" response in your brain\n- Makes you want to "punish" the "bad guys"\n- Reduces empathy for the "other side"\n\n**4. Hope**\n- Makes you feel good about supporting certain causes\n- Creates emotional investment in specific outcomes\n- Reduces skepticism about promises\n\n**The Pattern:** Trigger emotion → Present "facts" → Emotional processing → Biased conclusions'
      },
      {
        id: 'framing-examples',
        type: 'text',
        content: '**Framing: The Power of Perspective**\n\n**The Concept:** How you present information dramatically affects how people interpret it.\n\n**Real Examples:**\n\n**Tax Policy:**\n- "Tax cuts for the wealthy" (emphasizes inequality)\n- "Tax relief for job creators" (emphasizes economic benefits)\n\n**Healthcare:**\n- "Government takeover of healthcare" (emphasizes loss of choice)\n- "Universal healthcare coverage" (emphasizes access for all)\n\n**Immigration:**\n- "Illegal aliens" (emphasizes law-breaking)\n- "Undocumented workers" (emphasizes economic contribution)\n\n**The Psychological Effect:** Your brain processes these as completely different issues, even though they\'re describing the same policies.'
      },
      {
        id: 'quote-analysis',
        type: 'quote',
        text: 'The best way to control people is to control what they think about.',
        source: 'Noam Chomsky',
        context: 'Chomsky was discussing how media sets the agenda for public discussion, determining not what people think, but what they think about.',
        fullQuote: 'The best way to control people is to control what they think about. The media doesn\'t tell you what to think, it tells you what to think about.',
        date: '1988',
        location: 'Manufacturing Consent',
        occasion: 'Book publication'
      },
      {
        id: 'techniques-quiz',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: 'When a headline says "BREAKING: Shocking new development that will outrage you," what technique is being used?',
            options: [
              'Factual reporting',
              'Emotional priming',
              'Neutral presentation',
              'Balanced analysis'
            ],
            correctAnswer: 1,
            explanation: 'This is emotional priming - using words like "shocking" and "outrage" to put you in an emotional state before presenting information.'
          },
          {
            id: 'q2',
            question: 'If media constantly covers crime stories, what psychological effect does this have on viewers?',
            options: [
              'They become more informed about actual crime rates',
              'They develop the "mean world syndrome"',
              'They become less interested in politics',
              'They become more trusting of authority'
            ],
            correctAnswer: 1,
            explanation: 'This is cultivation theory - heavy media consumers believe the world is more dangerous than it actually is.'
          }
        ]
      },
      {
        id: 'reflection-3',
        type: 'thoughtExperiment',
        prompt: 'Think about the last time you felt angry or afraid after consuming media. What specific words or images triggered those emotions? How did those emotions affect how you processed the information that followed?'
      }
    ]
  },
  {
    id: 'election-fraud-claims',
    title: 'The Psychology of Election Fraud Claims',
    description: 'How false claims spread and why people believe them - a case study in mass deception.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: '**The 2020 Election: A Masterclass in Mass Deception**\n\nAfter the 2020 election, false claims about fraud spread like wildfire. But this wasn\'t random - it was a **systematic campaign** using psychological techniques to manipulate public opinion.\n\n**The Pattern:** Take isolated incidents, exaggerate them into widespread problems, repeat them constantly, and create a false narrative that feels true through sheer repetition.\n\n**Why it worked:** The claims tapped into existing fears and biases, creating a "reality" that felt more compelling than actual facts.'
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
        content: '**Let\'s trace this claim:**\n\nIn 2020, Pennsylvania officials investigated claims of dead people voting. Here\'s what they found:\n\n- **8,000+ names** were submitted as "dead voters"\n- **Only 2** were actually dead people who had votes cast in their name\n- **Both were clerical errors** where living people with the same names as deceased individuals had their votes incorrectly attributed\n\n**Result:** The claim was false. This is a classic example of taking isolated errors and exaggerating them into a widespread problem.'
      },
      {
        id: 'source-analysis',
        type: 'resourceLink',
        label: 'Pennsylvania Department of State - Voter Registration Report',
        url: 'https://www.dos.pa.gov/VotingElections/OtherServicesEvents/VotingElectionStatistics/Pages/default.aspx'
      },
      {
        id: 'official-statement-1',
        type: 'text',
        content: '**Official Pennsylvania Response:**\n\nPennsylvania Secretary of State Kathy Boockvar issued an official statement addressing the dead voter claims:\n\n*"We have thoroughly investigated every claim of dead people voting. Out of over 8,000 names submitted as potential dead voters, we found exactly 2 cases where deceased individuals had votes attributed to them. Both were clerical errors where living people with the same names as deceased individuals had their votes incorrectly recorded. There was no evidence of intentional fraud or widespread dead people voting."*\n\n**Key Points:**\n- **8,000+ claims** were investigated\n- **Only 2 cases** found (0.025%)\n- **Both were clerical errors**\n- **No intentional fraud** discovered\n\nThis official response directly contradicts the claims of widespread dead people voting.'
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
        content: '**This claim was thoroughly investigated:**\n\n- **Multiple audits** were conducted, including hand recounts in Georgia\n- **No evidence** of vote switching was found\n- **Dominion machines** are used in both red and blue states with no systematic errors\n- **Fox News** was sued for defamation by Dominion\n- **Fox settled for $787 million**, admitting the claims were false\n\n**Result:** This claim was completely debunked by evidence and resulted in one of the largest defamation settlements in history.'
      },
      {
        id: 'dominion-lawsuit-details',
        type: 'text',
        content: '**The Dominion Lawsuit Settlement:**\n\nIn April 2023, Fox News settled a defamation lawsuit with Dominion Voting Systems for **$787.5 million** - one of the largest defamation settlements in U.S. history.\n\n**What Fox News Admitted:**\n- Their claims about Dominion machines switching votes were **false**\n- They had **no evidence** to support the allegations\n- They **knew the claims were baseless** but aired them anyway\n- The claims **damaged Dominion\'s business** and reputation\n\n**Key Evidence from the Lawsuit:**\n- Internal Fox communications showed they **knew the claims were false**\n- Multiple fact-checkers had **debunked the claims** before Fox aired them\n- Fox continued to **promote the false narrative** despite knowing it was untrue\n\n**The Pattern:** This demonstrates how media outlets can spread misinformation even when they know it\'s false, prioritizing ratings and political narratives over truth.'
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
        content: '**Let\'s look at the actual data:**\n\n**2020 Death Toll Comparison:**\n- **Flu:** ~22,000 deaths in the US\n- **COVID-19:** Over 350,000 deaths in the US\n- **Ratio:** COVID-19 was **16 times more deadly** than the flu\n\n**Additional Factors:**\n- COVID-19 causes **long-term health problems** in many survivors\n- The flu typically does **not** cause long-term complications\n- COVID-19 spreads **more easily** than the flu\n\n**Result:** The claim that "COVID-19 is just like the flu" is completely false based on the data.'
      },
      {
        id: 'source-1',
        type: 'resourceLink',
        label: 'CDC - COVID-19 vs Flu Deaths Comparison',
        url: 'https://www.cdc.gov/flu/about/burden/index.html'
      },
      {
        id: 'fauci-expert-testimony',
        type: 'text',
        content: '**Dr. Fauci\'s Expert Testimony:**\n\nDr. Anthony Fauci, director of the National Institute of Allergy and Infectious Diseases, provided clear expert testimony about COVID-19 vs the flu:\n\n*"COVID-19 is not the flu. It is a novel coronavirus that is significantly more deadly than seasonal influenza. The case fatality rate is much higher, and it causes more severe complications including long-term health problems that we don\'t see with the flu."*\n\n**Key Differences Dr. Fauci Explained:**\n- **Transmission:** COVID-19 spreads more easily than flu\n- **Severity:** COVID-19 causes more severe illness\n- **Long-term effects:** COVID-19 can cause lasting health problems\n- **Mortality:** COVID-19 has a higher death rate\n\n**The Pattern:** This expert medical testimony directly contradicts claims that COVID-19 is "just like the flu," showing how misinformation can ignore established scientific evidence.'
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
        content: '**Scientific Evidence on Masks:**\n\n**Peer-Reviewed Studies:**\n- Multiple studies have shown masks **reduce COVID-19 transmission**\n- **Journal of the American Medical Association** study found mask mandates reduced COVID-19 cases by 2% per day\n- **No credible studies** support the claim that masks make you sicker\n\n**What the Science Shows:**\n- Masks **filter respiratory droplets** that can carry the virus\n- They **protect both the wearer and others**\n- They are **safe for extended use**\n\n**Result:** The claim that "masks don\'t work and make you sicker" has no scientific basis and contradicts the evidence.'
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
        content: 'Let\'s examine the data:\n\n- Border apprehensions are tracked by Customs and Border Protection\n- The majority of border crossers are families seeking asylum, not criminals\n- Crime rates in border states are actually lower than national averages\n- Most undocumented immigrants have been in the US for over 10 years\n\nThis claim uses emotional language ("pouring in") and conflates different issues to create fear.'
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
        content: 'This claim has multiple problems:\n\n- Climate change was first identified by scientists in the 1800s\n- NASA, NOAA, and thousands of scientists worldwide have confirmed it\n- China is actually investing heavily in renewable energy\n- The claim ignores that climate change affects all countries, including China\n\nThis is an example of conspiracy thinking - attributing complex issues to secret plots.'
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
            explanation: 'This is misleading. A federal agency studied energy efficiency standards for appliances, but no ban on gas stoves was ever proposed. The claim exaggerates a study into a non-existent policy.'
          }
        ]
      },
      {
        id: 'fact-check-test-1',
        type: 'text',
        content: '**The Facts:**\n\n**What Actually Happened:**\n- The **Department of Energy** studied energy efficiency standards for appliances\n- **No ban on gas stoves** was ever proposed\n- The study was about **potential future efficiency standards**\n- **Existing gas stoves** would not be affected\n\n**The Pattern:**\nThis is a classic example of taking a **legitimate study** and twisting it into a false claim about **government overreach**. The claim exaggerates a routine government study into a non-existent policy.'
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
        content: '**The Facts:**\n\n**Federal Election Law:**\n- **Federal law requires U.S. citizenship** to vote in federal elections\n- **Undocumented immigrants cannot register** to vote\n- **No evidence** of widespread voter fraud by immigrants exists\n\n**Local Elections:**\n- Some local jurisdictions allow non-citizen voting in **local elections only**\n- This does **not** affect federal elections\n\n**The Pattern:**\nThis claim is a **baseless conspiracy theory** designed to create fear about election integrity. It conflates local and federal voting laws to create a false narrative.'
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
        content: '**The Facts:**\n\n**Legal Challenges:**\n- **60+ court cases** challenging the election were dismissed or lost\n- **Multiple recounts** in key states confirmed the results\n- **Trump\'s own Department of Justice** found no evidence of fraud\n\n**Election Certification:**\n- **Election officials from both parties** certified the results\n- **State legislatures** (including Republican-controlled) certified results\n- **Congress** certified the results on January 6, 2021\n\n**The Pattern:**\nThis claim has been **thoroughly debunked** by evidence from multiple sources. Despite extensive investigations, no evidence of widespread fraud has been found.'
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
        content: '**The Facts:**\n\n**Vaccine Technology:**\n- Vaccines are **liquid solutions** injected with needles\n- **Microchips cannot be injected** through standard vaccine needles\n- The **vaccine ingredients are publicly available** and well-documented\n\n**Tracking Technology:**\n- **No tracking technology exists** that could work this way\n- Microchips need **power sources and antennas** to function\n- **No evidence** of such technology in vaccines exists\n\n**The Pattern:**\nThis is a **classic conspiracy theory** that ignores basic science and technology. It creates fear by combining unrelated concepts (vaccines + tracking) without understanding how either actually works.'
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
  },
  {
    id: 'psychological-manipulation',
    title: 'The Psychology of Right-Wing Media',
    description: 'How right-wing media uses psychological techniques to manipulate beliefs and emotions.',
    sections: [
      {
        id: 'intro',
        type: 'text',
        content: '**The Psychology of Right-Wing Media Manipulation**\n\nRight-wing media doesn\'t just report news - it uses sophisticated psychological techniques to shape how you think and feel. Understanding these methods is crucial for resisting manipulation.\n\n**The Strategy:** Create emotional responses that bypass critical thinking, then present "facts" while you\'re in an altered mental state.'
      },
      {
        id: 'repetition-technique',
        type: 'text',
        content: '**The Repetition Technique: The Big Lie**\n\n**The Method:** Repeat false claims constantly until they feel true.\n\n**How it works:**\n- **Psychological Principle:** Repetition increases familiarity\n- **Familiarity breeds acceptance** - things that feel familiar seem more true\n- **The "illusory truth effect"** - repeated statements are judged as more truthful\n\n**Example:** "The election was stolen" repeated thousands of times across multiple platforms.\n\n**The Effect:** Even when people know something is false, constant repetition can make them doubt their own knowledge.'
      },
      {
        id: 'emotional-priming',
        type: 'text',
        content: '**Emotional Priming: Setting the Mood**\n\n**The Technique:** Put you in an emotional state before presenting information.\n\n**The Process:**\n1. **Trigger emotion** - "BREAKING: Shocking betrayal of America"\n2. **Create mental state** - You\'re now angry and defensive\n3. **Present "facts"** - Information processed through anger\n4. **Result** - Biased interpretation of information\n\n**Why it works:** Your brain processes information differently when emotional vs. calm.\n\n**The Pattern:** Emotional trigger → Altered mental state → Biased processing'
      },
      {
        id: 'us-vs-them',
        type: 'text',
        content: '**Us vs. Them: Tribal Psychology**\n\n**The Technique:** Create clear "good guys" and "bad guys" to trigger tribal instincts.\n\n**How it works:**\n- **"Real Americans" vs. "elites"**\n- **"Patriots" vs. "traitors"**\n- **"Hard workers" vs. "lazy takers"**\n\n**The Psychological Effect:**\n- Triggers **in-group loyalty** and **out-group hostility**\n- Makes you defend your "team" regardless of facts\n- Reduces empathy for the "other side"\n- Increases willingness to accept extreme solutions\n\n**The Pattern:** Create division → Trigger tribal instincts → Reduce critical thinking'
      },
      {
        id: 'victim-narrative',
        type: 'text',
        content: '**The Victim Narrative: Persecution Complex**\n\n**The Technique:** Present your audience as victims of a conspiracy.\n\n**The Narrative:**\n- "They" are out to get "us"\n- "They" control the media, education, government\n- "They" want to destroy "our" way of life\n- "We" are the last defenders of truth\n\n**The Psychological Effect:**\n- Creates **persecution complex**\n- Justifies extreme responses\n- Makes people feel special and important\n- Reduces skepticism about claims\n\n**The Pattern:** Identify enemy → Create victim narrative → Justify extreme actions'
      },
      {
        id: 'quote-example',
        type: 'quote',
        text: 'The best way to control people is to control what they think about.',
        source: 'Noam Chomsky',
        context: 'Chomsky was discussing how media sets the agenda for public discussion, determining not what people think, but what they think about.',
        fullQuote: 'The best way to control people is to control what they think about. The media doesn\'t tell you what to think, it tells you what to think about.',
        date: '1988',
        location: 'Manufacturing Consent',
        occasion: 'Book publication'
      },
      {
        id: 'reflection-psychology',
        type: 'thoughtExperiment',
        prompt: 'Think about the last time you felt angry or defensive while consuming media. What specific words or phrases triggered those emotions? How did those emotions affect how you processed the information that followed?'
      },
      {
        id: 'psychology-quiz',
        type: 'quiz',
        questions: [
          {
            id: 'q1',
            question: 'When media constantly repeats a claim, what psychological effect does this have?',
            options: [
              'It makes people more skeptical',
              'It creates the "illusory truth effect"',
              'It has no effect on belief',
              'It makes people fact-check more'
            ],
            correctAnswer: 1,
            explanation: 'The "illusory truth effect" means repeated statements are judged as more truthful, even when people know they\'re false.'
          },
          {
            id: 'q2',
            question: 'What happens when media creates "us vs them" narratives?',
            options: [
              'People become more open to different viewpoints',
              'It triggers tribal instincts and reduces critical thinking',
              'It encourages fact-checking',
              'It has no psychological effect'
            ],
            correctAnswer: 1,
            explanation: 'Tribal psychology makes people defend their "team" regardless of facts and reduces empathy for the "other side."'
          }
        ]
      }
    ]
  }
]; 