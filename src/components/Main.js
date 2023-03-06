import React from 'react'
import Browse from './Browse'
import Cards from './Cards'

const Main = () => {
  return (
    <div className='px-4 lg:px-6 pt-5'>
      {/* Browse */}
      <Browse />
      {/* Cards */}
      <Cards />
    </div>
  )
}

export default Main