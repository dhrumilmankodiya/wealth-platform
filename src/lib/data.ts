export type Category = 'wealth' | 'life' | 'next';

export interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  type: 'article' | 'video' | 'insight';
  readTime: string;
  date: string;
  author: string;
  trending?: boolean;
  peopleAlsoRead?: boolean;
  imageUrl?: string;
}

export interface PortfolioInsight {
  id: string;
  type: 'summary' | 'alert' | 'opportunity';
  title: string;
  description: string;
  impact?: 'positive' | 'negative' | 'neutral';
}

// Mock data
export const contentData: ContentItem[] = [
  {
    id: '1',
    title: 'The Future of AI Investing: How Machine Intelligence is Reshaping Portfolio Strategies',
    excerpt: 'Explore how hedge funds and wealth managers are leveraging AI to generate alpha in increasingly competitive markets.',
    category: 'next',
    type: 'article',
    readTime: '8 min',
    date: 'Apr 28, 2026',
    author: 'Sarah Chen',
    trending: true,
  },
  {
    id: '2',
    title: 'Global Diversification in Emerging Markets',
    excerpt: 'Strategic allocation insights for navigating Southeast Asia and Latin America opportunities.',
    category: 'wealth',
    type: 'article',
    readTime: '12 min',
    date: 'Apr 27, 2026',
    author: 'Marcus Webb',
    peopleAlsoRead: true,
  },
  {
    id: '3',
    title: 'Luxury Assets as Inflation Hedges',
    excerpt: 'Why ultra-high-net-worth investors are increasing allocations to art, wine, and collectibles.',
    category: 'wealth',
    type: 'insight',
    readTime: '4 min',
    date: 'Apr 26, 2026',
    author: 'Elena Rodriguez',
  },
  {
    id: '4',
    title: 'Private Credit: The New Frontier',
    excerpt: 'Direct lending opportunities offering 8-12% yields with controlled volatility.',
    category: 'wealth',
    type: 'article',
    readTime: '10 min',
    date: 'Apr 25, 2026',
    author: 'James Morrison',
    trending: true,
  },
  {
    id: '5',
    title: 'Quarterly Market Outlook: Q2 2026',
    excerpt: 'Comprehensive analysis of macro trends, sector rotations, and tactical positioning.',
    category: 'wealth',
    type: 'article',
    readTime: '15 min',
    date: 'Apr 24, 2026',
    author: 'Research Team',
  },
  {
    id: '6',
    title: 'Family Office Governance Frameworks',
    excerpt: 'Best practices for succession planning and institutional decision-making processes.',
    category: 'life',
    type: 'article',
    readTime: '9 min',
    date: 'Apr 23, 2026',
    author: 'Victoria Stein',
  },
  {
    id: '7',
    title: 'The Rise of Tokenized Real Estate',
    excerpt: 'How blockchain is democratizing premium property investments.',
    category: 'next',
    type: 'video',
    readTime: '18 min',
    date: 'Apr 22, 2026',
    author: 'David Kim',
  },
  {
    id: '8',
    title: 'Tax-Efficient Wealth Transfer Strategies',
    excerpt: 'Optimizing intergenerational wealth transfer through trusts and foundations.',
    category: 'life',
    type: 'insight',
    readTime: '6 min',
    date: 'Apr 21, 2026',
    author: 'Michael Torres',
  },
  {
    id: '9',
    title: 'ESG Integration in Private Markets',
    excerpt: 'Sustainable investing without compromising returns.',
    category: 'next',
    type: 'article',
    readTime: '7 min',
    date: 'Apr 20, 2026',
    author: 'Anna Liu',
  },
  {
    id: '10',
    title: 'The Psychology of Wealth',
    excerpt: 'Understanding behavioral biases in investment decision-making.',
    category: 'life',
    type: 'article',
    readTime: '11 min',
    date: 'Apr 19, 2026',
    author: 'Dr. Robert Hayes',
    peopleAlsoRead: true,
  },
];

export const portfolioInsights: PortfolioInsight[] = [
  {
    id: 'p1',
    type: 'summary',
    title: 'Your Portfolio Exposure',
    description: 'Tech allocation at 32% — above benchmark. Consider rebalancing.',
  },
  {
    id: 'p2',
    type: 'opportunity',
    title: 'Emerging Markets Dip',
    description: 'Asian markets down 4.2%. Potential entry point for EM equity.',
  },
  {
    id: 'p3',
    type: 'alert',
    title: 'Fed Meeting Ahead',
    description: 'FOMC meeting May 7. Rate decision likely unchanged.',
  },
];

export const categoryInfo = {
  wealth: {
    label: 'Wealth',
    description: 'Investment strategies, market intelligence, and portfolio optimization',
    color: '#c9a962',
  },
  life: {
    label: 'Life',
    description: 'Lifestyle, family governance, and wealth wellness',
    color: '#7c9c6b',
  },
  next: {
    label: 'Next',
    description: 'Future trends, innovation, and emerging opportunities',
    color: '#6b8c9c',
  },
};