import React from 'react'

const Cards = ({user}) => {
      // console.log(props)
  return (    
      <div className="bg-amber-50 rounded-2xl px-5 py-3 w-fit">
        <h1 className="text-4xl font-semibold">{user}</h1>
      </div>
    
  )
}

export default Cards
 