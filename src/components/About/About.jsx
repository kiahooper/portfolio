import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './about.scss';
import { EmojiObjects } from '@material-ui/icons';

export default function About(props) {

    const {visibleElement} = props;

    return (
        <div id="about" className={visibleElement === "about" ? "about active" : "about"}>
            <div className="bottomBox">
                <div class="divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
                </div>
            </div>
                <div className="content">
                    <h2>About</h2>
                    <div className="left">
                    <h3>What I Do</h3>
                        <p>Based near Melbourne, originally from Denmark, I am a keen software engineer with an affinity for web development. 
                        </p>
                        <p>I enjoy spending my time challenging myself, be it in or outside of work. 
                            Besides programming, I spend my time surfing, scuba diving, hiking, drawing and am always up for trying something new.</p> 
                        <p>I believe that you should never stop challenging yourself to learn new things and move outside your comfort zone. The everchanging nature of software engineering is a big part of why I find it so rewarding.</p>
                    </div>
                    <div className="right">
                        <div className="skills">
                            <h3>Languages I Speak</h3>
                            <p>Javascript, React / JSX, HTML, CSS / Sass, SQL</p>
                            <div className="learning">
                                <p>Currently learning </p>
                                <div className="dotdotdot"><span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>
                                <p> Node JS</p></div>
                        </div>
                        <h3>The Nitty-Gritty</h3>
                        <a href={`${process.env.PUBLIC_URL}/assets/CV-Kia-Hooper-Andersen.pdf`} className="cv" download>Download CV</a>
                        <p>Visit my 
                            <a href="https://github.com/kiahooper" target="_blank" rel="noreferrer">Github</a> 
                            profile for more of my projects, my 
                            <a href="https://www.linkedin.com/in/kia-hooper-andersen-367740221/" target="_blank" rel="noreferrer">Linkedin</a> 
                            profile for more information or just 
                            <a href="#contact" target="_blank">contact me</a>.
                        </p>
                    </div>

                </div>
                <div className="skillsOrbit">
                    <div className="orbit">
                        <div className="axis">
                            <div className="axis">
                                <div className="axis">
                                    <img className="icon html" src={`${process.env.PUBLIC_URL}/assets/icons/html.png`} alt="html logo"></img>
                                </div>
                                <img className="icon" src={`${process.env.PUBLIC_URL}/assets/icons/css.png`} alt="css logo"></img>
                            </div>
                            <div className="axis2">
                                <img src={`${process.env.PUBLIC_URL}/assets/icons/JS.png`} alt="JS logo"></img>
                                <img  className="subIcon"src={`${process.env.PUBLIC_URL}/assets/icons/react.png`} alt="react logo"></img>
                            </div>
                            <div className="logoWrapper">
                                <div className="logo">
                                    <span></span>
                                    <svg viewBox="0 0 92.25932 92.259996" xmlnsSvg="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                        <g inkscapeLabel="Layer 1" inkscapeGroupmode="layer" id="layer1" transform="translate(-112.12123,-26.584484)">
                                            <path d="m 161.14563,75.609417 v 43.235063 h 43.23492 z m -49.0244,-49.024933 h 42.20781 v 92.259856 h -42.20781 z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
