import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import '@okmtyuta/awesome-css/reset.css'
import { demoText } from '@root/demo-text'

const meta: Meta<typeof Alert> = {
  title: 'components/Alert',
  component: Alert
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    summary: 'SUMMARY',
    children: demoText.en.long,
    variant: 'info'
  }
}
export const Danger: Story = {
  args: {
    summary: 'SUMMARY',
    children: demoText.en.long,
    variant: 'danger'
  }
}
export const Warning: Story = {
  args: {
    summary: 'SUMMARY',
    children: demoText.en.long,
    variant: 'warning'
  }
}
export const Success: Story = {
  args: {
    summary: 'SUMMARY',
    children: demoText.en.long,
    variant: 'success'
  }
}
