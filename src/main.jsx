import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import Header from './component/Header/Header.jsx';
import Home from './component/Home/Home.jsx';
import Frist from './component/Frist/Frist.jsx';
import Friends from './component/Friends/Friends.jsx';
import Friend from './component/Friend/Friend.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])
const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <Frist></Frist>
    },
    {
      path: '/friend',
      element: <Friends></Friends>,
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
      path: '/friend/:id',
      element: <Friend></Friend>,
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path:'*',
      element:<div>44444044444</div>
    }
  ]

}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
