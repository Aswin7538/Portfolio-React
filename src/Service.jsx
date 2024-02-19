import React from 'react'
import './Ser.css'
import mern from './img/MERN 2.png'
import data2 from './img/data2.png'
import api from './img/api.png'

export const Service = () => {
  return (
    <div className='serv'>
      
<div class="card-container"> 
  <div class="card"><a href="hottub">
      <div class="card--display"><i class="material-icons"><img src={mern} alt="" className=' img-fluid '/></i>
        <h2>Full-Stack Web Development</h2>
        
      </div>
      <div class="card--hover">
        <h2>Full-Stack Web Development</h2>
        <p>"I'm a full-stack web developer proficient in both frontend (HTML, CSS, JavaScript) and backend 
        (Node.js, Express.js) technologies. 
        I specialize in creating dynamic and responsive web applications to deliver optimal user experiences."</p>
        
      </div></a>
    <div class="card--border"></div>
  </div>
</div>
<div class="card-container"> 
  <div class="card"><a href="worldweb">
      <div class="card--display"><i class="material-icons"><img src={data2} alt="" className=' img-fluid  db '/></i>
        <h2>Database Design & Management</h2>
      </div>
      <div class="card--hover">
        <h2>Database Design & Management</h2>
        <p> "I excel in database design and management, using MongoDB and MySQL. 
        My focus includes efficient data organization, relationships, and tasks like migration and backup, 
        ensuring robust data integrity and performance optimization."</p>
        
      </div></a>
    <div class="card--border"></div>
  </div>
</div>
<div class="card-container"> 
  <div class="card"><a href="trainthings">
      <div class="card--display"><i class="material-icons"><img src={api} alt="" className=' img-fluid db'/></i>
        <h2>API Development</h2>
      </div>
      <div class="card--hover">
        <h2>API Development</h2>
        <p> Specializing in API development, I design and implement RESTful APIs and leverage GraphQL. 
        My expertise lies in creating secure and efficient endpoints, contributing to enhanced
         functionality and improved user experiences in web applications."</p>
        
      </div></a>
    <div class="card--border"></div>
  </div>
</div>

</div>
    
  )
}
