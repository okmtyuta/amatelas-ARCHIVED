import type { Meta, StoryObj } from '@storybook/react'
import '@okmtyuta/awesome-css/reset.css'
import { Button } from '..'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'outlined'
  }
}
export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'filled'
  }
}
export const Standard: Story = {
  args: {
    variant: 'standard',
    children: 'standard'
  }
}
