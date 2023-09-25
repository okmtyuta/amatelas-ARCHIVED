// Refer to https://mui.com/material-ui/react-text-field/

import { MarkdownLogoSVG } from '@root/svg'
import styles from './text-area.module.scss'
import { clsx } from 'clsx'
import { ComponentProps, ReactNode } from 'react'

type Variant = 'outlined' | 'filled' | 'standard'

type DefaultTextAreaProps = ComponentProps<'textarea'>
interface TextFiledProps extends DefaultTextAreaProps {
  variant?: Variant
  helper?: ReactNode
  markdownable?: boolean
}

const getTextAreaVariantClass = (variant?: Variant) => {
  if (variant) {
    return styles[`${variant}-text-area`]
  }

  return styles['outlined-text-area']
}
const getPlaceholder = (placeholder?: string, required?: boolean) => {
  if (required) {
    return `${placeholder}*`
  }

  return placeholder
}
const getIsOutlined = (variant?: Variant) => {
  if (!variant) {
    return true
  }
  if (variant === 'outlined') {
    return true
  }

  return false
}

export const TextArea = ({
  variant,
  helper,
  markdownable,
  ...props
}: TextFiledProps) => {
  const textAreaVariantClass = getTextAreaVariantClass(variant)
  const placeholder = getPlaceholder(props.placeholder, props.required)
  const isOutlined = getIsOutlined(variant)

  return (
    <div className={styles['text-area']}>
      <div
        className={clsx(
          styles['base-text-area'],
          textAreaVariantClass,
          props.className
        )}
      >
        <textarea {...props} placeholder=" " className={styles['input']} />
        <label className={styles['placeholder']}>{placeholder}</label>
        {isOutlined ? (
          <span className={styles['placeholder-background']}>
            {placeholder}
          </span>
        ) : null}
      </div>
      <div className={styles['helper']}>
        {helper ? <div className={styles['user-helper']}>{helper}</div> : null}
        {markdownable ? (
          <div className={styles['markdownable']}>
            <MarkdownLogoSVG className={styles['markdown-logo']} width={22} />{' '}
            <div>Supported</div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
