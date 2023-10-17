import { ComponentProps } from 'react'
import styles from './modal.module.scss'
import clsx from 'clsx'

type DefaultDivProps = ComponentProps<'div'>
type ModalProps = {
  open?: boolean
  shade?: boolean
} & DefaultDivProps

export const Modal = ({ open, shade, ...props }: ModalProps) => {
  return (
    <div
      {...props}
      className={clsx({
        [styles['modal']]: true,
        [styles['open']]: open,
        [styles['close']]: !open
      })}
    >
      <div
        className={clsx({
          [styles['modal-content']]: true,
          [styles['shade']]: shade
        })}
      >
        {props.children}
      </div>
    </div>
  )
}
