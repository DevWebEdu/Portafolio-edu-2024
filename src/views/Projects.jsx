import React from 'react'
import devstagram from '../static/desvtagram.png'
import quiosco from '../static/quiosco.png'
import feelingboard from '../static/feelingboard.png'
export const Projects = () => {
  return (
    <section id="projects" className='mb-40'>
      <h2 className='font-light text-5xl text-center mb-28  '> Projects </h2>
      <div class="flex flex-col gap-10 px-4 sm:px-0   ">
        {/* image-container */}
        <div className=' w-full h-auto bg-[#243642] flex flex-col md:flex-row p-5 md:p-10 gap-2 rounded-md'>
          <div className="relative  w-full  md:w-3/6  ">
            {/* imagen-overlay */}
            <div className='absolute top-0 left-0 w-full h-full flex gap-8 items-center justify-center  opacity-0 hover:opacity-100 hover:backdrop-blur-2xl transition-all duration-500 ease-in-out'>
              {/* image-button */}
              <a href='https://wuccehe.mnz.dom.my.id/login' target="_blank" className='hover:cursor-pointer bg-slate-900  rounded-lg py-2 px-5 hover:bg-slate-800 transition-all duration-500 ease-in-out'>Demo</a>
              <a href='https://github.com/DevWebEdu/Desarrollador_Instagram' target="_blank" className='hover:cursor-pointer bg-slate-900  rounded-lg py-2 px-5 hover:bg-slate-800 transition-all duration-500 ease-in-out'>Source</a>
            </div>
            {/*  image */}
            <img src={devstagram} alt="" className='block h-full object-cover' />
          </div>
          <div className=' h-full  w-full md:w-3/6 md:p-10'>
            <h2 className=' text-4xl md:text-6xl font-thin  w-full mt-5 text-center md:text-left'>
              Red Social
            </h2>
            <div className='flex md:flex-col w-full object-fill gap-1 '>
              <div className='mt-5'>
                <h4 className="font-thin text-lg sm:text-2xl text-center md:text-left">Funcionalidades</h4>
                <div className=' flex flex-row flex-wrap mt-2 gap-1 md:justify-start justify-evenly'>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >CRUD</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Subida y descarga de archivos</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Comentarios</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Likes</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Notificaciones</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Login</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Registro</span>
                </div>
              </div>
              <div className='mt-5'>
                <h4 className="font-thin text-lg sm:text-2xl md:text-left  text-center">Herramientas</h4>
                <div className=' flex flex-row flex-wrap mt-2 gap-3  md:justify-start justify-evenly'>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Laravel</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Mysql</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Tailwind</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >DomCloud</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Livewire</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Laravel/Sanctum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className=' w-full h-auto bg-[#243642] flex flex-col-reverse md:flex-row p-5 md:p-10  gap-2 rounded-md'>
        <div className=' h-full  w-full md:w-3/6 p-2 md:p-10'>
            <h2 className=' text-4xl md:text-6xl font-thin  w-full md:text-right text-center'>
              Quiosco - Market
            </h2>
            <div className='flex md:flex-col w-full   gap-1 '>
              <div className='mt-5'>
                <h4 className="font-thin text-lg sm:text-2xl md:text-right text-center">Funcionalidades</h4>
                <div className=' flex flex-row flex-wrap mt-2 gap-3 justify-evenly sm:justify-end '>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >CRUD</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Dashboard Administrativo</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Venta de Productos</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Gestion de Ordenes</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Notificaciones</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Login</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Registro</span>
                </div>
              </div>
              <div className='mt-5'>
                <h4 className="font-thin text-lg sm:text-2xl md:text-right text-center">Herramientas</h4>
                <div className=' flex flex-row flex-wrap mt-2 gap-3  md:justify-end justify-evenly '>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Laravel</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Mysql</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Tailwind</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Vercel</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >ReactJs</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >AxiosJs</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Api Rest</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Railway</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative  w-full  md:w-3/6  ">
            {/* imagen-overlay */}
            <div className='absolute top-0 left-0 w-full h-full flex gap-8 items-center justify-center  opacity-0 hover:opacity-100  hover:backdrop-blur-2xl transition-all duration-500 ease-in-out'>
              {/* image-button */}
              <a href='https://react-quiosco-iota.vercel.app/' target='_blank' className='hover:cursor-pointer bg-slate-900  rounded-lg text-xs md:text-base  py-2 px-2 md:px-5 hover:bg-slate-800 transition-all duration-500 ease-in-out'>Demo</a>
              <a  href='https://github.com/DevWebEdu/quiosco_laravel' target='_blank' className='hover:cursor-pointer bg-slate-900 text-xs md:text-base rounded-lg py-2 px-2 md:px-5 hover:bg-slate-800 transition-all duration-500 ease-in-out'>Back-End | Source</a>
              <a  href='https://github.com/DevWebEdu/react_quiosco'  target='_blank' className='hover:cursor-pointer bg-slate-900 text-xs md:text-base rounded-lg py-2 px-2 md:px-5 hover:bg-slate-800 transition-all duration-500 ease-in-out'>Front-End | Source</a>
            </div>
            {/*  image */}
            <img src={quiosco} alt="" className='block h-full object-cover ' />
          </div>
          
        </div>
        
        <div className=' w-full h-auto bg-[#243642] flex flex-col md:flex-row p-5 md:p-10 gap-2 rounded-md'>
          <div className="relative  w-full  md:w-3/6  ">
            {/* imagen-overlay */}
            <div className='absolute top-0 left-0 w-full h-full flex gap-8 items-center justify-center  opacity-0 hover:opacity-100 hover:backdrop-blur-2xl transition-all duration-500 ease-in-out'>
              {/* image-button */}
              <a href='https://feelingboardco.com/' target="_blank" className='hover:cursor-pointer bg-slate-900  rounded-lg py-2 px-5 hover:bg-slate-800 transition-all duration-500 ease-in-out'>Visit Site</a>
           
            </div>
            {/*  image */}
            <img src={feelingboard} alt="" className='block h-full object-cover' />
          </div>
          <div className=' h-full  w-full md:w-3/6 md:p-10'>
            <h2 className=' text-4xl md:text-6xl font-thin  w-full mt-5 text-center md:text-left'>
              FeelingBoard | Ecommerce
            </h2>
            <div className='flex md:flex-col w-full object-fill gap-1 '>
              <div className='mt-5'>
                <h4 className="font-thin text-lg sm:text-2xl text-center md:text-left">Funcionalidades</h4>
                <div className=' flex flex-row flex-wrap mt-2 gap-1 md:justify-start justify-evenly'>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Cambios en el Diseño</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Funcionalidad de Suscripcion</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Creación del ambiente de desarrollo</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Reestructuracion de la página</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Previsualizadores de colores</span>
                  
                </div>
              </div>
              <div className='mt-5'>
                <h4 className="font-thin text-lg sm:text-2xl md:text-left text-center ">Herramientas</h4>
                <div className=' flex flex-row flex-wrap mt-2 gap-3  md:justify-start justify-evenly'>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >WordPress</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Swacthes</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >WPvivid</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Css3</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Freelancer</span>
                  <span className='rounded-md bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >PHP</span>
                  <span className=' hover:bg-slate-800 cursor-pointer rounded-md bg-slate-900 p-2 text-[10px] sm:text-xs transition-all ease-in-out duration-75' >Mysql</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class=" mt-40 text-center p-5 text-gray-500 font-bold uppercase">
      © desarrollado por Eduardo Luna Meza - Todos los hechos resevados 2024
      </footer>
    </section>
  )
}
