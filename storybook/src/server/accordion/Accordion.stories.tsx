import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from '@okmtyuta/amatelas/server'
import '@okmtyuta/amatelas/style.css'

const meta: Meta<typeof Accordion> = {
  title: 'server/Accordion',
  component: Accordion
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    summary: 'summary text',
    children: 'detail content'
  }
}
