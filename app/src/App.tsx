import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { StudyPage } from './pages/StudyPage'
import { ProgressPage } from './pages/ProgressPage'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', display: 'flex', gap: '20px', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Главная</Link>
        <Link to="/study">Изучение</Link>
        <Link to="/progress">Прогресс</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study" element={<StudyPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App