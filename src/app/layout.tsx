import type { Metadata } from "next";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  verification: { google: "Y9bYAWGBOs0iyKHC2knpGdauqdjIi67FhxqLrjKarsM" },
  metadataBase: new URL("https://diy-repair-guides.vercel.app"),
  title: { default: "DIY Repair Guides | Fix It Yourself 2026", template: "%s | DIY Repair Guides" },
  description: "Step-by-step DIY home repair guides. Save thousands fixing plumbing, electrical, roofing, flooring, and more yourself.",
  keywords: ["DIY repair","home repair","plumbing","electrical","roofing","flooring","drywall","painting"],
  openGraph: { type: "website", siteName: "DIY Repair Guides", title: "DIY Repair Guides | Fix It Yourself", description: "Save thousands with expert DIY repair guides." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6600381860016497" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col font-mono">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#1A1A1A]/95 border-b-2 border-orange-600/30">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <span className="text-xl bg-orange-600 text-white w-10 h-10 rounded flex items-center justify-center font-black">🔧</span>
              <span className="font-black text-lg tracking-tight text-orange-100">
                DIY<span className="text-orange-500">REPAIR</span>
              </span>
            </a>
            <nav className="flex gap-6 text-sm font-bold tracking-wide">
              <a href="/" className="text-gray-400 hover:text-orange-400 transition-colors">HOME</a>
              <a href="/articles" className="text-gray-400 hover:text-orange-400 transition-colors">GUIDES</a>
              <a href="/#categories" className="text-gray-400 hover:text-orange-400 transition-colors">TOPICS</a>
            </nav>
            <SearchBar placeholder="Fix it yourself..." className="w-44" />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t-2 border-orange-600/20 bg-[#121212] py-10 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-orange-500 font-black text-lg mb-2">🔧 DIY REPAIR GUIDES</p>
            <p className="text-gray-600 text-sm mb-4">Professional-quality guides. Zero professional prices.</p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-orange-400">Privacy</a>
              <a href="/terms" className="hover:text-orange-400">Terms</a>
              <a href="/sitemap.xml" className="hover:text-orange-400">Sitemap</a>
            </div>
            <p className="text-gray-700 text-xs mt-6">© {new Date().getFullYear()} DIY Repair Guides</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

