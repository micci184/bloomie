'use client';

import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer id="footer" className="py-12 border-t border-gray-light/20">
      <Container>
        <div className="text-center">
          <p className="text-gray-light/60">
            © 2025 Bloomie. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

