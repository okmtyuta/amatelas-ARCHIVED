import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import '@okmtyuta/awesome-css/reset.css'
import { demoText } from '@root/demo-text'

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: demoText.en.long,
    open: true
  }
}
