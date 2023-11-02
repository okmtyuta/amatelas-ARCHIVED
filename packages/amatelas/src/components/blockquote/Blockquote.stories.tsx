import type { Meta, StoryObj } from '@storybook/react'
import { Blockquote } from './Blockquote'
import '@okmtyuta/awesome-css/reset.css'
import { demoText } from '@root/demo-text'

const meta: Meta<typeof Blockquote> = {
  title: 'components/Blockquote',
  component: Blockquote
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: demoText.en.long
  }
}
