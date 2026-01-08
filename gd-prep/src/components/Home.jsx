import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-black'>
      <div className='intro  min-h-127.5 text-white flex flex-col md:flex-row justify-center items-center  gap-10'>
        <div className="tagline w-[50%]  roboto font-block ">
          <h1 className='text-[31px] indent-10'>Master Group Discussions with AI and Peers. Ace Your Interviews.</h1>
          <h1 className='font-[400]'>Prepare the Group discussion with the AI and Peer for your Interview, the compititive prepration.</h1>
          <div className='flex gap-8 mt-8'>
            <button className='px-8 rounded-4xl bg-[#028857] cursor-pointer font-[700] py-3 border-2'>Practice With AI</button>
            <button className='px-8 rounded-4xl bg-[#028857] cursor-pointer font-[700] py-3 border-2'>Practice With Peers</button>

          </div>
          <div className="feature">
            <ul className='list-disc mt-8 flex flex-col gap-2 text-gray-400 text-sm md:px-20'>
              <li><h1>Practice Group Discussions with AI</h1></li>
              <li><h1>Join Live Group Discussions with Peers</h1></li>
              <li><h1>Real Interview-Style GD Topics</h1></li>
              <li><h1>Instant Feedback on Content, Clarity & Confidence</h1></li>
              <li><h1>Session History & Progress Tracking</h1></li>
            </ul>
          </div>
        </div>
        <img width={350} className='max-w-[50%]  shadow-lg shadow-white' src="home.png" alt="" />
      </div>
      <div className='w-full h-[0.3px] border-1 border-gray-700'></div>
      <div className="working min-h-100">
          <div className='text-[31px] text-white roboto text-center'>How It Works</div>
          <div className="cards w-full text-white flex justify-center items-center gap-10 mt-10">
              <div className="hover:scale-110 duration-300 ease-in-out  card1 h-65 w-50 border-1 border-white shadow-md shadow-white">
                <div className="card1content flex flex-col gap-3">
                <img className='h-[157px] p-[13px]' src="card1.png" alt="" />
                <p className='roboto font-medium text-center '>Choose Mode (AI / Peers)</p>
                <p className='text-gray-500 pl-3 text-sm'>Practice with AI or join live peer discussions</p>
                </div>
              </div>
              <div className="hover:scale-110 duration-300 ease-in-out  card2 h-65 w-50 border-1 border-white shadow-md shadow-white">
                <div className="card1content flex flex-col gap-3">
                <img className='h-[157px] p-[13px]' src="card2.png" alt="" />
                <p className='roboto font-medium text-center '>Get Interview-Style Topic</p>
                <p className='text-gray-500 pl-3 text-sm'>Real GD topics used in placements</p>
                </div>
              </div>
              <div className="hover:scale-110 duration-300 ease-in-out  card3 h-65 w-50 border-1 border-white shadow-md shadow-white">
                <div className="card1content flex flex-col gap-3">
                <img className='h-[157px] p-[13px]' src="card3.png" alt="" />
                <p className='roboto font-medium text-center '>Discuss with Timer</p>
                <p className= 'pl-3 text-gray-500 text-sm'>Simulates real interview pressure</p>
                </div>
              </div>
              <div className="hover:scale-110 duration-300 ease-in-out  card4 h-65 w-50 border-1 border-white shadow-md shadow-white">
                <div className="card1content flex flex-col gap-3">
                <img className='h-[157px] p-[13px]' src="card4.png" alt="" />
                <p className='roboto font-medium text-center '>Get Instant Feedback & Score</p>
                <p className='pl-3 text-gray-500 text-sm'>Clarity, confidence analysis</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Home
