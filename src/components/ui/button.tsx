import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-mono text-[11px] tracking-[0.1em] uppercase transition-all disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border border-[var(--border-2)] text-[var(--text-2)] hover:border-[var(--amber)] hover:text-[var(--amber)] hover:bg-[var(--amber-dim)]',
        ghost:   'text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface)]',
        icon:    'text-[var(--text-2)] hover:text-[var(--text)]',
      },
      size: {
        default: 'px-[18px] py-[8px]',
        sm:      'px-[12px] py-[6px]',
        icon:    'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
