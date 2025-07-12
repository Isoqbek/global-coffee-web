// src/components/ui/heading.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva(
  'font-bold tracking-tight',
  {
    variants: {
      variant: {
        h1: 'font-serif text-4xl md:text-5xl lg:text-6xl text-brand-light',
        h2: 'font-sans text-3xl md:text-4xl uppercase border-b-2 border-brand-red pb-2',
        h3: 'font-sans text-2xl md:text-3xl font-semibold',
        h4: 'font-sans text-xl font-semibold',
      },
    },
    defaultVariants: {
      variant: 'h3',
    },
  }
);

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, as: Comp = 'h2', ...props }, ref) => {
    return (
      <Comp
        className={cn(headingVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };