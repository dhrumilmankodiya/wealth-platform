'use client';

import { PortfolioInsight } from '@/lib/data';

interface PortfolioWidgetProps {
  insights: PortfolioInsight[];
}

export function PortfolioWidget({ insights }: PortfolioWidgetProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {insights.map((insight, index) => (
        <InsightCard key={insight.id} insight={insight} index={index} />
      ))}
    </div>
  );
}

function InsightCard({ insight, index }: { insight: PortfolioInsight; index: number }) {
  const typeStyles = {
    summary: {
      bg: 'bg-[#c9a962]/10',
      border: 'border-[#c9a962]/20',
      icon: 'text-[#c9a962]',
      label: 'Portfolio',
    },
    alert: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/20',
      icon: 'text-red-400',
      label: 'Alert',
    },
    opportunity: {
      bg: 'bg-[#7c9c6b]/10',
      border: 'border-[#7c9c6b]/20',
      icon: 'text-[#7c9c6b]',
      label: 'Opportunity',
    },
  };

  const style = typeStyles[insight.type];

  return (
    <div 
      className={`flex-shrink-0 w-80 p-5 rounded-xl ${style.bg} border ${style.border} animate-slide-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`mt-1 ${style.icon}`}>
          {insight.type === 'summary' && (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
          )}
          {insight.type === 'alert' && (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          )}
          {insight.type === 'opportunity' && (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
              <polyline points="17,6 23,6 23,12" />
            </svg>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-medium ${style.icon}`}>
              {style.label}
            </span>
            <span className="text-xs text-[#666666]">
              •
            </span>
            <span className="text-xs text-[#666666]">
              Just now
            </span>
          </div>
          
          <h4 className="text-sm font-medium text-[#f5f5f5] mb-1 truncate">
            {insight.title}
          </h4>
          
          <p className="text-xs text-[#a3a3a3] leading-relaxed line-clamp-2">
            {insight.description}
          </p>
        </div>
      </div>
    </div>
  );
}