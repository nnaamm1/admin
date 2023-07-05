import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import PostManagement from './pages/PostManagement'
import Setting from './pages/Setting'
import Subcription from './pages/Subcription'
import Revenue from './pages/Revenue'
import Home from './pages/Home'

export const routes = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'subcription',
        element: <Subcription />
      },
      {
        path: 'revenue',
        element: <Revenue />
      }
    ]
  },
  {
    name: 'Posts Management',
    path: 'posts-management',
    element: <PostManagement />
  },
  {
    name: 'Settings',
    path: 'settings',
    element: <Setting />
  }
]

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/admin' element={<Layout />}>
        {routes.map((route) =>
          route?.children?.length ? (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children.map((childRoute) => (
                <Route
                  key={childRoute.path}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
            </Route>
          ) : (
            <Route key={route.path} path={route.path} element={route.element} />
          )
        )}
      </Route>
    </Routes>
  )
}

export default App
