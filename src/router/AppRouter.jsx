
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import MainLayout from '../layouts/MainLayout'
import PostPage from '../pages/PostPage'
import TodoListPage from '../pages/TodoListPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<MainLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='todo' element={<TodoListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter