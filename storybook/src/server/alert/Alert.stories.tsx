import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from '@okmtyuta/amatelas/server'
import '@okmtyuta/amatelas/style.css'

const meta: Meta<typeof Alert> = {
  title: 'server/Alert',
  component: Alert
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    label: 'Info',
    children: 'This is Info Message'
  }
}
export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning',
    children: 'This is Warning Message'
  }
}
export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Error',
    children: 'This is Error Message'
  }
}
export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success',
    children: 'This is Success Message'
  }
}
