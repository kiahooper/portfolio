import React from 'react'
import { Phone, Mail } from '@material-ui/icons';
import './navbar.scss';

export default function Navbar(props) {

    const { visibleElement, menuOpen, setMenuOpen } = props;

    return (
        <div className={"navbar " + (menuOpen ? "active " : "") + (visibleElement === "projects" || visibleElement === "contact" ? "inverse" : "") + (visibleElement === "about" ? "white-detail" : "")}>
            <div className="left">
                <a href="#home" className="logo">
                    <span className="circle"></span>
                    <div className="circle-animate-wrapper">
                        <span className="circle animate"></span>
                    </div>
                    <svg viewBox="0 0 92.25932 92.259996" xmlnsSvg="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <g inkscapeLabel="Layer 1" inkscapeGroupmode="layer" id="layer1" transform="translate(-112.12123,-26.584484)">
                        <path d="m 161.14563,75.609417 v 43.235063 h 43.23492 z m -49.0244,-49.024933 h 42.20781 v 92.259856 h -42.20781 z"/>
                    </g>
                    </svg>
                </a>
                <div className="items">
                    <a href="tel:+61491688816" className="itemContainer">
                        <Phone className="icon"/>
                        <span>+61 491 688 816</span>
                    </a>
                    <a href="#contact" className="itemContainer">
                        <Mail className="icon"/>
                        <span>kiahooperandersen@gmail.com</span>
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    )
}
