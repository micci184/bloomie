'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hero Section
          </h1>
          <p className="text-lg md:text-xl text-gray-light/80 max-w-2xl">
            ヒーローセクションのコンテンツがここに入ります。
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}

