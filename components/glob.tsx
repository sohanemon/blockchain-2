import { ComponentProps } from 'react';
import { cn } from '@sohanemon/utils';

import { Motion } from './motion';

type GlobProps = ComponentProps<typeof Motion>;

export function Glob({ className, ...props }: GlobProps) {
  return (
    <Motion
      {...props}
      animate={{ y: [-200, 250], x: [-120, 120] }}
      initial={{ y: 0, x: 0 }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 12 }}
      className={cn(
        'h-[440px] w-[440px] rounded-full bg-primary/50 blur-[200px]',
        className
      )}
    ></Motion>
  );
}
