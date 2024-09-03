import React, { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Footer from './component/Footer.jsx'
import Advice from './component/Advice.jsx'


function App() {

  return (
    <div className='flex items-center justify-center h-fit'>
      <Advice />
      <Footer />
    </div>
  )
}

export default App
