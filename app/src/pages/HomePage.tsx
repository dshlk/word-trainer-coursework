import { Button } from '@my-app/ui-library'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>WordTrainer</h1>
      <p>Добро пожаловать в тренажер иностранных слов!</p>
      <Link to="/study">
        <Button>Начать изучение</Button>
      </Link>
    </div>
  )
}