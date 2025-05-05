import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop'
import Blog from '../pages/blog/Blog'
import About from '../pages/aboutPages/AboutPages'
import Error from '../pages/error/Error'
import Search from '../pages/search/Search'
const Router = () => {
  return (
    <div>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/',
              element: <Home />
            },
            {
              path: '/shop',
              element: <Shop />
            },
            {
              path: '/blog',
              element: <Blog />
            },
            {
              path: '/about',
              element: <About />
            },
            {
              path: '/search',
              element: <Search />
            }
          ]
        },
        {
          path: '*',
          element: <Error />
        }
      ])}
    </div>
  )
}

export default Router
