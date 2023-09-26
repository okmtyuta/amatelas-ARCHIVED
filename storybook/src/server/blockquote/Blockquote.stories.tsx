import type { Meta, StoryObj } from '@storybook/react'

import { Blockquote } from '@okmtyuta/amatelas/server'
import '@okmtyuta/amatelas/style.css'

const meta: Meta<typeof Blockquote> = {
  title: 'server/Blockquote',
  component: Blockquote
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'quoted content'
  }
}
