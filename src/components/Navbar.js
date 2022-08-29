import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    
    return (
<>
<nav className={`navbar navbar-expand-lg bg-${this.props.mode} navbar-${this.props.mode} ${this.props.mode === 'light' ? 'shadow' : 'shadow-lg'}`}>
    <div className="container-fluid">
        <a className="navbar-brand" href="/"><strong>NewsMonkey</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/help">Help</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/politics">Politics</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/tech">Tech News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/social">Social Media News</Link>
                </li>
            </ul>
            <form className="d-flex mx-2" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" aria-checked="false" onClick={this.props.toggleMode} type="checkbox" role="switch" id="toggleMode"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
            </div>
        </div>
    </div>
</nav>
<Outlet/>
</>
    )
  }
}

export default Navbar
