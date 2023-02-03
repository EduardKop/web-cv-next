import React from "react";
import Image from 'next/image'

import htmlIcon from '../img/html.png'
import jsIcon from '../img/js.png'
import reactIcon from '../img/react.png'
import backEndIcon from '../img/backEnd.png'
import otherTechIcon from '../img/otherTech.png'

function Skills  () {
    return ( 
        <div className="skills-wrapper-container">
 <div className="skills-props-container">
        <div className='tech-wrap'> 
            <div className='skills-content-title'><span>HTML/CSS</span>
            {/* <Image 
                    src={htmlIcon}
                    width="30px"
                    height="30px"
                    alt="html icon"
            />  */}
            </div>
        </div>
        
        <div className='tech-wrap'>
            <div className='skills-content-title'><span>ES6</span> 
            {/* <Image 
                    src={jsIcon}
                    width="30px"
                    height="30px"
                    alt="js icon"
            />  */}
            </div>

        </div>

        <div className='tech-wrap'>
            <div className='skills-content-title'><span>React</span>
            {/* <Image 
                    src={reactIcon}
                    width="30px"
                    height="30px"
                    alt="react icon"
            />  */}
            </div>
        </div>

        <div className='tech-wrap'>
            <div className='skills-content-title'><span>Redux</span> 
            {/* <Image 
                    src={backEndIcon}
                    width="50px"
                    height="50px"
                    alt="backEnd icon"
            />  */}
            </div>

        </div>

        <div className='tech-wrap'>
            <div className='skills-content-title'><span>Next.JS</span>
            {/* <Image 
                    src={otherTechIcon}
                    width="60px"
                    height="50px"
                    alt="otherTech icon"
            />  */}
            </div>
          
        </div>
        
        <div className='tech-wrap'>
            <div className='skills-content-title'><span>Firebase</span>
            {/* <Image 
                    src={otherTechIcon}
                    width="60px"
                    height="50px"
                    alt="otherTech icon"
            />  */}
            </div>
          
        </div>

        <div className='tech-wrap'>
            <div className='skills-content-title'><span>TypeScript</span>
            {/* <Image 
                    src={otherTechIcon}
                    width="60px"
                    height="50px"
                    alt="otherTech icon"
            />  */}
            </div>
          
        </div>

        <div className='tech-wrap'>
            <div className='skills-content-title'><span>Vue</span>
            {/* <Image 
                    src={otherTechIcon}
                    width="60px"
                    height="50px"
                    alt="otherTech icon"
            />  */}
            </div>
          
        </div>
    </div>
        </div>
   

    )
}

export default Skills