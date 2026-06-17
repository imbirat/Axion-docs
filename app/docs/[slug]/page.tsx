import { notFound, redirect } from 'next/navigation';
import { docPages, sidebarGroups } from '@/lib/docs';
import DocsClient from './DocsClient';

export function generateStaticParams() {
  return docPages.map((page) => ({ slug: page.slug }));
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const page = docPages.find((p) => p.slug === params.slug);
  if (!page) notFound();

  const groups = sidebarGroups;

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 56px)', paddingTop: '56px' }}>
      <DocsClient page={page} groups={groups} />
    </div>
  );
}
