import React from 'react'
import './Project1.css'
import cheese from './img/cheese.png'
import calc from './img/calc.png'
import todo from './img/to do.png'
import shoe from './img/shoecart.png'

export const Projects1 = () => {
  return (
    <div>  

        <div className=' d-flex  flex-wrap  justify-content-center  align-content-center '>
           <div className="artboard">
      <div className="card">

        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Skill Set</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>Advanced JS and CSS</li>
              <li>JS/CSS Preprocessors</li>
              <li>JS Frameworks</li>
              <li>Advanced Animations</li>
              <li>Deployment Pipelines</li>
              <li>Large Apps Architectures</li>
              <li>Naming Conventions</li>
            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              {/* <p className="card__subject">Web Developer</p>
              <p className="card__title">Hello World!</p> */}
              <img src={cheese} alt="" className='image' />
            </div>
          </div>
        </div>

      </div>
    </div>



    <div className="artboard">
      <div className="card">

        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Skill Set</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>Advanced JS and CSS</li>
              <li>JS/CSS Preprocessors</li>
              <li>JS Frameworks</li>
              <li>Advanced Animations</li>
              <li>Deployment Pipelines</li>
              <li>Large Apps Architectures</li>
              <li>Naming Conventions</li>
            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              {/* <p className="card__subject">Web Developer</p>
              <p className="card__title">Hello World!</p> */}
              <img src={todo} alt="" className='image'/>
            </div>
          </div>
        </div>

      </div>
    </div>
                             

    <div className="artboard">
      <div className="card">

        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Skill Set</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>Advanced JS and CSS</li>
              <li>JS/CSS Preprocessors</li>
              <li>JS Frameworks</li>
              <li>Advanced Animations</li>
              <li>Deployment Pipelines</li>
              <li>Large Apps Architectures</li>
              <li>Naming Conventions</li>
            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              {/* <p className="card__subject">Web Developer</p>
              <p className="card__title">Hello World!</p> */}
              <img src={calc} alt="" className='image' />
            </div>
          </div>
        </div>

      </div>
    </div>
     
                          
    <div className="artboard">
      <div className="card">

        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Skill Set</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>Advanced JS and CSS</li>
              <li>JS/CSS Preprocessors</li>
              <li>JS Frameworks</li>
              <li>Advanced Animations</li>
              <li>Deployment Pipelines</li>
              <li>Large Apps Architectures</li>
              <li>Naming Conventions</li>
            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              {/* <p className="card__subject">Web Developer</p>
              <p className="card__title">Hello World!</p> */}
              <img src={shoe} alt=""  className='image'/>
            </div>
          </div>
        </div>

      </div>
    </div>

    </div>
       
    </div>
  )
}
