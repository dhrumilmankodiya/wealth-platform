import { Navigation } from '@/components/Navigation';
import { ContentDetail } from '@/components/ContentDetail';
import { contentData, categoryInfo } from '@/lib/data';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return contentData.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const content = contentData.find((c) => c.id === id);
  
  if (!content) return { title: 'Content Not Found' };
  
  return {
    title: `${content.title} | Wealth Platform`,
    description: content.excerpt,
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { id } = await params;
  const content = contentData.find((c) => c.id === id);
  
  if (!content) {
    notFound();
  }
  
  const category = categoryInfo[content.category];
  const related = contentData
    .filter((c) => c.category === content.category && c.id !== content.id)
    .slice(0, 3);

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <ContentDetail content={content} category={category} related={related} />
      </main>
    </>
  );
}