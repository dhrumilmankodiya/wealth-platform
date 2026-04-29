'use client';

import Link from 'next/link';
import { ContentItem, categoryInfo } from '@/lib/data';

interface ContentCardProps {
  content: ContentItem;
  index?: number;
}

export function ContentCard({ content, index = 0 }: ContentCardProps) {
  const category = categoryInfo[content.category];
  
  const typeIcons = {
    article: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    video: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5,3 19,12 5,21" />
      </svg>
    ),
    insight: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  };

  return (
    <Link 
      href={`/content/${content.id}`}
      className="group block p-6 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#3d3421] transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Top meta row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span 
            className="px-3 py-1 text-xs font-medium rounded-full"
            style={{ 
              backgroundColor: `${category.color}15`,
              color: category.color 
            }}
          >
            {category.label}
          </span>
          <span className="text-[#666666] flex items-center gap-1">
            {typeIcons[content.type]}
            <span className="text-xs capitalize">{content.type}</span>
          </span>
        </div>
        
        <button 
          className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#666666] hover:text-[#c9a962] hover:border-[#c9a962]/30 transition-all opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-light text-[#f5f5f5] mb-3 group-hover:text-[#c9a962] transition-colors line-clamp-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        {content.title}
      </h3>
      
      {/* Excerpt */}
      <p className="text-sm text-[#666666] leading-relaxed mb-4 line-clamp-2">
        {content.excerpt}
      </p>
      
      {/* Bottom meta */}
      <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
        <div className="flex items-center gap-4 text-xs text-[#666666]">
          <span>{content.author}</span>
          <span>•</span>
          <span>{content.readTime}</span>
        </div>
        <span className="text-xs text-[#666666]">
          {content.date}
        </span>
      </div>
    </Link>
  );
}