import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'
import '@okmtyuta/awesome-css/reset.css'

const meta: Meta<typeof Textarea> = {
  title: 'components/Textarea',
  component: Textarea
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    placeholder: 'NAME',
    variant: 'standard'
  }
}
export const Outlined: Story = {
  args: {
    placeholder: 'NAME',
    variant: 'outlined'
  }
}
export const Filled: Story = {
  args: {
    placeholder: 'NAME',
    variant: 'filled'
  }
}
