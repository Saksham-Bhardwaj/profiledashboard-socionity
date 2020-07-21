import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <span className="navbar-brand mb-0 h1">Profile Dashboard</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                </div>
            </nav>
        );
    }
}

export default NavBar;