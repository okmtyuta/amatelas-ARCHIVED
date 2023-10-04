import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'server/Button',
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
