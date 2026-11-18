import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <Link to="/">Главная</Link>
      <Link to="/study">Изучение</Link>
      <Link to="/progress">Прогресс</Link>
      <Link to="/settings">Настройки</Link>
    </nav>
  )
}