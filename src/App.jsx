import React, { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Footer from './component/Footer.jsx'
import Advice from './component/Advice.jsx'


function App() {

  return (
    /* dark grayish blue BG color */
    <div className='flex items-center text-center justify-center h-fit text-white 
    w-[450px] bg-[#323a49] p-8 rounded-xl sm:w-[360px]'> 
      <Advice />
      <Footer />
    </div>
  )
}

export default App
