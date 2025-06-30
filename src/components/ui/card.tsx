import React, { ElementType } from 'react'
import { Spacing, TSpacingProps } from './spacing'

import { Heading, THeadingProps } from './heading'
import { cn } from '@/lib/utils'

export type TCardProps<T extends ElementType> = TSpacingProps<T> & {
  applyShadow?: boolean
}

export const CardHeading = ({ className, ...rest }: THeadingProps) => (
  <Heading className={cn('mb-4', className)} level={4} {...rest} />
)

export const Card = <T extends ElementType>({
  className,
  applyShadow,
  children,
  ...rest
}: TCardProps<T>) => {
  return (
    <Spacing
      className={cn('p-4 sm:p-5 md:p-6 border border-border rounded-lg bg-white', applyShadow ? 'shadow-1' : '', className)}
      {...rest}
    >
      {children}
    </Spacing>
  )
}
