import React from 'react'
import './socialSidebar.scss';

export default function socialSidebar() {
    return (
        <div className="socialSidebar">
            <a href="https://github.com/kiahooper" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/assets/icons/github.png`} alt="github logo"></img></a>
            <a href="https://www.linkedin.com/in/kia-hooper-andersen-367740221/" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/assets/icons/linkedin.png`} alt="linkedin logo"></img></a>
            
        </div>
    )
}
