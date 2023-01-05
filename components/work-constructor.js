import React from "react";
import Image from 'next/image'


function WorkConstructor ({name,stack,img,link,linkName,pageHref,webName,PageLinkName,pageName}) {
    const technologies = stack.split(', '); // Split the stack string into an array of technologies
    return (
        <div className='expirience-container'>
            <div className='expirience-container__item'>
            <div className="expirience-container-img">
            <Image
            src={img}
            alt="Picture of the author"
            width='250px'
            height='140px'
            />
            </div>
            <div className="expirience-container-img--discription">
            <div className='container__item-nameContainer'>
            {name} 
                </div> 
            <div className="links">
            <div className="container__item-linkContainer">
           <span>Github:</span><a rel="shortcut icon noreferrer" href={link} target="_blank">{linkName}</a>
                </div>
            <div className="container__item-webContainer">
            <span>{pageName}</span> <br></br><a rel="shortcut icon noreferrer" href={pageHref} target="_blank">{PageLinkName}</a>
                </div>   
            </div>
            
            <div className='container__item-stackContainer'>
                {technologies.map(tech => (
                <div className={`card card-${tech}`}>{tech}</div>
                ))}
            </div>
            </div>
            </div>

        </div>
    )
}
export default WorkConstructor;