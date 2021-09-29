import React from 'react'
import './scrollPagination.scss';

export default function ScrollPagination(props) {

    const {visibleElement} = props;

    return (
        <div className={visibleElement === "about" ? "scrollPagination inverse" : "scrollPagination"}>
            <ul>
                <li className={visibleElement === "home" ? "active" : ""}><span></span><p>Home</p></li>
                <li className={visibleElement === "projects" ? "active" : ""}><span></span><p>Projects</p></li>
                <li className={visibleElement === "about" ? "active" : ""}><span></span><p>About</p></li>
                <li className={visibleElement === "contact" ? "active" : ""}><span></span><p>Contact</p></li>
            </ul>
        </div>
    )
}
