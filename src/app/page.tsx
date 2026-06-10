import { getAllArticles, getCategories } from '@/lib/articles';
import AdSlot from '@/components/AdSlot';
import ArticleCard from '@/components/ArticleCard';

export default async function HomePage() {
  const articles = getAllArticles();
  const categories = getCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-900/30 border border-orange-700/30 mb-8">
            <span className="text-yellow-400">🏆</span>
            <span className="text-sm text-orange-300 font-medium">100+ Expert Guides for 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-300 via-orange-200 to-yellow-300 bg-clip-text text-transparent">
              Fix It Yourself
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Save thousands with step-by-step DIY repair guides. From leaky faucets to roof repairs — we have got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/articles" className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg hover:from-orange-500 hover:to-orange-400 transition shadow-lg shadow-orange-500/30">
              Browse All Guides →
            </a>
            <a href="#categories" className="px-8 py-4 rounded-xl border border-orange-500/30 text-orange-300 font-bold text-lg hover:bg-orange-900/30 transition">
              Explore Categories
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10 relative z-20 mb-12">
          {[
            { label: 'Articles', value: articles.length, icon: '📚' },
            { label: 'Categories', value: categories.length, icon: '📋' },
            { label: 'Decks', value: '50+', icon: '🃏' },
            { label: 'Updated', value: '2026', icon: '🔄' },
          ].map(s => (
            <div key={s.label} className="card-game p-4 text-center">
              <span className="text-2xl mb-1 block">{s.icon}</span>
              <span className="text-2xl font-bold text-orange-300 block">{s.value}</span>
              <span className="text-xs text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>

        <AdSlot id='home-top' />

        {/* Categories */}
        <section id='categories' className='my-16'>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">📋</span>
            <h2 className="text-3xl font-bold text-orange-200 m-0">Browse by Category</h2>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {categories.map((cat) => (
              <a key={cat.slug} href={'/category/' + cat.slug} className='category-card'>
                <span className='text-3xl mb-3 block'>{cat.icon}</span>
                <span className='font-semibold text-gray-200'>{cat.name}</span>
                <span className='text-sm text-gray-500 block mt-2'>{cat.count} articles</span>
              </a>
            ))}
          </div>
        </section>

        <AdSlot id='home-middle' />

        {/* Latest Guides */}
        <section id='latest' className='my-16'>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <h2 className="text-3xl font-bold text-orange-200 m-0">Latest Guides</h2>
            </div>
            <a href="/articles" className="text-orange-400 hover:text-orange-300 font-medium text-sm">View All →</a>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {articles.slice(0, 12).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <AdSlot id='home-bottom' />

        {/* CTA */}
        <div className="text-center py-16">
          <div className="card-game p-10 inline-block max-w-lg mx-auto">
            <span className="text-4xl mb-4 block">🎯</span>
            <h3 className="text-2xl font-bold text-orange-200 mb-3">Ready to Fix It?</h3>
            <p className="text-gray-400 mb-6">Browse all 100+ step-by-step guides and start fixing today.</p>
            <a href="/articles" className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-bold hover:from-orange-500 hover:to-yellow-400 transition shadow-lg">
              View All Guides →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

