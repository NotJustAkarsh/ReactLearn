import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)

  const [b, setB] = useState(0)

  function aChanging() {
    console.log("A is changed")
  }

  function bChanging() {
    console.log("B is Changed")
  }

  useEffect(function(){
    bChanging()
    console.log("Use Effect is running...")
  },[b])

  return (
    <div>
      <div>
        <h1>A is {a} </h1>
        <h1>B is {b} </h1>
      </div>
      <div>
        <button onClick={() => {
          setA(a + 1)
        }}>
          Change A</button>
        <button onClick={() => {
          setB(b - 1)
        }}>
          Change B</button>
      </div>

    </div>

  )
}

export default App
