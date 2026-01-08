import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './component/Card';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-600 absolute text-xs top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading....</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='overflow-auto p-24 bg-black h-screen text-white'>
      <div className='flex h-[82%] flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex items-center justify-center gap-6 p-4'>
        <button onClick={() => {
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }
        } className='bg-amber-400 text-black rounded text-sm cursor-pointer active: scale-95 px-4 py-2'>Prev</button>
        Page {index}
        <button onClick={() => {
          setIndex(index+1)
          setUserData([])
        }
        } className='bg-amber-400 text-black rounded text-sm cursor-pointer active: scale-95 px-4 py-2'>Next</button>
      </div>

    </div>
  )
}

export default App
