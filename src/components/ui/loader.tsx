import React, { ComponentPropsWithoutRef } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const classes = cva(['animate-spin h-5 w-5 block rounded-full border-[5px]'], {
  variants: {
    variant: {
      primary: 'border-primary border-b-primary-foreground',
      white: 'border-white/60 border-b-white/20',
    },
    size:{
      sm:'h-5 w-5',
      md:'h-10 w-100',
      lg:'h-16 w-16'
    }
  },
  defaultVariants: {
    variant: 'white',
    size:'sm'
  },
})
export type TLoaderProps = ComponentPropsWithoutRef<'span'> & VariantProps<typeof classes>

export const Loader = ({ className, variant,size }: TLoaderProps) => {
  return (
    <span
      className={cn(
        'animate-spin  block rounded-full mx-auto',
        classes({ variant,size }),
        className,
      )}
    ></span>
  )
}
