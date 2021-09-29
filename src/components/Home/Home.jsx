import React from 'react'
import './home.scss';

export default function Home(props) {

    const { visibleElement } = props;

    const addLongTextShadow = (color) => {
        let shadow = "";
        for(let i=0; i<200; i++) {
            shadow += (shadow ? ",": "") + `${color} ` + -i*1+"px " + i*1 + "px";
        }
        return shadow
    }

    return (
        <div id="home" className={visibleElement === "home" ? "home active" : "home"}>
            <div className="name">
                <h1 style={{textShadow: addLongTextShadow("#52419c")}}>Kia</h1>
                <h1 style={{textShadow: addLongTextShadow("#45358a")}}>Hooper</h1>
                <h1 style={{textShadow: addLongTextShadow("#3a2d74")}}>Andersen</h1>
            </div>   
        <a className="arrow" href="#projects"></a>
        </div>
    )
}
