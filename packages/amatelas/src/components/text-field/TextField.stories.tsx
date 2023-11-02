import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextFiled'
import '@okmtyuta/awesome-css/reset.css'

const meta: Meta<typeof TextField> = {
  title: 'components/TextField',
  component: TextField
}

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'outlined'
  }
}
export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'filled'
  }
}
export const Standard: Story = {
  args: {
    variant: 'standard',
    placeholder: 'standard'
  }
}
