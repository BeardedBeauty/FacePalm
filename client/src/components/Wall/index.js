import React from "react";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa";
import Loading from "../Loading";

function Wall(props) {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { loading } = useAuth0();
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <div className="row center">
                {isAuthenticated &&
                    <>
                        <div className="textpost">
                            <div className="input-field">
                                <textarea id="textarea1" className="materialize-textarea" onChange={(event) => props.postContent(event.target.value)}>
                                </textarea>
                                <label for="textarea1">writeHere</label>
                            </div>
                        </div>
                        <button className={props.buttonClass} type="submit" name="action" onClick={() => props.postpost(user)}>send it</button>
                    </>
                }
            </div>
            <div className="board" onScroll={() => props.onScroll}>
                <ul className="">
                    {props.children}
                </ul>
            </div>
        </>
    )
}

export default Wall;