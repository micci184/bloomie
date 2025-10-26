'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <Section id="hero" className="min-h-[calc(100vh-90px)] flex items-center">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          {/* メイン見出し */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="block text-gray-900">Go Beyond</span>
              <span className="block text-gray-900">Boundaries</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="block text-brand"
              >
                Make it run
              </motion.span>
            </h1>
          </motion.div>

          {/* サブテキスト */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              私たちは、限界を超えた革新的なソリューションで、
              <br className="hidden md:block" />
              あなたのビジネスを次のステージへと導きます。
            </p>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="mt-12"
          >
            <motion.button
              className="inline-flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="お問い合わせ"
            >
              お問い合わせ
            </motion.button>
          </motion.div>

          {/* スクロールインジケーター */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
