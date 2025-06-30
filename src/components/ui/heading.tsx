import React, { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

type THeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  asChild?:boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6
  alt?: boolean
}

const Heading = forwardRef<HTMLHeadingElement, THeadingProps>(
  ({ children, className, level = 2,asChild, ...rest }, ref) => {
   
    const HeadingComponent = `h${level}` as const
    const Component = asChild ? Slot : HeadingComponent
  
    const classNames = cn(
      className,
    )
    return (
      <Component ref={ref} {...rest} className={classNames}>
        {children}
      </Component>
    )
  },
)

Heading.displayName = 'Heading'

export { Heading, type THeadingProps }
