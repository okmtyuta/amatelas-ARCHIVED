import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { MaterialTextField } from './MaterialTextfield'

describe('MaterialTextField', () => {
  test('Should be rendered text-field', () => {
    render(<MaterialTextField placeholder="text-field" />)
    const testInput = screen.getByRole('textbox')
    const testPlaceholder = screen.getByText('text-field')

    expect(testInput).toBeInTheDocument()
    expect(testPlaceholder).toBeInTheDocument()
  })
})
