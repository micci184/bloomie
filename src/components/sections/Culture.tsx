'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function Culture() {
  return (
    <Section id="culture">
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Culture Section
        </h2>
        <p className="text-lg text-gray-light/80">
          Cultureセクションのコンテンツがここに入ります。
        </p>
      </Container>
    </Section>
  );
}

