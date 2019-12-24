import React from 'react';
import Wrapper from "./components/Wrapper";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Code from "./components/Code";
import Burger from "./components/Burger"
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Splash from './components/Splash';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plates: ["<facePalm/>", "{{{facePalm}}}", "facePalm();", "(facePalm)=>{}", ".facePalm{}", "./facePalm"],
            name: 0
        };
    };

    componentDidMount = () => {
        this.setState({ name: Math.floor(Math.random() * Math.floor(this.state.plates.length)) });
    }

    // burger = () => {
    //     $(this).toggleClass("active");
    //     $("#masthead").toggleClass("menu-open");
    // }

    render() {
        return (
            <Wrapper>
                <h1 className="left black-text">{this.state.plates[this.state.name]}</h1>
                {/* <Burger click={this.burger} /> */}
                <Router>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/code" exact component={Code} />
                        <Route path="/" exact component={Splash} />
                    </Switch>
                </Router>
                <Footer />
            </Wrapper >
        );
    };
};

export default App;