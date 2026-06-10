'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Article {
  slug: string; title: string; excerpt: string; category: string; date: string; readTime: number; keywords: string[];
}

const ICONS: Record<string, string> = {
  Plumbing: "🔧", Electrical: "⚡", Walls: "🧱", Flooring: "🏗️",
  Roofing: "🏠", Painting: "🎨", Windows: "🪟", General: "🛠️",
};

function Results({ articles }: { articles: Article[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (!query) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(articles.filter(a =>
      a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) ||
      a.keywords.some(k => k.toLowerCase().includes(q)) || a.category.toLowerCase().includes(q)
    ));
  }, [query, articles]);

  if (!query) {
    return (
      <div className="text-center py-20">
        <span className="text-6xl block mb-4">🔧</span>
        <p className="text-gray-400 text-lg">Search hundreds of step-by-step DIY repair guides.</p>
        <Link href="/articles" className="inline-block mt-4 text-orange-400 hover:underline font-bold">Browse all guides →</Link>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-20">
        <span className="text-6xl block mb-4">🔩</span>
        <p className="text-gray-300 text-lg">No results for &ldquo;{query}&rdquo;</p>
        <Link href="/articles" className="inline-block mt-2 text-orange-400 hover:underline font-bold">Browse all guides →</Link>
      </div>
    );
  }

  return (
    <div>
      <p className="text-gray-400 mb-6 font-mono">{results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map(a => (
          <Link key={a.slug} href={`/articles/${a.slug}`}
            className="block p-5 bg-[#1E1E1E] border border-orange-900/30 hover:border-orange-500/50 hover:bg-[#252525] transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <span>{ICONS[a.category] || '🛠️'}</span>
              <span className="text-xs font-bold text-orange-500 bg-orange-900/20 px-2 py-0.5 rounded uppercase tracking-wide">{a.category}</span>
            </div>
            <h3 className="text-lg font-black text-orange-50 group-hover:text-orange-400 mb-1.5 uppercase tracking-tight">{a.title}</h3>
            <p className="text-gray-500 text-sm line-clamp-2">{a.excerpt}</p>
            <div className="flex gap-3 mt-3 text-xs text-gray-600 font-mono">
              <span>{a.date}</span>
              <span>{a.readTime} min</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SearchResults({ articles }: { articles: Article[] }) {
  return (
    <div className="min-h-screen bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black text-orange-100 mb-2 tracking-tight">SEARCH GUIDES</h1>
        <p className="text-gray-500 font-mono mb-8">Find the exact repair guide you need.</p>
        <Suspense fallback={<div className="text-center py-12 text-orange-400 animate-pulse font-mono">LOADING...</div>}>
          <Results articles={articles} />
        </Suspense>
      </div>
    </div>
  );
}
