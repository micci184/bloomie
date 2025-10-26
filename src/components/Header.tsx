'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Works', href: '#works' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();

  // スクロールに応じて影を変更
  const headerShadow = useTransform(
    scrollY,
    [0, 100, 200],
    [
      '0 0 0 rgba(0, 0, 0, 0)',
      '0 1px 3px rgba(0, 0, 0, 0.1)',
      '0 4px 6px rgba(0, 0, 0, 0.1)',
    ]
  );

  // IntersectionObserverで現在のセクションを追跡
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'process', 'works'];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // スムーススクロール
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        style={{
          boxShadow: headerShadow,
        }}
        className="fixed top-0 left-0 right-0 z-50 h-[90px] bg-[#F3F4F6] backdrop-blur-md transition-colors"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          {/* 中央寄せのピル型ナビ */}
          <div className="flex items-center justify-center h-full pt-5">
            <motion.div className="flex items-center gap-6 md:gap-8 px-8 md:px-10 h-16 rounded-full border border-gray-200 bg-white text-gray-700 shadow-[0_12px_36px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              {/* ロゴ */}
              <motion.a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#hero');
                }}
                className="text-[18px] md:text-[20px] font-extrabold text-brand tracking-wide"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                BLOOMIE
              </motion.a>

              {/* デスクトップナビゲーション */}
              <nav className="hidden md:flex items-center gap-8 text-[16px] text-gray-600">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'font-medium transition-colors hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded px-2 py-1',
                      activeSection === item.href.slice(1) ? 'text-brand' : ''
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* ダークモード切り替えスイッチ */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="hidden md:flex items-center h-10 w-[68px] shrink-0 rounded-full bg-gray-100 border border-gray-200 px-1 transition-all hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                aria-label="ダークモード切り替え"
              >
                <motion.div
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-white shadow"
                  animate={{
                    x: isDark ? 28 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  {isDark ? (
                    <Moon size={16} className="text-gray-700" />
                  ) : (
                    <Sun size={16} className="text-yellow-500" />
                  )}
                </motion.div>
              </button>

              {/* CTAボタン */}
              <motion.button
                className="flex items-center gap-2 bg-brand text-white px-6 h-12 rounded-full font-semibold hover:bg-brand/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact
                <ArrowRight size={18} />
              </motion.button>

              {/* モバイルメニューボタン */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded"
                aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* モバイルドロワーメニュー */}
      <motion.div
        initial={false}
        animate={{
          x: isOpen ? 0 : '100%',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 md:hidden"
      >
        <div className="flex flex-col h-full">
          {/* ドロワーヘッダー */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold text-brand">BLOOMIE</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-700 hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded"
              aria-label="メニューを閉じる"
            >
              <X size={24} />
            </button>
          </div>

          {/* ドロワーナビゲーション */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
                  activeSection === item.href.slice(1)
                    ? 'bg-brand/10 text-brand'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* ドロワーCTAボタン */}
          <div className="p-4 border-t">
            <motion.button
              className="w-full bg-brand text-white px-6 py-3 rounded-full font-medium hover:bg-brand/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* オーバーレイ */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </>
  );
}
