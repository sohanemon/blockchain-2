'use client';

import dynamic from 'next/dynamic';
import { cn } from '@sohanemon/utils';

import useNavToggle from '@/hooks/nav-toggle';

import { Motion } from './motion';

const CoinLib = dynamic(async () => import('./coinlib'));

export function Navbar() {
  const { hidden, leaved } = useNavToggle();

  return (
    <Motion
      animate={hidden ? 'top' : 'visible'}
      as={'header'}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={cn('sticky inset-x-0 top-0 z-40 bg-background', {
        'shadow-lg shadow-background/10  bg-background/50 backdrop-blur-md':
          leaved,
      })}
    >
      <CoinLib />
    </Motion>
  );
}
