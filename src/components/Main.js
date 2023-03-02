import React from 'react'
import Browse from './Browse'
import Cards from './Cards'

const Main = () => {
  return (
    <div className='px-6 lg:px-12 pt-5'>
      {/* Browse */}
      <Browse />
      {/* Cards */}
      <Cards />
    </div>
  )
}

export default Main