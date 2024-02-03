import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/Root.jsx';
import ErrorPage from './error-page.jsx';
import TaskForm from './routes/TaskForm.jsx';
import Tasks from './routes/Tasks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/new",
        element: <TaskForm />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
