import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Culture } from '@/components/sections/Culture';
import { Overview } from '@/components/sections/Overview';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Culture />
      <Overview />
      <Footer />
    </main>
  );
}

