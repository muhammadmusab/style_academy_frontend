import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const classes = cva('!leading-[1.46] font-medium', {
  variants: {
    level: {
      1: 'text-[0.875rem] sm:text-[0.9375rem] lg:text-base',
      2: 'text-[0.875rem] sm:text-[0.9375rem]',
      3: 'text-sm',
      4: 'text-[0.8125rem]',
      5: 'text-xs xl:text-base',
      6: 'text-xs md:text-sm xl:text-sm',
    },
  },
  defaultVariants: {
    level: 2,
  },
})

export type TTextProps<T extends React.ElementType> = VariantProps<typeof classes> &
  React.ComponentPropsWithoutRef<T> & {
    asChild?: Boolean
  }

export const Text = <T extends React.ElementType = 'p'>({
  level,
  className,
  children,
  asChild,
  ...rest
}: TTextProps<T>) => {
  const classNames = classes({ level, className })
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp className={classNames} {...rest}>
      {children}
    </Comp>
  )
}
