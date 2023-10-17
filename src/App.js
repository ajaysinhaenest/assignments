import './index.css';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import InputField from './components/todo/InputField';
import Header from './components/Header';
import School from './components/students/School';
import Result from './components/students/Result';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <InputField />,
      },
      {
        path: '/school',
        element: <School />,
        children: [
          {
            path: ':rollNo',
            element: <Result />,
          },
        ],
      },
    ],
  },
]);

export default router;
