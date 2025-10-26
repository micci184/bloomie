'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function About() {
  return (
    <Section id="about">
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          About Section
        </h2>
        <p className="text-lg text-gray-light/80">
          Aboutセクションのコンテンツがここに入ります。
        </p>
      </Container>
    </Section>
  );
}

