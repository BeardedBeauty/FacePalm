import React from "react";
import "./style.css";

function Userpost(props) {
    return (
        <>
            <li className="userpost z-depth-1">
                <div className="usertitle">
                    <img src={props.img} alt="av" class="circle circleme" />
                </div>
                <h5 className="titlepost">{props.username}</h5>
                <p className="posttext">{props.text}</p>
                {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
            </li>
        </>
    )
}

export default Userpost;