import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './views/Layout';
import Home from './views/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
