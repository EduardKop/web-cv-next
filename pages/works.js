import React from 'react'
import WorkConstructor from '../components/work-constructor'

import TelegrafBotProjectImg from '../img/2.png'
import EnglishAppProjectImg from '../img/1.png'
import AgencyWebAppProgectImg from '../img/3.png'
import WeatherAPIapp from '../img/5.png'
import GitHubScrapAPIapp from '../img/6.png'
import Kaeltetechnik from '../img/4.png'
import MonzaMotorsports from '../img/7.jpg'
import SnakeGame from '../img/8.jpg'


function ExpirienceContainer () {
    return (
    <div className='wrapper'>
        <div className='expirience-props-container'>
        <div className='expirience-props-element'>
            <WorkConstructor stack={'React.js, Node.js'}
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
            <WorkConstructor stack={'React.js,Node.js'}
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
            <WorkConstructor stack={'Telegraph,Telegram API,Node.js'}
                        img={TelegrafBotProjectImg}
                        link={'https://github.com/EduardKop/telegramBot-telegraf-talking-bot'}
                        linkName={'link'}
                        name={'Telegram Bot (talking bot)'}
                        /> 
                </div>
                <div className='expirience-props-element'>
            <WorkConstructor stack={'React.js,Bootstrap'}
                        img={EnglishAppProjectImg}
                        link={'https://github.com/EduardKop/agencyWeb'}
                        linkName={'link'}
                        name={'English Dictionary App'}
                        pageHref={'https://eduardkop.github.io/agencyWeb/'}
                        webName={'githubPages:'}
                        PageLinkName={'link'}
                        pageName={'Page:'}

                        /> 
                </div>
                <div className='expirience-props-element'>
            <WorkConstructor stack={'HTML/CSS'}
                        img={AgencyWebAppProgectImg}
                        link={'https://github.com/EduardKop/agencyWeb'}
                        linkName={'link'}
                        name={'Creative Agency Web'}
                        pageHref={'https://eduardkop.github.io/agencyWeb/'}
                        PageLinkName={'link'}
                        pageName={'Page:'}


                        /> 
                </div>
                <div className='expirience-props-element'>
            <WorkConstructor stack={'HTML/SCSS,Bootstrap'}
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
            <WorkConstructor stack={'HTML/SCSS,Bootstrap'}
                        img={SnakeGame}
                        link={'https://github.com/EduardKop/snake-game'}
                        linkName={'link'}
                        name={'Monza-Motorsports'}
                        pageHref={'https://eduardkop.github.io/snake-game/'}
                        webName={'githubPages:'}
                        PageLinkName={'link'}
                        pageName={'Page:'}
                        /> 
                </div>
                <div className='expirience-props-element'>
            <WorkConstructor stack={'HTML/CSS,JS'}
                        img={MonzaMotorsports}
                        link={'https://github.com/EduardKop/Monza-Motorsports-'}
                        linkName={'link'}
                        name={'Snake-Game'}
                        pageHref={'https://eduardkop.github.io/Monza-Motorsports-/'}
                        webName={'githubPages:'}
                        PageLinkName={'link'}
                        pageName={'Page:'}
                        /> 
                </div>
        </div>
    </div>
    )
}

export default ExpirienceContainer;