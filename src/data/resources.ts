export interface Resource {
  id: string;
  type: 'book' | 'article' | 'documentary' | 'organization';
  title: string;
  description: string;
  url: string;
}

export const resources: Resource[] = [
  {
    id: 'book-thinking-fast-slow',
    type: 'book',
    title: 'Thinking, Fast and Slow',
    description: 'Daniel Kahneman explores the two systems that drive the way we think and how cognitive biases shape our decisions.',
    url: 'https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow',
  },
  {
    id: 'book-misinformation-age',
    type: 'book',
    title: 'The Misinformation Age',
    description: 'Cailin O’Connor and James Owen Weatherall explain how false beliefs spread and what we can do about it.',
    url: 'https://global.oup.com/academic/product/the-misinformation-age-9780300234015',
  },
  {
    id: 'article-confirmation-bias',
    type: 'article',
    title: 'Confirmation Bias: Why You Make Terrible Life Choices',
    description: 'A clear, accessible introduction to confirmation bias and its effects on our thinking.',
    url: 'https://thedecisionlab.com/biases/confirmation-bias',
  },
  {
    id: 'article-media-literacy',
    type: 'article',
    title: 'What is Media Literacy, and Why is it Important?',
    description: 'Common Sense Media explains the basics of media literacy and how to teach it.',
    url: 'https://www.commonsensemedia.org/articles/what-is-media-literacy-and-why-is-it-important',
  },
  {
    id: 'doc-social-dilemma',
    type: 'documentary',
    title: 'The Social Dilemma',
    description: 'A Netflix documentary exploring the dangerous human impact of social networking, with tech experts sounding the alarm.',
    url: 'https://www.netflix.com/title/81254224',
  },
  {
    id: 'doc-miss-representation',
    type: 'documentary',
    title: 'Miss Representation',
    description: 'A documentary that exposes how mainstream media contribute to the under-representation of women in positions of power.',
    url: 'https://therepresentationproject.org/film/miss-representation-film/',
  },
  {
    id: 'org-media-literacy-now',
    type: 'organization',
    title: 'Media Literacy Now',
    description: 'A national advocacy organization for media literacy education policy in the U.S.',
    url: 'https://medialiteracynow.org/',
  },
  {
    id: 'org-factcheck',
    type: 'organization',
    title: 'FactCheck.org',
    description: 'A nonpartisan, nonprofit consumer advocate for voters that aims to reduce the level of deception and confusion in U.S. politics.',
    url: 'https://www.factcheck.org/',
  },
  {
    id: 'org-all-sides',
    type: 'organization',
    title: 'AllSides',
    description: 'A platform that exposes people to information and ideas from all sides of the political spectrum.',
    url: 'https://www.allsides.com/',
  },
]; 