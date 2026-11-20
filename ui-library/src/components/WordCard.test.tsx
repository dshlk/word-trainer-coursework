import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import { WordCard } from './WordCard'

describe('WordCard', () => {
  test('отображает заглушку', () => {
    render(<WordCard />)
    expect(screen.getByText(/Заглушка/i)).toBeTruthy()
  })
})