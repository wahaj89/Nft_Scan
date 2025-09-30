import React from 'react'
import AppBar from './Components/Golbal/AppBar'
import MainVeiw from './Components/Golbal/MainVeiw'

function App() {
  return (  
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <AppBar/>
        <MainVeiw/>
      
      </div>
    </>
  )
}

export default App
