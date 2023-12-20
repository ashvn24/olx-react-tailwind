import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Posts from './Posts'
import Footer from './Footer'

function Home() {
  return (
    <div className='bg-slate-300'>
      <Navbar/>
      <Banner/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default Home
