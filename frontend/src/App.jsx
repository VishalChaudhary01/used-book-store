import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import FooterPart from './components/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <FooterPart />
    </div>
  )
}

export default App