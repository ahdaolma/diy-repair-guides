import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://diy-repair-guides.vercel.app"),
  title: { default: "DIY Repair Guides | DIY Guides & Tips 2026", template: "%s | DIY Repair Guides" },
  description: "Expert Clash Royale strategy guides, Top Fixes for every arena, card counters, and pro tips to win more battles.",
  keywords: ["Clash Royale","Top Fixes","card guide","strategy","Electrical","counter guide","Clash Royale tips"],
  openGraph: { type: "website", siteName: "DIY Repair Guides", title: "DIY Repair Guides | Pro Decks & Strategy", description: "Win more battles with expert deck guides and strategy tips." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6600381860016497" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#1A1A1A]/90 border-b border-orange-900/30">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <span className="text-2xl">🔧</span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-500">
                DIY Repair Guides
              </span>
            </a>
            <nav className="flex gap-8 text-sm font-medium">
              <a href="/" className="nav-link">Home</a>
              <a href="/articles" className="nav-link">All Guides</a>
              <a href="/#categories" className="nav-link">Categories</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-orange-900/30 bg-[#121212] py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold text-orange-300 mb-3">🔧 DIY Repair Guides</h4>
                <p className="text-gray-500 text-sm">Expert strategy guides, deck builds, and card counters to dominate every arena.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-orange-300 mb-3">Quick Links</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="/articles" className="text-gray-400 hover:text-orange-300">All Guides</a>
                  <a href="/category/decks" className="text-gray-400 hover:text-orange-300">Top Fixes</a>
                  <a href="/category/counters" className="text-gray-400 hover:text-orange-300">Plumbing</a>
                  <a href="/category/arena-decks" className="text-gray-400 hover:text-orange-300">Electrical</a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-orange-300 mb-3">Info</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="/privacy" className="text-gray-400 hover:text-orange-300">Privacy Policy</a>
                  <a href="/terms" className="text-gray-400 hover:text-orange-300">Terms of Service</a>
                  <a href="/sitemap.xml" className="text-gray-400 hover:text-orange-300">Sitemap</a>
                </div>
              </div>
            </div>
            <div className="border-t border-orange-900/20 pt-6 text-center text-sm text-gray-600">
              <p>@ {new Date().getFullYear()} DIY Repair Guides. This site is not affiliated with homeowners. Clash Royale is a trademark of homeowners Oy.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

