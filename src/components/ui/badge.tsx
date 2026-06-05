import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border font-mono text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 transition-colors',
  {
    variants: {
      variant: {
        blog:     'text-[var(--amber)]    border-[var(--amber)]    bg-[var(--amber-dim)]',
        research: 'text-[var(--research)] border-[var(--research)] bg-[rgba(155,64,64,0.08)]',
        notes:    'text-[var(--notes)]    border-[var(--notes)]    bg-[rgba(58,122,122,0.08)]',
        projects: 'text-[var(--projects)] border-[var(--projects)] bg-[rgba(90,74,138,0.08)]',
        outline:  'text-[var(--text-2)]   border-[var(--border-2)] bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
