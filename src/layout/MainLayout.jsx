import React from 'react'
import { NavBar } from '../components/NavBar'
import { About } from '../views/About'
import { Experience } from '../views/Experience'
import { Projects } from '../views/Projects'
import ScrollToTop from "react-scroll-to-top";
export const MainLayout = () => {
  return (
    <div className=' container mx-auto '>
      {/* Navegador */}
      <NavBar />
      {/* Zona de About */}
      <About />

      {/* Zona de Experiencia */}
      <Experience />
      {/* Zona de Proyectos */}
      <Projects />
      <ScrollToTop smooth style={{
        backgroundColor: '#243642',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100

      }}
        component={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        } />

    </div>
  )
}
