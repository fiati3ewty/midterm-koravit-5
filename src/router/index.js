import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/TodoPage';
import NotFound from '../pages/NotFound';
import ProtectRouters from './ProtectRouters';
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
        Component: ProtectRouters,
        children: [
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
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);

export default router;
