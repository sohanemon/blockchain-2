import Link from 'next/link';
import Img from '@sohanemon/next-image';

import { Button } from '@/components/ui/button';
import { Glob } from '@/components/glob';
import { Motion } from '@/components/motion';
import { TextReveal } from '@/components/text-reveal';

export default function Hero() {
  return (
    <section className="container grid grid-cols-1 items-center  md:grid-cols-2">
      <Motion
        animate={{ y: [-50, 50] }}
        className="md:order-last"
        initial={{ y: 0 }}
        transition={{
          repeat: Infinity,
          duration: 11,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      >
        <Img
          inject
          className="origin-left  md:scale-150"
          src="/public/assets/hero.svg"
        />
      </Motion>
      <Glob className="absolute left-full top-full" />
      <div className="relative py-20">
        <Glob className="absolute right-full top-0" />
        <h1 className="font-bold" style={{ fontSize: 'clamp(40px,5vw,56px)' }}>
          Blockchain + Binance
        </h1>
        <TextReveal className="my-4 text-xl leading-9 max-lg:w-full">
          The Upside platform offers authentic and uniquely owned digital
          artwork, facilitated by blockchain technology. It utilizes an open,
          decentralized protocol to connect various noncustodial wallets
          securely. Unlike an app, it&apos;s a protocol enabling remote issue
          resolution with wallet representatives through an online server. This
          service includes a chat interface with an AI robot for efficient issue
          resolution without human intervention.
        </TextReveal>
        <br />
        <Link href={'/dapps'}>
          <Button>Connect Wallet</Button>
        </Link>
      </div>
    </section>
  );
}
