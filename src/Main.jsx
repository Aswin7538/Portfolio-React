import React from 'react'

import img2 from './img/WhatsApp Image 2024-01-30 at 16.06.00_03f99d8f-fotor-bg-remover-2024013016859.png'

import './Main.css'
import html from './img/html-5-logo-svgrepo-com.svg'
import js from './img/javascript-svgrepo-com.svg'
import  css from './img/css-3-svgrepo-com.svg'
import react from './img/react-svgrepo-com.svg'
import node from './img/nodejs-svgrepo-com.svg'
import mongo from './img/mongodb-logo-svgrepo-com.svg'

import Works from './Projects'

import { Contact } from './Contact'
import { Service } from './Service'
import { Projects1 } from './Projects1'
 


export const Main = () => {
  
  return (
    <div>
   
      <div className=' row   '>
        <div className='navb col-md-12 '>

          <h2 className=' float-start '>HOME</h2>
          <h3 className=' float-end '>Contact</h3>


        </div> 


       </div> 
      <div className='sec1 row'>

        <div className='sec1p1 col-md-7'>
          <h3 className='sec1h1'>Web development Specialist</h3>

          <p className='sec1p2'>I am Aswin, where every line of code weaves a narrative,
            and each project is an embodiment of my dedication to crafting experiences that go beyond
            the commonplace.</p>
        </div>
        <div className=' sec1p3  col-md-5 '>
          <img src={img2} alt="" className=' img2 ' />
        </div>
      </div>

           <div className='sec2 row '>
            <div  className='sec2h1 col-md-6'>
              About me
            </div>
            <div className='sec2p1 col-md-6 pt-5'>
            Experienced MERN stack developer proficient in creating dynamic web applications. 
            Skilled in React.js for intuitive user interfaces, Node.js for server-side development, 
            and MongoDB for efficient database management. Committed to delivering high-quality solutions 
            that blend functionality with a seamless user experience. Check out my portfolio for a glimpse
             into my expertise and successful project implementations.

            </div>
           </div>

           
           <section className=' sec3     '>

            <div className='sec1h1 '>Skills</div>
            <div className='skills row pt-5  '>
            <img src={html} alt=""  className=' col-md-2 sk'/>
            <img src={css} alt="" className=' col-md-2 sk' />
            <img src={js} alt=""  className=' col-md-2  sk'/>
            <img src={react} alt=""  className=' col-md-2  sk'/>
            <img src={node} alt="" className=' col-md-2 sk'  />
            <img src={mongo} alt="" className=' col-md-2 sk' />
            </div>

           </section>
        <section className='sec4'>
             <h3 className='ser pt-5 '>Services</h3>

          <Service/>
        </section>
          
         <section>
          <div>
            <h3 className='sec1h1'>Projects </h3>
            <Projects1/>
          </div>
         </section>
           
            <section>
            <div className='sec2 row '>
            <div  className='sec2h1 col-md-6'>
              Contact
            </div>
            <div className='sec2p1 col-md-6 pt-5'>
                 <h4>Name: Aswin .v</h4>
                 <h4>email:aswinnaranath@gmail.com</h4>

            </div>
           </div>
             
            </section>

           

    </div>
  )
}
