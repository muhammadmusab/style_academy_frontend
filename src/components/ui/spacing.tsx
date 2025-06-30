
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'


// Use this component in other components like container,row,card etc along with asChild

const classes = cva('flex', {
  variants: {
    level: {
      0: '',
      1: 'gap-1',
      2: 'gap-1.5',
      3: 'gap-2',
      4: 'gap-2.5',
      5: 'gap-3',
      6: 'gap-2.5 sm:gap-3 lg:gap-4',
      7: 'gap-2.5 sm:gap-4 lg:gap-5',
      8: 'gap-3.5 sm:gap-5 lg:gap-6',
      9: 'gap-7',
      10: 'gap-4 sm:gap-6 lg:gap-8',
      11: 'gap-9',
      12: 'gap-10',
  
      // 1: 'space-y-1',
      // 2: 'space-y-1.5',
      // 3: 'space-y-2',
      // 4: 'space-y-2.5',
      // 5: 'space-y-3',
      // 6: 'space-y-3.5',
    },
    // direction: {
    //   row: 'flex-row',
    //   col: 'flex-col',
    // },
  },
  // compoundVariants: [
  //   {
  //     level: 1,
  //     direction: 'row',
  //     className: 'space-x-1',
  //   },
  //   {
  //     level: 2,
  //     direction: 'row',
  //     className: 'space-x-2',
  //   },
  //   {
  //     level: 3,
  //     direction: 'row',
  //     className: 'space-x-4',
  //   },
  //   {
  //     level: 4,
  //     direction: 'row',
  //     className: 'space-x-6',
  //   },
  //   {
  //     level: 5,
  //     direction: 'row',
  //     className: 'space-x-8',
  //   },
  //   {
  //     level: 6,
  //     direction: 'row',
  //     className: 'space-x-10',
  //   },
  //   {
  //     level: 1,
  //     direction: 'col',
  //     className: 'space-y-1',
  //   },
  //   {
  //     level: 2,
  //     direction: 'col',
  //     className: 'space-y-2',
  //   },
  //   {
  //     level: 3,
  //     direction: 'col',
  //     className: 'space-y-4',
  //   },
  //   {
  //     level: 4,
  //     direction: 'col',
  //     className: 'space-y-6',
  //   },
  //   {
  //     level: 5,
  //     direction: 'col',
  //     className: 'space-y-8',
  //   },
  //   {
  //     level: 6,
  //     direction: 'col',
  //     className: 'space-y-10',
  //   },
  // ],
  defaultVariants: {
    level: 1,
    // direction: 'col',
  },
})

export type TSpacingProps<T extends React.ElementType> = VariantProps<typeof classes> &
  React.ComponentPropsWithoutRef<T> & {
    asChild?: boolean
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
  }

export const Spacing = <T extends React.ElementType = 'div'>({
  asChild,
  children,
  className,
  level,
  direction,
  ...rest
}: TSpacingProps<T>) => {
  const classNames = cn(classes({ level }), 'flex-col', className)
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp {...rest} className={classNames}>
      {children}
    </Comp>
  )
}
