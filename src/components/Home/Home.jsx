import React from 'react'
import './home.scss';

export default function Home(props) {

    const { visibleElement } = props;

    const addLongTextShadow = (color) => {
        let shadow = "";
        for(let i=0; i<400; i++) {
            shadow += (shadow ? ",": "") + `${color} ` + -i*1+"px " + i*1 + "px";
        }
        return shadow
    }

    return (
        <div id="home" className={visibleElement === "home" ? "home active" : "home"}>
            <div className="name">
                <h1 style={{textShadow: addLongTextShadow("#633ad1")}}>Kia</h1>
                <h1 style={{textShadow: addLongTextShadow("#4d29af")}}>Hooper</h1>
                <h1 style={{textShadow: addLongTextShadow("#44249a")}}>Andersen</h1>
            </div>   
        <a className="arrow" href="#projects"></a>
        </div>
    )
}
