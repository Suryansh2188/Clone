import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import StartPage1 from './components/StartPage1';
import StartPage2 from './components/StartPage2';
import Login from './components/LogIn';
import SignIn from './components/SignIn';
import Goals from './components/Goals';
import Home from './components/Home';
import Schedule from './components/Schedule';
const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage1 />,
  },
  {
    path: "/start_page2",
    element: <StartPage2 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign_in",
    element: <SignIn />,
  },
  {
    path: "/goals",
    element: <Goals />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      ></Toaster>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
