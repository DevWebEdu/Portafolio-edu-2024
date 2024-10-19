import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const Experience = () => {
    return (
        <section id='professional_life' className='mb-20'>
            <h2 className='font-light text-5xl text-center mb-28 mt-40 '> Professional Life</h2>


            <VerticalTimeline
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#243642', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #243642' }}
                    date="July 2017 - Aug 2022"
                    iconStyle={{ background: '#243642', color: '#fff' }}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>

                    }
                >
                    <h3 className="vertical-timeline-element-title">Universidad Privada San Juan Bautista</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ingenieria de Computación y Sistemas (Títulado)  - Lima, Perú</h4>
                    <p>
                        Estudios universitarios concluidos
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#243642', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #243642' }}
                    date="July 2020 - Aug 2022"
                    iconStyle={{ background: '#243642', color: '#fff' }}
                    
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    }

                >
                    <h3 className="vertical-timeline-element-title">Asociación Cultural Peruano Británica | Británico</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ingles - Lima, Perú</h4>
                    <p>
                        Advance 1
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#243642', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #243642' }}
                    date="Aug 2021 - May 2022"
                    iconStyle={{ background: '#243642', color: '#fff' }}
                    
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    }

                >
                    <div className='flex flex-row w-full gap-3 mb-5'>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >JS</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >HTML5</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >CSS3</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >Figma</span>
                    </div>
                    <h3 className="vertical-timeline-element-title"> Universidad Privada San Juan Bautista </h3>
                    <h4 className="vertical-timeline-element-subtitle"> pre-professional intern. - Lima Perú </h4>
                    <p>
                        Full Stack Developer | Trainee
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#243642', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #243642' }}
                    date="Feb 2022 - Aug 2022"
                    iconStyle={{ background: '#243642', color: '#fff' }}
                    
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    }
                  
                >

                    <h3 className="vertical-timeline-element-title"> TECSUP </h3>
                    <h4 className="vertical-timeline-element-subtitle"> Desarrollador Web FullStack | ReactJs | NodeJs </h4>
                    <p>
                        Completed studies.
                    </p>
                    <div className='flex flex-row justify-end w-full gap-3 mb-5'>
                        <a href='https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=606373&n=COD%2FCPE%2F22%2F192&t=E' target='_blank' className='rounded-md bg-slate-800 p-2 text-sm' >Certificate</a>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#243642', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #243642' }}
                    date="Mar 2022 - Present"
                    iconStyle={{ background: '#243642', color: '#fff' }}

                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    }
                    
                >
                    <div className='flex flex-row w-full gap-3 mb-5 flex-wrap'>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >ReactJs</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >NodeJs</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >Tailwind</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >PHP</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >WordPress</span>
                    </div>
                    <h3 className="vertical-timeline-element-title"> FreeLance - Web Developer FullStack - Remoto </h3>


                    <p>
                        Time dedicated to studying and delving into the various existing technologies, complementing them with work.
                    </p>
                    <p>
                    Currently, I am still freelancing, developing new requirements for the virtual store Feelingboard and for the admissions page of the Universidad Nacional San Agustín, developed in WordPress and PHP, respectively.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#243642', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #243642' }}
                    date="Oct 2022 - Present"
                    iconStyle={{ background: '#243642', color: '#fff' }}

                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    }
                    
                >
                    <div className='flex flex-row w-full gap-3 mb-5 flex-wrap'>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >ReactJs</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >NodeJs</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >Tailwind</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >Css3</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >PL/SQL</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >PostgreSQL</span>
                        <span className='rounded-md bg-slate-800 p-2 text-xs' >Laravel</span>
                    </div>
                    <h3 className="vertical-timeline-element-title"> Indra </h3>
                    <h4 className="vertical-timeline-element-subtitle"> Web Developer FullStack  - Lima Perú | Remote </h4>


                    <p>
                    I started programming in PL/SQL and later worked on projects in Laravel integrated with a frontend in ReactJs. Currently, I hold the position of junior programmer analyst, maintaining applications for Telefónica and reviewing requirements for web applications developed in ReactJs and Laravel.
                    </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    }
                    
                />
            </VerticalTimeline>
        </section>
    )
}
