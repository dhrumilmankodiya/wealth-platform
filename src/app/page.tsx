import { Navigation } from '@/components/Navigation';
import { CategoryCard } from '@/components/CategoryCard';
import { ContentCard } from '@/components/ContentCard';
import { PortfolioWidget } from '@/components/PortfolioWidget';
import { contentData, portfolioInsights, categoryInfo } from '@/lib/data';

export default function HomePage() {
  const trending = contentData.filter(c => c.trending);
  const peopleAlsoRead = contentData.filter(c => c.peopleAlsoRead);
  const recent = contentData.slice(0, 6);

  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section - Personalized Welcome */}
        <section className="relative overflow-hidden bg-[#0a0a0a]">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
          <div className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, #c9a96208 0%, transparent 50%), radial-gradient(circle at 80% 50%, #6b8c9c08 0%, transparent 50%)'
            }}
          />
          
          <div className="relative max-w-[1600px] mx-auto px-8 py-20">
            <div className="max-w-3xl">
              <p className="text-[#c9a962] text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in">
                Good evening, Dhrumil
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-[#f5f5f5] mb-6 animate-fade-in delay-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Your wealth, <span className="italic text-[#c9a962]">curated</span>
              </h1>
              <p className="text-xl text-[#a3a3a3] font-light max-w-2xl animate-fade-in delay-2">
                Personalized insights across wealth, life, and future opportunities — tailored to your portfolio and interests.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Insights Widget */}
        <section className="relative z-10 -mt-12 px-8">
          <div className="max-w-[1600px] mx-auto">
            <PortfolioWidget insights={portfolioInsights} />
          </div>
        </section>

        {/* Category Tabs */}
        <section className="px-8 py-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-8 mb-10">
              <h2 className="text-2xl font-light text-[#f5f5f5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Explore by Category
              </h2>
              <div className="h-px flex-1 bg-[#262626]" />
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <CategoryCard 
                category="wealth" 
                {...categoryInfo.wealth}
              />
              <CategoryCard 
                category="life" 
                {...categoryInfo.life}
              />
              <CategoryCard 
                category="next" 
                {...categoryInfo.next}
              />
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="px-8 py-12 bg-[#0d0d0d]">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <span className="text-[#c9a962]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <h2 className="text-2xl font-light text-[#f5f5f5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Trending Now
                </h2>
              </div>
              <button className="text-sm text-[#666666] hover:text-[#c9a962] transition-colors">
                View all →
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trending.map((item, index) => (
                <ContentCard key={item.id} content={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* People Like You Section */}
        <section className="px-8 py-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[#7c9c6b]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h2 className="text-2xl font-light text-[#f5f5f5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                People Like You Are Reading
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {peopleAlsoRead.map((item, index) => (
                <ContentCard key={item.id} content={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Content */}
        <section className="px-8 py-12 bg-[#0d0d0d]">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-light text-[#f5f5f5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Recent
              </h2>
              <button className="text-sm text-[#666666] hover:text-[#c9a962] transition-colors">
                View all →
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map((item, index) => (
                <ContentCard key={item.id} content={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 border-t border-[#262626]">
          <div className="max-w-[1600px] mx-auto flex items-center justify-between">
            <p className="text-[#666666] text-sm">
              © 2026 Wealth Platform. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-[#666666] hover:text-[#c9a962] transition-colors">Privacy</a>
              <a href="#" className="text-[#666666] hover:text-[#c9a962] transition-colors">Terms</a>
              <a href="#" className="text-[#666666] hover:text-[#c9a962] transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}