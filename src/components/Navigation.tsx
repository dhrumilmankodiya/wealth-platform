'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('for-you');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#c9a962]/30 flex items-center justify-center">
            <span className="text-[#c9a962] text-lg font-light font-['Cormorant_Garamond']">W</span>
          </div>
          <span className="text-xl font-light text-[#f5f5f5] font-['Cormorant_Garamond'] tracking-wide">
            Wealth Platform
          </span>
        </Link>

        {/* Main Navigation */}
        <div className="flex items-center gap-1">
          <NavItem 
            active={activeSection === 'for-you'} 
            onClick={() => setActiveSection('for-you')}
            href="/"
          >
            For You
          </NavItem>
          <NavItem 
            active={activeSection === 'discover'} 
            onClick={() => setActiveSection('discover')}
            href="/discover"
          >
            Discover
          </NavItem>
          <NavItem 
            active={activeSection === 'watchlist'} 
            onClick={() => setActiveSection('watchlist')}
            href="/watchlist"
          >
            Watchlist
          </NavItem>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <button className="text-[#666666] hover:text-[#c9a962] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          
          {/* Notifications */}
          <button className="text-[#666666] hover:text-[#c9a962] transition-colors relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#c9a962] rounded-full" />
          </button>

          {/* Profile */}
          <button className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#c9a962]/30 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ 
  children, 
  active, 
  onClick,
  href = '#'
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
  href?: string;
}) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
        active 
          ? 'text-[#f5f5f5] bg-[#1a1a1a]' 
          : 'text-[#666666] hover:text-[#a3a3a3] hover:bg-[#111111]'
      }`}
    >
      {children}
    </Link>
  );
}