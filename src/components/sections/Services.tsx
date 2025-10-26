'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function Services() {
  return (
    <Section id="services">
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Services Section
        </h2>
        <p className="text-lg text-gray-light/80">
          Servicesセクションのコンテンツがここに入ります。
        </p>
      </Container>
    </Section>
  );
}

