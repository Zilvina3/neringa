import React, { useState, useEffect, useRef } from 'react'
import { ContactUs } from './email'



function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <main className='h-screen bg-black py-32'>
            <h1 className='text-8xl angel text-orange-300 text-center'>Contact</h1>
            <section className='container mx-auto flex justify-center'>
                <ContactUs />
                
            </section>
        </main>
    )
}

export default Contact