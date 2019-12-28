import React from "react";

function Projlist(props) {
    return (
        <tr>
            {/* <td></td>{props.user}</a></td> */}
            <td className="projmarjin">
                <a href="#" id={props.id} class={props.user + " projListItem"} onClick={() => props.selectProj(props)}>{props.projtitle}</a>
            </td>
        </tr>
    )
}

export default Projlist;