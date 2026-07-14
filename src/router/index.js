import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/TodoPage';
import { getAllTodo } from '../api/todoApi';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
      {
        path: '/register',
        Component: RegisterPage,
      },
      {
        path: '/todo',
        Component: TodoPage,
        loader: getAllTodo,
      },
    ],
  },
]);

export default router;
