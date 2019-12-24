import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="page-footer grey">
            <div className="container">
                <br />
                <div className="row center-align">
                    <div className="col s12">
                        {/* <a className="get modal-trigger" href="#modal1">contact</a>
                        <a className="get" href="https://www.linkedin.com/in/john-ochs-b67b32160/">LinkedIn</a>
                        <a className="get" href="https://github.com/BeardedBeauty">Github</a> */}
                        <br />
                    </div>
                </div>
                <div className="row center-align">
                    <p>Built with React, Node, Express, Mongoose, and MaterializeCSS</p>
                </div>
                <br />

                {/* <footer classNameName="page-footer">
                        <div classNameName="footer-copyright">
                            <div classNameName="container">
                                <div classNameName="row center">
                                    <h6 classNameName="font-color">Built with React, Node, Express, Mongoose, and MaterializeCSS © RBF productions</h6>
                                </div>
                            </div>
                        </div>
                    </footer> */}
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row center-align">
                        <div className="col s12">© 2019 john ochs & rbf productions</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;