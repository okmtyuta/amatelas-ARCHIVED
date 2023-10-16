import { clsx } from 'clsx'
import styles from './flex.module.scss'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type Gap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Direction = 'column' | 'row'
type Justify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
type Align =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
  | 'normal'

export type ButtonProps<T extends ElementType> = {
  as?: T
  direction?: Direction
  gap?: Gap
  align?: Align
  justify?: Justify
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

export const Flex = <T extends ElementType = 'button'>({
  as,
  direction,
  gap,
  justify,
  align,
  ...props
}: ButtonProps<T>) => {
  const _Exterior = as ?? 'button'

  return (
    <_Exterior
      {...props}
      className={clsx({
        [styles['flex']]: true,

        [styles['column']]: direction === 'column' || !direction,
        [styles['row']]: direction === 'row',

        [styles['gap-xs']]: gap === 'xs',
        [styles['gap-sm']]: gap === 'sm',
        [styles['gap-md']]: gap === 'md' || !gap,
        [styles['gap-lg']]: gap === 'lg',
        [styles['gap-xl']]: gap === 'xl',

        [styles['justify-space-evenly']]:
          justify === 'space-between' || !justify,
        [styles['justify-center']]: justify === 'center',
        [styles['justify-flex-start']]: justify === 'flex-start',
        [styles['justify-flex-end']]: justify === 'flex-end',
        [styles['justify-space-between']]: justify === 'space-between',
        [styles['justify-space-around']]: justify === 'space-around',

        [styles['align-normal']]: align === 'normal' || !align,
        [styles['align-center']]: align === 'center',
        [styles['align-flex-start']]: align === 'flex-start',
        [styles['align-flex-end']]: align === 'flex-end',
        [styles['align-stretch']]: align === 'stretch',
        [styles['align-baseline']]: align === 'baseline',

        [props.className]: true
      })}
    >
      {props.children}
    </_Exterior>
  )
}
