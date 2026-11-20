import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('отображает заголовок и навигацию', () => {
    render(<App />)
    expect(screen.getByText(/WordTrainer/i)).toBeTruthy()
    expect(screen.getByText(/Настройки/i)).toBeTruthy()
  })
})