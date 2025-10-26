'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Culture', href: '#culture' },
  { name: 'Overview', href: '#overview' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();

  // スクロールに応じてヘッダーのスタイルを変更
  const headerHeight = useTransform(scrollY, [0, 100, 200], [72, 64, 56]);
  const headerBg = useTransform(
    scrollY,
    [0, 100, 200],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.8)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100, 200],
    ['0 0 0 rgba(0, 0, 0, 0)', '0 1px 3px rgba(0, 0, 0, 0.1)', '0 4px 6px rgba(0, 0, 0, 0.1)']
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  // テキスト色（白→黒）をスクロールで補間
  const textColor = useTransform(scrollY, [0, 100, 200], [
    'rgba(255,255,255,1)',
    'rgba(34,34,34,0.9)',
    'rgba(10,10,10,1)'
  ]);

  // IntersectionObserverで現在のセクションを追跡
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'culture', 'overview'];
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
          height: headerHeight,
          backgroundColor: headerBg,
          boxShadow: headerShadow,
          borderColor: useTransform(
            borderOpacity,
            (value) => `rgba(243, 244, 246, ${value})`
          ),
          color: textColor,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          {/* 中央寄せのピル型ナビ */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              className="flex items-center gap-6 md:gap-8 px-6 md:px-8 h-14 rounded-full border bg-white/80 shadow-lg backdrop-blur-xl"
              style={{
                borderColor: useTransform(borderOpacity, (v) => `rgba(226,232,240,${v})`),
              }}
            >
              {/* ロゴ */}
              <motion.a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#hero');
                }}
                className="text-lg md:text-xl font-extrabold text-brand tracking-wide"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                BLOOMIE
              </motion.a>

              {/* デスクトップナビゲーション */}
              <nav className="hidden md:flex items-center gap-8 text-[15px] text-black/60">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'transition-colors hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded px-2 py-1',
                      activeSection === item.href.slice(1) ? 'text-brand' : ''
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* ダミー: テーマトグル（視覚合わせ用） */}
              <div className="hidden md:flex items-center h-9 w-16 shrink-0 rounded-full bg-black/5 border border-black/10 px-1">
                <div className="h-7 w-7 rounded-full bg-white shadow" />
              </div>

              {/* CTAボタン */}
              <motion.button
                className="flex items-center gap-2 bg-brand text-white px-5 h-11 rounded-full font-semibold hover:bg-brand/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact
                <ArrowRight size={18} />
              </motion.button>

              {/* モバイルメニューボタン */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-black/70 hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded"
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
            <span className="text-xl font-bold text-base">BLOOMIE</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-base hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded"
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
                    : 'text-base/80 hover:bg-gray-light/50'
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
              Get Started
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

