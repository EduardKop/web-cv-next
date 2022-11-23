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
            <div className='skills-content-title'><span>HTML</span>
            <Image 
                    src={htmlIcon}
                    width="30px"
                    height="30px"
                    alt="html icon"
            /> 
            </div>
            <div className="skills-content-discriptions">
                <div className="content-discriptions-elem">
                    Bootstrap
                </div>
                <div className="content-discriptions-elem">
                    Flex-box / Grid
                </div>
                <div className="content-discriptions-elem">
                    Sass / Less 
                </div>
                <div className="content-discriptions-elem">
                    Gulp
                </div>
            </div>
        </div>
        
        <div className='tech-wrap'>
            <div className='skills-content-title'><span>JavaScript</span> 
            <Image 
                    src={jsIcon}
                    width="30px"
                    height="30px"
                    alt="js icon"
            /> 
            </div>
            <div className="skills-content-discriptions">
                <div className="content-discriptions-elem">
                    ES 6 
                </div>
                <div className="content-discriptions-elem">
                    async/await programming
                </div>
                <div className="content-discriptions-elem">
                    TypeScript
                </div>
            </div>
        </div>

        <div className='tech-wrap'>
            <div className='skills-content-title'><span>React </span>
            <Image 
                    src={reactIcon}
                    width="30px"
                    height="30px"
                    alt="react icon"
            /> 
            </div>
            <div className="skills-content-discriptions">
                <div className="content-discriptions-elem">
                    Styled Component React 
                </div>
                <div className="content-discriptions-elem">
                    Redux Toolkit  
                </div>
                <div className="content-discriptions-elem">
                    React hooks
                </div>
            </div>
        </div>

        <div className='tech-wrap'>
            <div className='skills-content-title'><span>BackEnd </span> 
            <Image 
                    src={backEndIcon}
                    width="50px"
                    height="50px"
                    alt="backEnd icon"
            /> 
            </div>
            <div className="skills-content-discriptions">
                <div className="content-discriptions-elem">
                    Node.js
                </div>
                <div className="content-discriptions-elem">
                    HTTP protocol
                </div>
                <div className="content-discriptions-elem">
                    REST API
                </div>
            </div>
        </div>

        <div className='tech-wrap'>
            <div className='skills-content-title'><span>Other</span>
            <Image 
                    src={otherTechIcon}
                    width="60px"
                    height="50px"
                    alt="otherTech icon"
            /> 
            </div>
            <div className="skills-content-discriptions">
                <div className="content-discriptions-elem">
                    GIT
                </div>
                <div className="content-discriptions-elem">
                    Webpack, npm
                </div>
                <div className="content-discriptions-elem">
                    REST API
                </div>
            </div>
        </div>
    </div>
        </div>
   

    )
}

export default Skills