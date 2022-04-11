import React from 'react'
import img from "../assets/img/picture.png"

const Hero = () => {
    return (
        <div className="header">
            <article className="hero">
                <section className="hero-text">
                    <p>Hi, I'm</p>
                    <div className="name">
                        <span>M</span>
                        <span>O</span>
                        <span>H</span>
                        <span>A</span>
                        <span>M</span>
                        <span>M</span>
                        <span>A</span>
                        <span>D</span>
                    </div>
                    <p>Fullstack (MERN Stack) <br /> Web Developer </p>
                </section>
                <section className="hero-img">
                    <img src={img} alt="" />
                </section>
            </article>
        </div >
    )
}

export default Hero