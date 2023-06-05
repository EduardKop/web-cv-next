import React from "react";
import Image from 'next/image'

function WorkConstructor ({name, stack, img, link, linkName, pageHref, webName, PageLinkName, pageName}) {
  const technologies = stack.split(', ');

  return (
    <div className='expirience-container'>
      <div className='expirience-container__item'>
        <div className="expirience-container-img">
          <Image
            src={img}
            alt="Picture of the author"
            width={250}
            height={140}
            loading="lazy"

          />
        </div>
        <div className="expirience-container-img--discription">
          <div className='container__item-nameContainer'>
            {name} 
          </div> 
          <div className="links">
            <div className="container__item-linkContainer">
              <span>Github:</span>
              <a rel="shortcut icon noreferrer" href={link} target="_blank">{linkName}</a>
            </div>
            {pageHref && (
              <div className="container__item-webContainer">
                <span>{pageName}</span> <br />
                <a rel="shortcut icon noreferrer" href={pageHref} target="_blank">{PageLinkName}</a>
              </div>
            )}
          </div>
            
          <div className='container__item-stackContainer'>
            {technologies.map((tech, index) => (
              <div key={index} className={`card card-${tech}`}>{tech}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkConstructor;
