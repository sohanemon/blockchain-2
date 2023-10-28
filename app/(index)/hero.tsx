import Image from 'next/image';
import Link from 'next/link';

import { TextReveal } from '@/components/text-reveal';

export default function Hero() {
  return (
    <section className="container">
      <div className="relative py-20">
        <Image
          alt="hero"
          className="absolute inset-0 my-auto ml-auto max-lg:hidden"
          height={600}
          src={'/assets/hero-img.png'}
          width={600}
        />
        <h1 className="" style={{ fontSize: 'clamp(40px,5vw,56px)' }}>
          Blockchain + Binance
        </h1>
        <TextReveal className="my-4 w-1/2 text-xl leading-9 max-lg:w-full">
          The Upside platform offers authentic and uniquely owned digital
          artwork, facilitated by blockchain technology. It utilizes an open,
          decentralized protocol to connect various noncustodial wallets
          securely. Unlike an app, it&apos;s a protocol enabling remote issue
          resolution with wallet representatives through an online server. This
          service includes a chat interface with an AI robot for efficient issue
          resolution without human intervention.
        </TextReveal>
        <Link href={'/dapps'}>
          <button className="rounded-lg bg-primary px-5 py-2 transition-all hover:bg-primary/70">
            Connect Wallet
          </button>
        </Link>
      </div>
    </section>
  );
}
