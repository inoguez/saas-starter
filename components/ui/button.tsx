import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer',
  {
    variants: {
      variant: {
        default:
          '!bg-jade/60 hover:bg-jade/80 text-off-white shadow-lg  hover:shadow-jade/20 bg-gradient-to-r from-jet-black/10 to-jade text-off-white hover:from-jade/20 hover:to-jade/90 transition-all duration-200 shadow-lg hover:shadow-jade/25',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input text-off-white border-off-white hover:text-jade hover:border-jade',
        outlineSecondary:
          'text-jade border border-jade bg-jade/10 rounded-lg hover:bg-jade/20',
        secondary:
          'bg-off-white text-jet-black shadow-lg hover:shadow-off-white/20 hover:text-jade',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        accentOffWhiteText: 'text-off-white hover:text-jade',
        accentJetBlackText: 'text-jet-black hover:text-jade',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-xl px-3',
        lg: 'h-11 rounded-2xl px-8',
        icon: 'h-10 w-10',
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
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
