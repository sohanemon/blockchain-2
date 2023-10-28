'use client';

import { ComponentProps } from 'react';
import { cn } from '@sohanemon/utils';
import { motion, useMotionTemplate } from 'framer-motion';

import useMouseMove from '@/hooks/mouse-move';

export function Spotlight({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  const { handleMouseMove, mouseX, mouseY } = useMouseMove();
  return (
    <div
      className={cn('group', className)}
      {...props}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}
