import dynamic from 'next/dynamic';

const Selection = dynamic(async () => import('@/components/selection'));

const Hero = dynamic(async () => import('./hero'));

export default async function IndexPage() {
  return (
    <section>
      <Hero />
      <Selection />
    </section>
  );
}
