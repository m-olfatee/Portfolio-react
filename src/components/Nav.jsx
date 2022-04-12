import React from 'react'
import logo from "../assets/img/Logo.svg"

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " id='nav'>
            <div className="container-fluid ">
                <a className="navbar-brand" href="#nav"><img src={logo} height="100px" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#about">
                                <button className="custom-btn btn-1 m-2 ms-4 me-4"><span>ABOUT</span></button></a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects">
                                <button className="custom-btn btn-1 m-2 ms-4 me-4"><span>PROJECTS</span></button></a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact">
                                <button className="custom-btn btn-1 m-2 ms-4 me-4"><span>CONTACT</span></button></a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills">
                                <button className="custom-btn btn-1 m-2 ms-4 me-4"><span>SKILLS</span></button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav