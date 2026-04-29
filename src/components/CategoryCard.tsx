'use client';

import { Category } from '@/lib/data';

interface CategoryCardProps {
  category: Category;
  label: string;
  description: string;
  color: string;
}

export function CategoryCard({ category, label, description, color }: CategoryCardProps) {
  return (
    <div 
      className="group relative p-8 rounded-2xl bg-[#111111] border border-[#262626] hover:border-[#3d3421] transition-all duration-500 cursor-pointer overflow-hidden"
      style={{ '--hover-color': color } as React.CSSProperties}
    >
      {/* Hover glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)` }}
      />
      
      <div className="relative z-10">
        {/* Category indicator */}
        <div 
          className="w-3 h-3 rounded-full mb-6"
          style={{ backgroundColor: color }}
        />
        
        <h3 
          className="text-3xl font-light mb-3 group-hover:translate-x-1 transition-transform duration-300"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f5f5f5' }}
        >
          {label}
        </h3>
        
        <p className="text-[#666666] text-sm leading-relaxed group-hover:text-[#a3a3a3] transition-colors">
          {description}
        </p>
        
        {/* Arrow */}
        <div className="mt-8 flex items-center gap-2 text-[#666666] group-hover:text-[#c9a962] transition-colors">
          <span className="text-sm font-medium">Explore</span>
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}