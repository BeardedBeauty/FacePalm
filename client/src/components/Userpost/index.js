import React from "react";
import "./style.css";

function Userpost(props) {
    return (
        <>
            <li className="userpost z-depth-1">
                <img src={props.img} alt="" class="circle circleme" />
                <span className="title">{props.username}</span>
                <p>{props.text}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </>
    )
}

export default Userpost;