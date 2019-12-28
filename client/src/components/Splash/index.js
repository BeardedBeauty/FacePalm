import React from 'react';
import "./style.scss";
import Wrapper from "../Wrapper";
import { useAuth0 } from "../../react-auth0-spa";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Splash() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <Wrapper>
            <div className="entryBod">
                <div class="content">
                    <Link to="/home">
                        <div className="content__container" >
                            <p class="content__container__text">
                                enter
                            </p>
                            <ul class="content__container__list">
                                <li class="content__container__list__item">./facePalm</li>
                                <li class="content__container__list__item">=> facepalm</li>
                                <li class="content__container__list__item">[face, Palm]</li>
                                <li class="content__container__list__item">ƒåçéπå¬µ</li>
                            </ul>
                        </div>
                        {/* {!isAuthenticated && (
                            <div className="content__container" onClick={() => loginWithRedirect({})}>
                                <p class="content__container__text">
                                    enter
                                </p>
                                <ul class="content__container__list">
                                    <li class="content__container__list__item">./facePalm</li>
                                    <li class="content__container__list__item">=> facepalm</li>
                                    <li class="content__container__list__item">[face, Palm]</li>
                                    <li class="content__container__list__item">ƒåçéπå¬µ</li>
                                </ul>
                            </div>
                        )} */}
                    </Link>
                </div>
            </div>
        </Wrapper >
    )
}

export default Splash;