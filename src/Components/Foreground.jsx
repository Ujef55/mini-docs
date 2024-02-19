import React from 'react'
import Cards from './Cards'

function Foreground() {
  return (
    <div className='fixed top-0 left-0 w-full z-[3] h-full bg-sky-600/20'>
        <Cards />
    </div>
  )
}

export default Foreground