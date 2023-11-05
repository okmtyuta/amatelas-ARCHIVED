import { ComponentProps, useId } from 'react'
import { DangerousSVG, DoneSVG } from '@root/svg'
import clsx from 'clsx'

import '@okmtyuta/amatelas-theme/color.css'
import '@okmtyuta/amatelas-css/amatelas-checkbox.css'

type DefaultFieldsetProps = ComponentProps<'fieldset'>
type CheckboxGroupProps = DefaultFieldsetProps

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  return <fieldset {...props} />
}

type DefaultInputProps = ComponentProps<'input'>
type CheckboxProps = DefaultInputProps

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  const _id = useId()
  return (
    <label htmlFor={_id} className="amatelas-checkbox">
      <input {...props} className="checkbox-input" id={_id} type="checkbox" />
      <span className={clsx('checked', 'marker')}>
        <DoneSVG />
      </span>
      <span className={clsx('unchecked', 'marker')}>
        <DangerousSVG />
      </span>

      <span className="detail">{children}</span>
    </label>
  )
}
