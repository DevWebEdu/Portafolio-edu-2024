import React from 'react'
import Typed from 'typed.js'

export const TypedComponent = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['coding ⌨️', 'working out 💪', 'reading 📘', 'writing ✍️'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            fadeOut: true,

        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (

        <p className=' text-lg  md:text-2xl font-thin py-3'> I really enjoy  <span ref={el} className='font-extrabold  text-2xl md:text-3xl' /></p>

    )
}
