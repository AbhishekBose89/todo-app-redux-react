import AuthStatus from './AuthStatus';
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <div className='main-container'>
      <AuthStatus />
      <header className="app-title">
        <h2>Todo Application </h2>
      </header>

      <Outlet />
    </div>
  )
}

export default Layout