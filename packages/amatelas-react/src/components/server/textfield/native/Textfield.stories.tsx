import type { Meta, StoryObj } from '@storybook/react'
import { Textfield } from './Textfield'
import '@okmtyuta/awesome-css/reset.css'

const meta: Meta<typeof Textfield> = {
  title: 'components/Textfield',
  component: Textfield
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
