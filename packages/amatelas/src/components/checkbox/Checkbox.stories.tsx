import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import '@okmtyuta/awesome-css/reset.css'
import { demoText } from '@root/demo-text'

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: demoText.en.short
  }
}
