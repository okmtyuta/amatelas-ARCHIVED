import { Switch, Textarea } from '@okmtyuta/amatelas/server'
import '../../reset.css'
import { ComponentProps, useState } from 'react'
import { clsx } from 'clsx'

import styles from './markdown-textarea.module.scss'
import { Markdown } from '../..'

type DefaultTextareaProps = ComponentProps<typeof Textarea>
type MarkdownTextareaProps = DefaultTextareaProps

export const MarkdownTextarea = ({ ...props }: MarkdownTextareaProps) => {
  const [preview, setPreview] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  return (
    <div>
      <Textarea
        {...props}
        className={clsx({
          [styles['hide']]: !preview
        })}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <Markdown
        className={clsx({
          [styles['hide']]: preview
        })}
      >
        {text}
      </Markdown>
      <Switch
        onChange={() => {
          setPreview((current) => !current)
          console.log(preview)
        }}
      />
    </div>
  )
}
