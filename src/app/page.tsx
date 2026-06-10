import { getAllArticles, getCategories } from '@/lib/articles';
import AdSlot from '@/components/AdSlot';
import ArticleCard from '@/components/ArticleCard';

function getDifficulty(article: any) {
  const mins = article.readTime || 5;
  if (mins <= 5) return { label: 'EASY', color: 'bg-green-700 text-green-300' };
  if (mins <= 10) return { label: 'MEDIUM', color: 'bg-yellow-700 text-yellow-300' };
  return { label: 'HARD', color: 'bg-red-700 text-red-300' };
}

export default async function HomePage() {
  const articles = getAllArticles();
  const categories = getCategories();

  return (
    <>
      {/* Hero - Split Layout */}
      <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #1A1208 0%, #2A1A0A 40%, #1A1A1A 100%)'}}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🔧</div>
          <div className="absolute top-20 right-20 text-7xl">🔨</div>
          <div className="absolute bottom-10 left-20 text-8xl">🪛</div>
          <div className="absolute bottom-20 right-10 text-6xl">🔩</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-900/40 border border-orange-700/30 rounded mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">100+ Free Guides</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                <span className="text-orange-100">FIX IT</span><br/>
                <span className="text-orange-500">YOURSELF</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Stop paying $150/hour for simple repairs. Our step-by-step guides save homeowners an average of <span className="text-orange-400 font-bold">$2,400 per year</span>.
              </p>
              <div className="flex gap-4">
                <a href="/articles" className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded transition shadow-lg shadow-orange-600/20">
                  BROWSE ALL GUIDES →
                </a>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-3">
              {['🔧 Plumbing','⚡ Electrical','🎨 Painting','🪟 Windows','🏠 Roofing','🛁 Bathroom','🪚 Floors','🚪 Doors'].map(t => (
                <a key={t} href="/#categories" className="bg-[#252525] border border-gray-700 hover:border-orange-600 rounded-lg p-4 text-center text-sm font-bold text-gray-300 hover:text-orange-400 transition-all">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-3 -mt-8 relative z-20 mb-12">
          {[
            { label: 'GUIDES', value: articles.length, color: 'text-orange-400' },
            { label: 'AVG SAVINGS', value: '$2.4K', color: 'text-green-400' },
            { label: 'CATEGORIES', value: categories.length, color: 'text-yellow-400' },
            { label: 'UPDATED', value: '2026', color: 'text-blue-400' },
          ].map(s => (
            <div key={s.label} className="bg-[#252525] border border-gray-700 rounded-lg p-4 text-center">
              <span className={`text-xl font-black block ${s.color}`}>{s.value}</span>
              <span className="text-xs text-gray-500 font-bold tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Quick Diagnosis */}
        <section className="mb-16 bg-[#1A1208] border border-orange-900/30 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🔍</span>
            <h2 className="text-2xl font-black text-orange-100 m-0">QUICK DIAGNOSIS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { q: 'Leaky Faucet?', a: 'Fix it in 30 min', slug: 'fix-leaky-faucet-guide' },
              { q: 'Running Toilet?', a: '$5 part, 15 min fix', slug: 'fix-running-toilet-guide' },
              { q: 'Drafty Window?', a: 'Seal it for $10', slug: 'fix-drafty-house-guide' },
              { q: 'Clogged Drain?', a: 'Clear it without chemicals', slug: 'unclog-kitchen-sink-guide' },
            ].map(d => (
              <a key={d.slug} href={`/articles/${d.slug}`} className="bg-[#252525] border border-gray-700 hover:border-orange-500 rounded-lg p-4 transition-all group">
                <p className="text-orange-300 font-bold text-sm mb-1">{d.q}</p>
                <p className="text-green-400 text-xs">{d.a} →</p>
              </a>
            ))}
          </div>
        </section>

        <AdSlot id='home-top' />

        {/* Categories as Tool Grid */}
        <section id='categories' className='my-16'>
          <h2 className="text-2xl font-black text-orange-100 mb-8 border-b-2 border-orange-600/20 pb-4 flex items-center gap-3">
            <span>📋</span> BROWSE BY TOPIC
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3'>
            {categories.map(cat => (
              <a key={cat.slug} href={'/category/' + cat.slug} className='bg-[#252525] border border-gray-700 hover:border-orange-500 rounded-xl p-5 text-center transition-all hover:-translate-y-1'>
                <span className='text-3xl mb-2 block'>{cat.icon}</span>
                <span className='font-bold text-sm text-gray-200'>{cat.name}</span>
                <span className='text-xs text-orange-500 block mt-1 font-mono'>{cat.count}</span>
              </a>
            ))}
          </div>
        </section>

        <AdSlot id='home-middle' />

        {/* Latest with difficulty badges */}
        <section className='my-16'>
          <h2 className="text-2xl font-black text-orange-100 mb-8 border-b-2 border-orange-600/20 pb-4 flex items-center gap-3">
            <span>🆕</span> LATEST GUIDES
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {articles.slice(0, 12).map(article => {
              const diff = getDifficulty(article);
              return (
                <a key={article.slug} href={'/articles/' + article.slug} className='bg-[#252525] border border-gray-700 hover:border-orange-500 rounded-xl p-5 transition-all group hover:-translate-y-1'>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-black px-2 py-0.5 rounded ${diff.color}`}>{diff.label}</span>
                    <span className="text-xs text-gray-600 font-mono">{article.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-200 mb-2 group-hover:text-orange-400 transition-colors line-clamp-2 text-sm">
                    {article.title}
                  </h3>
                  <div className="flex justify-between text-xs text-gray-600 font-mono">
                    <span>⏱ {article.readTime}m</span>
                    <span>💰 Saves $$$</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <AdSlot id='home-bottom' />
      </div>
    </>
  );
}
