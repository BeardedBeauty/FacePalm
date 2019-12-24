import { useAuth0 } from "../../react-auth0-spa";
import React, { useEffect } from "react";
import Loading from "../Loading";
import "./style.css";

function Profile(props) {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { loading } = useAuth0();

    useEffect(() => {
        props.mount(user);
    }, []);

    if (loading) {
        return <Loading />;
    };

    return (
        <div className="profcard z-depth-1">
            {!isAuthenticated && (
                <code>Please login to view profile</code>
            )}
            {isAuthenticated && (
                <>
                    <img src={user.picture} alt="" class="circle circleme z-depth-2"></img>
                    <h4>{user.nickname}</h4>
                    <code>{user.email}</code>
                    <div className="divide"></div>
                    <button className="btn waves-effect waves-light blue" type="submit" name="action" onClick={() => logout()}>logout {user.name}</button>
                </>
            )}
        </div>
    )
}

export default Profile;