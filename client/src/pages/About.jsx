import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className=" max-w-7xl mx-auto sm:mt-36 max-h-screen">
            <div className='flex sm:flex-row flex-col justify-between text-center '>
                <div className='sm:text-left sm:w-2/3'>
                    <h1 className="font-dm text-[#fff] text-medium text-[36px]">About Us</h1>
                    <p className="mt-2 font-dm text-slate-300 text-[14px] w-full ">Welcome to our app, where we harness the power of DALL-E,
                        a cutting-edge AI platform, to generate stunning images that captivate and inspire.
                        Our team of skilled designers and engineers work closely with
                        DALL-E to create custom visuals that are tailored to meet
                        the unique needs of our clients.  </p>
                        <p className="mt-2 font-dm text-slate-300 text-[14px] w-full ">With DALL-E's powerful
                        technology, we can generate images with incredible accuracy
                        and speed, while still maintaining the human touch that sets our work apart.
                        At our company, we're passionate about delivering exceptional
                        service and creating images that truly stand out.</p>
                        <p className="mt-2 font-dm text-slate-300 text-[14px] w-full ">Whether you're
                        looking to create custom designs, stunning graphics, or high-quality
                        photographs, we have the expertise and tools to bring your vision to life.
                        </p>

                </div>
            </div>


        </section>
    )
}

export default About