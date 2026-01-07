import React, { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)
    console.log(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask =[...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }
  
  return (
    <div className=' h-screen bg-black lg:flex text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }
      } className='flex flex-col lg:w-1/2 items-start gap-4 p-10 '>
        <h1 className='text-3xl mb-5 font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING  */}

        <input className='px-5  py-2 font-medium  border-2 w-full rounded' type="text" placeholder='Enter Notes Heading' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }
        } />

        {/* DUSRA INPUT FOR DETAILS */}
        <textarea className='px-5 font-medium py-2 h-32 border-2 w-full rounded' type="text" placeholder='Enter Details' value={details} onChange={(e) => {
          setDetails(e.target.value)
        }
        } />


        <button className='bg-white active:bg-gray-500 font-medium text-black w-full px-5 py-2 rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl mb-5 font-bold'>Recent Notes</h1>
        <div className='gap-5 flex flex-wrap'>
          {task.map(function (elem, idx) {

            return <div key={idx} className=' flex flex-col justify-between relative text-black px-4 bg-cover rounded-2xl h-52 w-40 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] '>
              <div className='mt-8'>
                <h3 className='leading-tight font-bold text-lg'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-gray-500  text-sm font-medium'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }
              }
               className=' mb-3 active:scale-95 bg-red-500 text-white font-bold rounded cursor-pointer'>
                Delete
              </button>

            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App