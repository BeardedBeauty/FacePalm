import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "./Loading";

function Create(props) {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { loading } = useAuth0();
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <div className="input-field">
                <textarea id="textarea2" className="materialize-textarea" onChange={(event) => props.inputtitle(event.target.value)}></textarea>
                <label for="textarea2">projectTitle</label>
            </div>
            <br />
            <div className="input-field">
                <textarea id="textarea1" className="materialize-textarea" onChange={(event) => props.input(event.target.value)}></textarea>
                <label for="textarea1">content</label>
            </div>
            <br />
            <button className={props.button} type="submit" name="action" onClick={() => props.save(user)}>save</button>



            {/* <Card>
                <Name> JOHN W. OCHS </Name>

                <Phone> 952-215-7440 </Phone>
                <email>{"john.w.ochs0@gmail.com"}</email>
                <website href="https://prtflo3.herokuapp.com" />
                <title> Full Stack Web Developer </title>
            </Card> */}


        </>
    )
}

export default Create;