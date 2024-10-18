import React from 'react'

export const NavBar = () => {
  return (
    <nav className=' flex justify-center my-6'>


      <ul className=' flex  flex-row  gap-10 md:gap-28 font-light  text-lg'>
        <a href="#about" className=' hover:opacity-80 hover:underline-offset-8 hover:underline hover:decoration-current/[.80]'> About </a>
        <a href="#professional_life" className=' hover:opacity-80 hover:underline-offset-8 hover:underline hover:decoration-current/[.80]'> Professional life </a>
        <a href="#projects" className=' hover:opacity-80 hover:underline-offset-8 hover:underline hover:decoration-current/[.80]'> Projects </a>
      </ul>
    </nav>
  )
}

