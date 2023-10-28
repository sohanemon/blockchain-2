import Link from 'next/link';
import Img from '@sohanemon/next-image';

import { P } from '@/components/ui/text';
import { Motion } from '@/components/motion';

export default function Page() {
  return (
    <section>
      <div className="container py-10">
        <h1 className="my-10 text-center text-5xl font-bold">Connect Wallet</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {data.map((_, idx) => (
            <Motion
              key={_}
              className="overflow-hidden rounded-lg  bg-gradient-to-br from-primary/30 to-primary p-0.5 drop-shadow-2xl"
              initial="bottom"
              viewport={{ once: true }}
              transition={{
                delay: 0.05 * idx,
                ease: 'easeInOut',
              }}
            >
              <Link
                className="text-center font-bold md:text-xl "
                href={'/form'}
              >
                <Motion
                  className="flex h-full flex-col items-center rounded-md bg-white px-10 py-7 "
                  whileHover={{ y: -2, x: 2 }}
                  whileTap={{
                    scale: [1, 0],
                    opacity: [1, 0],
                    borderRadius: '100%',
                  }}
                >
                  <Img
                    className="rounded-full"
                    src={`/assets/wallets/asset ${idx}.png`}
                  />
                  <P className="mt-2 line-clamp-4 text-center text-xs font-medium text-background md:mt-5 md:text-[15px] ">
                    {_}
                  </P>
                </Motion>
              </Link>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  'MetaMask',
  'Trust',
  'Argent',
  'Atomic',
  'Saitamask',
  'Terra',
  'Bitpay',
  'Maiar',
  'MyKey',
  'Atwallet',
  'Authereum',
  'Bitfrost',
  'Coinbase',
  'Coinomi',
  "D'Cent",
  'Easypocket',
  'Ledger',
  'Coolwallet',
  'CybavoWallet',
  'Coin98',
  'Harmony',
  'PeakDefi',
  'GridPlus',
  'VIA',
  'Imtoken',
  'Infinito',
  'Infinity',
  'kardachain',
  'keplr',
  'Midas',
  'Morixwallet',
  'Midas',
  'Nash',
  'Onto',
  'Ownbit',
  'Pillar',
  'Rainbow',
  'Safepal',
  'Sollet',
  'Spark',
  'Spatium',
  'Tokenary',
  'Tokenpocket',
  'Tomo',
  'Torus',
  'Coinbase',
  'XDC',
  'Wallet.io',
  'Walleth',
  'Zelcore',
  'Phantom',
  'Exodus',
];
