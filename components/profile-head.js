import React from 'react';
import Image from 'next/image'
import mypic from '../img/avatar.webp'


function ProfileHead() {
return (
<>
    <div className='profile-container'> 
        <div className='profile-info'>
            <div className="profile-info_name">Eduard Korytnyk</div>
            <p className="subtitle"> Front-End Developer </p>
        </div>
    <div className='profile-photo'>
    <Image
      src={mypic}
      alt="Picture of the author"
      width="90px"
      height="90px"
    />
    </div>
    </div>

</>
)
}

export default ProfileHead;