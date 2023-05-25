import React from 'react'

const ButtonList = () => {
  const arr = ["All","Computer Science","mixes","music","Live","news","Comedy","sports","shows","albums"]
  return (
    <section>
      {arr.map((item,index)=>{
        return(
          <button className='w-fit border px-2 py-1 m-4 rounded-full bg-gray-100'key={index}>{item}</button>
        )
      })}

    </section>
  )
}

export default ButtonList