import React from 'react'
import cv from '../static/Eduardo-Luna.pdf'
import me from '../static/me2.jpg'
import { TypedComponent } from '../components/TypedComponent'
import { SlideSkills } from '../components/SlideSkills'



export const About = () => {
    return (
        <section id='about'>
            <div className=' flex  mt-20 pt-20 flex-col items-center sm:flex-row sm:justify-center section justify-center'>
                <img src={me} alt="me" srcset="" className=' rounded-full  w-[220px] h-[220px]  sm:w-[300px]  sm:h-[300px]  md:w-[450px] md:h-[450px] ' />
                <div className='flex flex-col sm:pl-10 items-center sm:items-start mt-5 sm:justify-center max-w-[450px]'>
                    <h1 className=' text-5xl md:text-6xl font-thin'> Hi, I'm Eduardo! </h1>
                    <TypedComponent />
                    <p className='text-md text-center  sm:text-justify sm:px-0 px-6' >
                        +2 years of experience building web apps and doing what I love. I’m an engineer by profession and a full-stack developer by passion. I’m into sports and literature.
                    </p>
                    {/* Boton para descargar el CV y para Linkeding */}
                    <div className='my-5 flex gap-5'>
                        <a href={cv} download className='p-2 rounded-lg font-extrabold text-sm bg-orange-400 block w-[80px] text-center'>
                            CV
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-luna-meza-6b3651209" target="_blank" className='p-2 rounded-lg font-extrabold  text-sm bg-sky-600 block w-[80px] text-center'>
                            LinkedIn
                        </a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='flex flex-row gap-2 font-thin text-lg '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>  elunameza@gmail.com</span>

                        </p>
                        <p className='flex flex-row gap-2 font-thin text-lg '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <a href='https://w.app/U2o5OW' target='_blank' >  Santiago de Surco, Lima - Perú </a>

                        </p>
                    </div>
                </div>

            </div>
            {/* Zona Slide Automatico de Skills */}
            <SlideSkills />

        </section>

    )
}
