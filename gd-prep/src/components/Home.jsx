import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-black'>   
        <div className='intro border-1 min-h-127.5 text-white flex flex-col md:flex-row justify-center items-center  gap-10'>
          <div className="tagline w-[50%]  roboto font-block ">
            <h1 className='text-[31px] indent-10'>Master Group Discussions with AI and Peers. Ace Your Interviews.</h1>
            <h1 className='font-[400]'>Prepare the Group discussion with the AI and Peer for your Interview, the compitative prepration.</h1>
            </div>
            <img width={350} className='max-w-[50%]  border-2' src="logo.png" alt="" />
        </div>
    </div>
  )
}

export default Home
