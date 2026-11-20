import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  test('отображает заглушку', () => {
    render(<ProgressBar />)
    expect(screen.getByText(/Заглушка/i)).toBeTruthy()
  })
})