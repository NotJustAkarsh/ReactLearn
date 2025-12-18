import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Akarsh" age="21" img="https://images.unsplash.com/photo-1761857352384-aaae23a714a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
      <Card user="Vansh" age="20" img="https://plus.unsplash.com/premium_photo-1746108793647-561bfeec0b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0N3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
    </div>
  )
}

export default App
