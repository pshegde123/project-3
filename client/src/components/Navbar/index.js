import React, { Component } from "react";
import SearchBar from "../Searchbar";
import './style.css';


class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">GameFAQ</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/platforms">Platforms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/genre">Genre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/games">Games</a>
                        </li>
                    </ul>
                </div>
                <SearchBar/>
            </nav>
        );
    }
};

export default Navbar;