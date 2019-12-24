import React from "react";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa";
import Loading from "../../components/Loading";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Nav = () => {
    // Auth0 start
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { loading } = useAuth0();
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <div className="boxinternal">
                <div className="center-align">
                    <div className="scene">
                        <div className="box center-align">
                            <div className="front face center-align" id="org">
                                <img className="plane" src="/img/home-new.png" />
                                <i className="fas fa-home"></i>
                            </div>
                            <Link to="/home">
                                <div className="right face" href="/home">
                                    <p>HOME</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="scene">
                        <div className="box" href="#modal1">
                            <div className="front face center-align" id="org">
                                <img className="plane" src="/img/profile.png" />
                                <i className="fas fa-home"></i>
                            </div>
                            <Link to="/code">
                                <div className=" right face center-align">
                                    <p>PROFILE</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="scene">
                        <div className="box center-align" href="#modal1">
                            <Link to="/home">
                                {!isAuthenticated && (<>
                                    <div className="front face center-align" id="org">
                                        <img className="plane" src="/img/login-new.png" />
                                        <i className="fas fa-home"></i>
                                    </div>
                                    <div className="right face" onClick={() => loginWithRedirect({})}>
                                        <p>LOGIN</p>
                                    </div>
                                </>)}
                                {isAuthenticated && (<>
                                    <div className="front face center-align" id="org">
                                        <img className="plane" src="/img/logout.png" />
                                        <i className="fas fa-home"></i>
                                    </div>
                                    <div className="right face" onClick={() => logout()}>
                                        <p>LOGOUT</p>
                                        <p>{user.given_name}</p>
                                    </div>
                                </>)}
                            </Link>
                        </div>
                    </div>
                    {console.log(user)}
                </div>
            </div>
        </>
    )
}

export default Nav;