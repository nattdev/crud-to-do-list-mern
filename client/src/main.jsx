import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/Root.jsx';
import ErrorPage from './error-page.jsx';
import HomePage from './pages/HomePage.jsx';
import TaskForm from './components/TaskForm.jsx';
import Tasks from './components/Tasks.jsx';
import { TaskContextProvider } from './components/TaskContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/new",
        element: <TaskForm />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/edit/:id",
        element: <TaskForm />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <RouterProvider router={router} />
    </TaskContextProvider>
  </React.StrictMode>,
)
