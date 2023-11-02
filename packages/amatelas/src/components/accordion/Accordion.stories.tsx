import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'
import '@okmtyuta/awesome-css/reset.css'
import { demoText } from '@root/demo-text'

const meta: Meta<typeof Accordion> = {
  title: 'components/Accordion',
  component: Accordion
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    summary: 'SUMMARY',
    children: demoText.en.long
  }
}
