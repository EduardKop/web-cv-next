import React from 'react';
import WorkConstructor from '../components/work-constructor';

import EnglishAppProjectImg from '../img/1.webp';
import AgencyWebAppProgectImg from '../img/3.webp';
import WeatherAPIapp from '../img/5.webp';
import GitHubScrapAPIapp from '../img/6.webp';
import Kaeltetechnik from '../img/4.webp';
import MonzaMotorsports from '../img/7.webp';
import SnakeGame from '../img/8.webp';
import SecretSanta from '../img/9.webp';
import AirtableCloudflareWorker from '../img/10.webp';
import Calendar from '../img/11.webp';

function ExpirienceContainer() {
  return (
    <div className='wrapper'>
      <div className='expirience-props-container'>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'Next, Firebase, Node'}
            img={Calendar}
            name={'Notes Cloud Calendar'}
            link={'https://github.com/EduardKop/Calendar'}
            linkName={'link'}
            pageHref={'https://calendar-vert.vercel.app/'}
            webName={'githubPages:'}
            PageLinkName={'link'}
            pageName={'Page:'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'Cloudflare, Node'}
            img={AirtableCloudflareWorker}
            name={'Airtable Cloudflare Proxy Worker'}
            link={'https://github.com/EduardKop/Airtable-Cloudflare-Worker-Proxy'}
            linkName={'link'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'Next, Firebase'}
            img={SecretSanta}
            name={'Secret Santa'}
            link={'https://github.com/EduardKop/SecretSanta'}
            linkName={'link'}
            pageHref={'https://secret-santa-topaz-six.vercel.app/'}
            PageLinkName={'link'}
            pageName={'Page:'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'React, Node'}
            img={WeatherAPIapp}
            name={'Weather API app'}
            link={'https://github.com/EduardKop/WeatherAPI-app'}
            linkName={'link'}
            pageHref={'https://eduardkop.github.io/WeatherAPI-app/'}
            PageLinkName={'link'}
            pageName={'Page:'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'React, Node'}
            img={GitHubScrapAPIapp}
            link={'https://github.com/EduardKop/github-scraping'}
            linkName={'link'}
            name={'Scrap GitHub API app'}
            pageHref={'https://eduardkop.github.io/github-scraping/'}
            PageLinkName={'link'}
            pageName={'Page:'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'React, Bootstrap'}
            img={EnglishAppProjectImg}
            link={'https://github.com/EduardKop/EnglishDictionaryApp'}
            linkName={'link'}
            name={'English Dictionary App'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'HTML·CSS'}
            img={AgencyWebAppProgectImg}
            link={'https://github.com/EduardKop/agencyWeb'}
            linkName={'link'}
            name={'Creative Agency Web'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'HTML·CSS, Sass, Bootstrap'}
            img={Kaeltetechnik}
            link={'https://github.com/EduardKop/K-ltemaschine-web'}
            linkName={'link'}
            name={'Kaeltetechnik'}
            pageHref={'https://eduardkop.github.io/K-ltemaschine-web/'}
            PageLinkName={'link'}
            pageName={'Page:'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'HTML·CSS, Sass, Bootstrap'}
            img={SnakeGame}
            link={'https://github.com/EduardKop/snake-game'}
            linkName={'link'}
            name={'Snake-Game'}
            pageHref={'https://eduardkop.github.io/snake-game/'}
            webName={'githubPages:'}
            PageLinkName={'link'}
            pageName={'Page:'}
          />
        </div>
        <div className='expirience-props-element'>
          <WorkConstructor
            stack={'HTML·CSS, Sass, Bootstrap'}
            img={MonzaMotorsports}
            link={'https://github.com/EduardKop/Monza-Motorsports-'}
            linkName={'link'}
            name={'Monza-Motorsports'}
            pageHref={'https://eduardkop.github.io/Monza-Motorsports-/'}
            webName={'githubPages:'}
            PageLinkName={'link'}
            pageName={'Page:'}
          />
        </div>
      </div>
    </div>
  );
}

export default ExpirienceContainer;
