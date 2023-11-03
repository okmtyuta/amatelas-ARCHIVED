import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'
import '@okmtyuta/awesome-css/reset.css'

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'demoText.en.long'
  }
}
export const Filled: Story = {
  args: {
    children: 'demoText.en.long',
    variant: 'filled',
    color: 'info'
  }
}
export const Outlined: Story = {
  args: {
    children: 'demoText.en.long',
    variant: 'outlined',
    color: 'info'
  }
}
