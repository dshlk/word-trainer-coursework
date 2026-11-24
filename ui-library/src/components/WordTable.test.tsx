import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import { WordTable } from './WordTable'

describe('WordTable', () => {
  test('отображает заглушку', () => {
    render(<WordTable />)
    expect(screen.getByText(/Заглушка/i)).toBeTruthy()
  })
})