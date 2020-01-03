import React from "react";
import "./style.css";

function View(props) {
    return (
        <>
            <button className="btn waves-effect waves-light purple back" type="submit" name="action" onClick={() => props.clicc()}>back</button>
            <br />
            <div className="center centertitle z-depth-1">
                <h4 className="">{props.title}</h4>
                <h6 className="">by {props.name}</h6>
            </div>
            <div className="contentview">
                <p>{props.content}</p>
            </div>
        </>
    )
};

export default View;