import { describe, test, expect, jest } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  test('отображает текст', () => {
    render(<Button>Тест</Button>)
    expect(screen.getByText('Тест')).toBeTruthy()
  })

  test('вызывает onClick при клике', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Кнопка</Button>)
    fireEvent.click(screen.getByText('Кнопка'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('отображается в варианте secondary', () => {
    render(<Button variant="secondary">Кнопка 2</Button>)
    expect(screen.getByText('Кнопка 2')).toBeTruthy()
  })
})