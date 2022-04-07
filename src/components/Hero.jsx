import React from 'react'
import img from "../assets/img/picture.png"

const Hero = () => {
    return (
        <div className="header">
            <article className="hero">
                <section className="hero-text">
                    <p>Hi, I'm</p>
                    <div className="name">
                        <span className="letterAnimationTest1">M</span>
                        <span className="letterAnimationTest2">O</span>
                        <span className="letterAnimationTest3">H</span>
                        <span className="letterAnimationTest4">A</span>
                        <span className="letterAnimationTest5">M</span>
                        <span className="letterAnimationTest3">M</span>
                        <span className="letterAnimationTest4">A</span>
                        <span className="letterAnimationTest5">D</span>
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