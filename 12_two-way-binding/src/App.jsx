import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted by", title);

    setTitle('')
  }
  
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }
      }>
        <input onChange={(e) => {
          setTitle(e.target.value)
        }
        } type="text" placeholder="Enter your Name" value={title}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
