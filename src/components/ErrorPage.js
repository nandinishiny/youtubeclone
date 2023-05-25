import React from 'react'
import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {
    const err = useRouteError();
  return (
    <div className='bg-aliceblue'>
        <h1>Ooops!</h1>
            <h2>Something went wrong !!!</h2>
            <h2>{`Status ${err.status} ${err.statusText}`}</h2>
            <p> {err.data}</p>


    </div>
  )
}

export default ErrorPage