'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function Overview() {
  return (
    <Section id="overview">
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Overview Section
        </h2>
        <p className="text-lg text-gray-light/80">
          Overviewセクションのコンテンツがここに入ります。
        </p>
      </Container>
    </Section>
  );
}

