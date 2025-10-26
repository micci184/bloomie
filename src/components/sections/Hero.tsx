'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <Section id="hero" className="min-h-[calc(100vh-90px)] flex items-center">
      <Container>
        <div className="max-w-6xl mx-auto text-center">
          {/* メイン見出し */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6"
          >
            <h1 className="font-black leading-tight tracking-tight">
              <span className="block text-[110px] text-gray-900">
                Go Beyond Boundaries
              </span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="block text-[110px] text-brand"
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
            className="mt-8"
          >
            <p className="text-xl text-gray-600">
              境界を超え、テクノロジーで世界を回す。
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
