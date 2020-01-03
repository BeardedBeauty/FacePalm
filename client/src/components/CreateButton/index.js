import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

function CreateButton(props) {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { loading } = useAuth0();

    return (
        <>
            {isAuthenticated && <button className="btn waves-effect waves-light purple" type="submit" name="action" onClick={() => props.create()}>
                createProject
            </button>}
            {!isAuthenticated && <button className="btn disabled" type="submit" name="!action">
                login to create
            </button>}
        </>
    )
}

export default CreateButton;