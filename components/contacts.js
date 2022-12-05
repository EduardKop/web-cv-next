import React from 'react';

export default function Contacts() {
return (
    <div className="contacts">
    
            <div className="contacts-container" >

    <div className='contacts-wrap'><span>Contacts</span></div>
        <div className='contacts-item first '>
        <a rel="shortcut icon noopener noreferrer"target="_blank" href={'tel:+380665249893'} > 📞 {'+380665249893'}</a>
        </div>
        <div className='contacts-item'>
        <a rel="shortcut icon noopener noreferrer" target="_blank" href={'https://t.me/Eduard_Kop'}> 📱 {'t.me/Eduard_Kop'}</a>
        </div>
        <div className='contacts-item'>
        <a rel="shortcut icon noopener noreferrer" target="_blank"  href={'https://www.linkedin.com/in/eduard-korytnyk-6b3929155/'}>🌐 {"LinkedIn"}</a>
        </div>
        <div className='contacts-item'>
        <a rel="shortcut icon noopener noreferrer" href={'mailto:eduard.korytnyk@gmail.com'}> 📭 {'eduard.korytnyk@gmail.com'}</a>
        </div>
    </div>
    </div>
    

)

}


