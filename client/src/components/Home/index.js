import React from 'react';
import Projlist from "../projlist";
import Wall from "../Wall";
import Projects from "../Projects";
import Userpost from "../Userpost";
import Nav from "../Nav";
import Profile from "../Profile/Profile.js";
import API from "../../utils/API";
import View from '../View';
// import Footer from "../Footer";
import ScrollFooter from '../ScrollFooter';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            postText: "",
            button: ["btn disabled", "btn waves-effect waves-light blue"],
            btnState: 0,
            comments: [],
            view: true,
            projContent: null,
            me: null
        };
    };

    input = (text) => {
        this.setState({ postText: text });
        text !== "" ? this.setState({ btnState: 1 }) : this.setState({ btnState: 0 });
    };

    postpost = (user) => {
        console.log(user)
        if (this.state.postText !== "") {
            API.postComment({
                comment: this.state.postText,
                user: user.nickname,
                img: user.picture
            }).then(() => this.get())
        };
        this.setState({ postText: "" });
    };

    componentDidMount = () => {
        this.get();
        API.getProj().then(res => {
            this.setState({ projects: res.data.reverse() });
            console.log(this.state.projects);
        }).catch(err => console.log(err));
        window.addEventListener("scroll", this.onScroll, true);
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.onScroll, true);
    }

    onScroll = () => {
        document.getElementById(".board")
        console.log("scrl");
    };

    get = () => {
        API.getComments().then(res => {
            this.setState({ comments: res.data.reverse() });
        }).catch(err => console.log(err));
    };

    selectProj = (proj) => {
        API.getCont(proj.id).then(res => {
            console.log(res.data)
            this.setState({ projContent: res.data });
        }).catch(err => console.log(err));
    };

    wall = () => {
        this.setState({ projContent: null });
        console.log(this.state.projContent);
    }

    mount = user => {
        this.setState({ me: user });
        user
            ? API.getProjUser(user.nickname).then(res => {
                console.log(res.data)
                // this.setState({ projects: res.data.reverse() });
            }).catch(err => console.log(err))
            : console.log("not logged");
    };

    render() {
        return (
            <>
                <div className="cover"></div>
                <Nav />
                <div className="row"></div>
                <Projects title={"newProjects"}>
                    {this.state.projects.map(proj =>
                        <Projlist
                            user={proj.user}
                            selectProj={this.selectProj}
                            projtitle={proj.name}
                            id={proj._id}
                        />
                    )}
                </Projects>
                <Profile
                    mount={this.mount}
                    addstyle={"fixedProfCard"} />
                <ScrollFooter />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m9 offset-l1 offset-m1">
                            {!this.state.projContent && <Wall
                                postpost={this.postpost}
                                postContent={this.input}
                                buttonClass={this.state.button[this.state.btnState]}
                                onScroll={this.onScroll} >
                                {this.state.comments.map(post =>
                                    <Userpost
                                        text={post.comment}
                                        username={post.user}
                                        img={post.img}
                                    />
                                )}
                            </Wall>}
                            {this.state.projContent && <>
                                <br />
                                <View
                                    button={this.state.button[1]}
                                    clicc={this.wall}
                                    name={this.state.projContent.user}
                                    title={this.state.projContent.name}
                                    content={this.state.projContent.content}
                                />
                            </>}
                        </div>
                    </div>
                </div>
            </>
        )
    };
};

export default Home;