import { Routes, Route, Navigate } from 'react-router'
import Home from '../pages/Home'
import RegisterPage from '../pages/RegisterPage'

function MainRouter () {
  return (
    <Routes>
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
      <Route index path='/' element={<Home />} />
      <Route path='/register' element={<RegisterPage />} />
      
    </Routes>
  )
}

export default MainRouter
