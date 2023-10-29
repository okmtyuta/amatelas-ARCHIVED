import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { TextField } from './TextFiled'

describe('TextField', () => {
  test('Should be rendered text-field', () => {
    render(<TextField placeholder="text-field" />)
    const testInput = screen.getByRole('textbox')
    const testPlaceholder = screen.getByText('text-field')

    expect(testInput).toBeInTheDocument()
    expect(testPlaceholder).toBeInTheDocument()
  })
})
