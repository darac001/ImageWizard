import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo,logo2 } from './assets';
import { Home, CreatePost,About,EditImage } from './pages';
import { IoCreateOutline,IoPeopleOutline,IoInformationCircleOutline } from "react-icons/io5";
import useMediaQuery from "./hooks/useMediaQuery";

const App = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <BrowserRouter>
      {!isDesktop && (
        <header className="w-full mx-auto flex justify-between px-5 bg-[#080b16] border-b border-b-slate-800/50">
          <div className='py-2'>
            <Link to="/">
              <img src={logo2} alt="logo" className="w-24 py-2 object-contain" />
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <Link to="/" className="font-dm px-4
             text-[#e9eef8] text-opacity-90 text-[16px] 
             border-b-[#e6ebf4]">
              <IoPeopleOutline className='text-[#95B4F0] text-[22px]' />
            </Link>
            <Link to="/create-post" className="font-dm
             text-[#e9eef8] text-opacity-90 text-[16px] 
             border-b-[#e6ebf4]">
              <IoCreateOutline className='text-[#95B4F0] text-[22px]' />
            </Link>
          </div>
        </header>)}

      <div className='grid grid-cols-5'>
        {isDesktop && (

          <header className="w-full min-w-[300px] mx-auto justify-start bg-[#080b16] sm:px-8 px-8 py-4 border-b border-b-[#e6ebf4]">
            <div className='py-4'>
              <Link to="/">
                <img src={logo} alt="logo" className="sm:w-36 w-40 object-contain" />
              </Link>
            </div>
            <div className='py-3 w-3/4'>
              <Link to="/" className="font-dm flex items-center p-2
             py-1 mx-auto text-[#e9eef8] hover:bg-[#172B51]/50 text-opacity-90 text-[16px] 
             border-b-[#e6ebf4] rounded-md">
                <IoPeopleOutline className='text-[#95B4F0] text-[22px] mr-4' /> Community Showcase</Link>
            </div>

            <div className='py-1 w-3/4'>
              <Link to="/create-post" className="font-dm flex items-center w-full p-2
             py-1 mx-auto text-[#e9eef8] hover:bg-[#172B51]/50  text-opacity-90 text-[16px] 
             border-b-[#e6ebf4] rounded-md">
                <IoCreateOutline className='text-[#95B4F0] text-[22px] mr-4' /> Create New</Link>
            </div>
            <hr className='w-3/4 border-slate-800/50 border-b my-4' />
            <div className='py-1 w-3/4'>
              <Link to="/about" className="font-dm flex items-center w-full p-2
             py-1 mx-auto text-[#c0d0f1] hover:bg-[#172B51]/50  text-opacity-90 text-[16px] 
             border-b-[#e6ebf4] rounded-md">
                <IoInformationCircleOutline className='text-[#5a7dc2] text-[22px] mr-4' /> About</Link>
            </div>
            <div className='py-1 w-3/4'>
              <Link to="/edit-image" className="font-dm flex items-center w-full p-2
             py-1 mx-auto text-[#c0d0f1] hover:bg-[#172B51]/50  text-opacity-90 text-[16px] 
             border-b-[#e6ebf4] rounded-md">
                <IoInformationCircleOutline className='text-[#5a7dc2] text-[22px] mr-4' /> Edit</Link>
            </div>
          </header>
        )}


        <main className="sm:pr-8 p-2 sm:col-span-4 col-span-5 py-8 w-full bg-[#080b16] min-h-[calc(100vh)] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/about" element={<About />} />
            <Route path="/edit-image" element={<EditImage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
