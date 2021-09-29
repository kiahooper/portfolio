import React, { useState } from 'react'
import './menu.scss'
import ListLink from './ListItem';

export default function Menu(props) {

    const { menuOpen, setMenuOpen } = props;

    return (
        <div className={menuOpen ? "menu active" : "menu"} >
            <div className="circle"></div>
            <ul>
                <ListLink clickTo={"#home"} title={"Home"} setMenuOpen={setMenuOpen}/>
                <ListLink clickTo={"#projects"} title={"Projects"} setMenuOpen={setMenuOpen}/>
                <ListLink clickTo={"#about"} title={"About"} setMenuOpen={setMenuOpen}/>
                <ListLink clickTo={"#contact"} title={"Contact"} setMenuOpen={setMenuOpen}/>
            </ul>
            
        </div>
    )
}
