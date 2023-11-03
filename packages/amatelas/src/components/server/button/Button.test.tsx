import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  test('Should be rendered button', () => {
    render(<Button>TestButton</Button>)
    const testButton = screen.getByText('TestButton')
    expect(testButton).toBeInTheDocument()
  })
})
