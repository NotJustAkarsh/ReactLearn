import React from 'react'

const Card = (props) => {

    console.log(props.age)
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.user}</h1>
      <p>Learning React is fun!</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
