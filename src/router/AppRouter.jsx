
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import MainLayout from '../layouts/MainLayout'
import TodoListPage from '../pages/TodoListPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<MainLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='todo' element={<TodoListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter