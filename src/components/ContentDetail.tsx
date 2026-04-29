'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ContentItem, CategoryInfo } from '@/lib/data';

interface ContentDetailProps {
  content: ContentItem;
  category: CategoryInfo;
  related: ContentItem[];
}

export function ContentDetail({ content, category, related }: ContentDetailProps) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-[#0a0a0a]" />
        
        <div className="relative max-w-4xl mx-auto px-8 py-16">
          {/* Back */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#666666] hover:text-[#c9a962] transition-colors mb-8"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Back to Home</span>
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span 
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{ 
                backgroundColor: `${category.color}15`,
                color: category.color 
              }}
            >
              {category.label}
            </span>
            <span className="text-[#666666] text-sm">•</span>
            <span className="text-sm text-[#666666]">{content.readTime}</span>
            <span className="text-[#666666] text-sm">•</span>
            <span className="text-sm text-[#666666]">{content.date}</span>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl font-light text-[#f5f5f5] mb-6 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {content.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#a3a3a3]">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[#f5f5f5] font-medium">{content.author}</p>
              <p className="text-xs text-[#666666]">Senior Investment Strategist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Storytelling - Interactive Chart Area */}
      <section className="px-8 py-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          {/* Simulated Interactive Chart */}
          <div className="relative p-8 rounded-2xl bg-[#141414] border border-[#262626]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-light text-[#f5f5f5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Portfolio Impact Simulation
              </h3>
              <div className="flex items-center gap-2 text-xs text-[#666666]">
                <span className="w-2 h-2 rounded-full bg-[#7c9c6b]" />
                Interactive
              </div>
            </div>
            
            {/* Simulated chart visualization */}
            <div className="relative h-48 flex items-end gap-2">
              {[65, 72, 68, 75, 78, 82, 85, 80, 88, 92, 89, 95].map((value, i) => (
                <div 
                  key={i}
                  className="flex-1 rounded-t-sm transition-all duration-500 hover:opacity-80 cursor-pointer"
                  style={{ 
                    height: `${value}%`,
                    background: 'linear-gradient(to top, #c9a962, #e4d4a8)',
                    opacity: 0.7 + (i / 40)
                  }}
                />
              ))}
            </div>
            
            {/* Chart labels */}
            <div className="flex justify-between mt-4 text-xs text-[#666666]">
              <span>Jan</span>
              <span>Dec</span>
              <span>Projected</span>
            </div>

            {/* Insight highlight */}
            <div className="mt-6 p-4 rounded-xl bg-[#c9a962]/5 border border-[#c9a962]/20">
              <div className="flex items-start gap-3">
                <span className="text-[#c9a962] mt-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-[#c9a962] font-medium mb-1">Key Finding</p>
                  <p className="text-sm text-[#a3a3a3]">
                    Early adopters who allocated 15% to this strategy saw average returns of 23% over the simulated period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* TL;DR Box */}
          <div className="mb-12 p-6 rounded-2xl bg-[#111111] border border-[#262626]">
            <h3 className="text-lg font-light text-[#f5f5f5] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              TL;DR
            </h3>
            <ul className="space-y-3">
              {[
                'AI-driven portfolio strategies outperform traditional active management by 2.3x in risk-adjusted returns',
                'Machine learning models reduce emotional bias in sector allocation decisions',
                'Hybrid human-AI approaches show the strongest results for ultra-high-net-worth portfolios',
                'Regulatory frameworks are evolving to accommodate algorithmic decision support'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#a3a3a3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Article content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-[#a3a3a3] leading-relaxed mb-8 font-light">
              {content.excerpt}
            </p>
            
            <p className="text-[#a3a3a3] leading-relaxed mb-6">
              The intersection of artificial intelligence and wealth management represents one of the most significant paradigm shifts in financial services history. As hedge funds and family offices increasingly deploy machine learning algorithms to analyze market patterns, the question is no longer <em>whether</em> to adopt these technologies, but <em>how</em> to integrate them effectively.
            </p>

            <h2 className="text-2xl font-light text-[#f5f5f5] mt-12 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              The Alpha Generation Gap
            </h2>

            <p className="text-[#a3a3a3] leading-relaxed mb-6">
              Traditional active management has struggled to deliver consistent alpha in an era of efficient markets. Our analysis of 500+ hedge funds over a five-year period reveals a compelling pattern: firms leveraging AI for decision support consistently outperformed their purely human-managed counterparts.
            </p>

            {/* Inline highlight */}
            <blockquote className="my-8 pl-6 border-l-2 border-[#c9a962]">
              <p className="text-xl text-[#c9a962] italic font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "The future of wealth management isn't about replacing human judgment — it's about amplifying it."
              </p>
            </blockquote>

            <h2 className="text-2xl font-light text-[#f5f5f5] mt-12 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Strategic Implementation
            </h2>

            <p className="text-[#a3a3a3] leading-relaxed mb-6">
              For high-net-worth portfolios, we recommend a phased approach to AI integration. Start with risk management and portfolio construction, then expand to tactical allocation as the team builds confidence with the technology.
            </p>

            <ul className="list-disc list-inside text-[#a3a3a3] leading-relaxed mb-6 space-y-2">
              <li>Phase 1: Risk analytics and scenario modeling (6-12 months)</li>
              <li>Phase 2: Signal generation and idea screening (12-18 months)</li>
              <li>Phase 3: Tactical allocation execution (ongoing)</li>
            </ul>
          </div>

          {/* Smart Interruption - Key Takeaways */}
          <div className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#262626]">
            <h3 className="text-lg font-light text-[#f5f5f5] mb-4 flex items-center gap-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <svg className="w-5 h-5 text-[#c9a962]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Key Takeaways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Risk-Adjusted Alpha', value: '+2.3x', desc: 'vs traditional active management' },
                { title: 'Optimal Allocation', value: '15-20%', desc: 'recommended portfolio weight' },
                { title: 'Time to Value', value: '6-12 mo.', desc: 'phase 1 implementation' },
                { title: 'Suitable For', value: 'UHNW', desc: '$10M+ portfolios' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#0a0a0a]/50 border border-[#262626]">
                  <p className="text-xs text-[#666666] mb-1">{item.title}</p>
                  <p className="text-2xl text-[#c9a962] font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {item.value}
                  </p>
                  <p className="text-xs text-[#666666]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Layer - What Should I Do Next? */}
      <section className="px-8 py-12 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-[#3d3421]">
            <h3 className="text-2xl font-light text-[#f5f5f5] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              What should I do next?
            </h3>
            <p className="text-[#666666] mb-8">
              Personalized next steps based on your portfolio profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Action 1 */}
              <button className="p-5 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#c9a962]/30 transition-all text-left group">
                <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center text-[#c9a962] mb-4 group-hover:bg-[#c9a962]/20 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-[#f5f5f5] mb-1">Schedule a Call</h4>
                <p className="text-xs text-[#666666]">Discuss AI integration with your relationship manager</p>
              </button>

              {/* Action 2 */}
              <button className="p-5 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#c9a962]/30 transition-all text-left group">
                <div className="w-10 h-10 rounded-full bg-[#7c9c6b]/10 flex items-center justify-center text-[#7c9c6b] mb-4 group-hover:bg-[#7c9c6b]/20 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14,2 14,8 20,8" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-[#f5f5f5] mb-1">Download Report</h4>
                <p className="text-xs text-[#666666]">Full AI wealth management whitepaper</p>
              </button>

              {/* Action 3 */}
              <button 
                onClick={() => setSaved(!saved)}
                className="p-5 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#c9a962]/30 transition-all text-left group"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  saved ? 'bg-[#c9a962] text-[#0a0a0a]' : 'bg-[#6b8c9c]/10 text-[#6b8c9c] group-hover:bg-[#6b8c9c]/20'
                }`}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-[#f5f5f5] mb-1">
                  {saved ? 'Saved to Watchlist' : 'Save for Later'}
                </h4>
                <p className="text-xs text-[#666666]">{saved ? 'View in your watchlist' : 'Access this insight anytime'}</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-light text-[#f5f5f5] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Related Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((item, i) => (
              <Link 
                key={item.id}
                href={`/content/${item.id}`}
                className="p-5 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#3d3421] transition-all group"
              >
                <span 
                  className="text-xs font-medium mb-2 block"
                  style={{ color: category.color }}
                >
                  {categoryInfo[item.category].label}
                </span>
                <h4 className="text-sm text-[#f5f5f5] group-hover:text-[#c9a962] transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#666666] mt-2">{item.readTime} • {item.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-[#262626]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-[#666666] text-sm">
            © 2026 Wealth Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-[#666666] hover:text-[#c9a962] transition-colors">Privacy</a>
            <a href="#" className="text-[#666666] hover:text-[#c9a962] transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}