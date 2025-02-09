import * as React from 'react';

import { cn } from '@/lib/utils';
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-full border border-off-white/30 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-off-white/15 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-jade  disabled:cursor-not-allowed disabled:opacity-50 realita-box invalid:[&:not(:placeholder-shown):not(:focus)]:border-r-red',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
