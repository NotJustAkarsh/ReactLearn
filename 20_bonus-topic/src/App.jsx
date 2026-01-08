import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <h1>Theme is {theme}</h1>
    </div>
  )
}

export default App
