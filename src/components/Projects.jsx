import React from 'react'
import Project from './Project'
import Jemma from "../assets/img/JEMMA-Tours.jpg"
import Astrein from "../assets/img/Astrein-Schreinerei.png"
import rps from "../assets/img/R-P-S.png"
import Crypto from "../assets/img/Crypto-Tracker.png"
import California from "../assets/img/California-Calling.png"
import Illustrations from "../assets/img/Illustrations.png"
import Roma from "../assets/img/Roma.png"
import Poke from "../assets/img/Poke-Dex.png"
import Chuck from "../assets/img/Chuck.png"
import Fake from "../assets/img/Fake.png"
import HH from "../assets/img/HH.png"
import Designer from "../assets/img/Designer.png"


const Projects = () => {
    return (
        <article className="projects" id="projects">
            <h2>Here you can see some of my projects:</h2>
            <section className="card-area">
                <Project name="JEMMA-Tours"
                    title="For nature lovers"
                    text="Outdoor tours and activities around US!"
                    link="https://jemma-tours.herokuapp.com/"
                    img={Jemma}
                />
                <Project name="Crypto Tracker"
                    title="Top 100 Crypto"
                    text="Tracking information of most valuable crypto."
                    link="https://crypto-tracker-12358.netlify.app/"
                    img={Crypto}
                />
                <Project name="Chuck Norris"
                    title="Chuck's Jokes"
                    text="Some categorized jokes from Chuck's API "
                    link="https://chuck-norris-jokes-12358.netlify.app/"
                    img={Chuck}
                />
                <Project name="Astrein Schreinerei"
                    title="New Business"
                    text="Web site for new business in Germany!"
                    link="https://youthful-wright-2ab027.netlify.app/"
                    img={Astrein}
                />
                <Project name="Fake Shop"
                    title="Online Shop"
                    text="Simple online shop using fake API."
                    link="https://fake-api-shop.netlify.app/"
                    img={Fake}
                />
                <Project name="Rock Paper Scissor"
                    title="Simple Game"
                    text="Simple classic game again CPU"
                    link="https://m-olfatee.github.io/R-P-S/"
                    img={rps}
                />
                <Project name="California Calling"
                    title="Rebuild Website"
                    text="Rebuild of California Calling landing page"
                    link="https://m-olfatee.github.io/California-Calling/"
                    img={California}
                />
                <Project name="Illustrations"
                    title="Rebuild Website"
                    text="Rebuild of Illustrations landing page"
                    link="https://m-olfatee.github.io/illustrations/"
                    img={Illustrations}
                />
                <Project name="Poke-Dex"
                    title="Pokemon Lovers"
                    text="Show all pokemon cards wit API and React"
                    link="https://elastic-brattain-913ab9.netlify.app/"
                    img={Poke}
                />
                <Project name="Roma"
                    title="Rebuild Website"
                    text="Rebuild of Roma movie landing page"
                    link="https://m-olfatee.github.io/Roma/"
                    img={Roma}
                />
                <Project name="H&H"
                    title="Simple landing page"
                    text="Simple landing page with different design. "
                    link="https://m-olfatee.github.io/H-H/"
                    img={HH}
                />
                <Project name="Designer Challenge"
                    title="Simple landing page"
                    text="Simple landing page with different design. "
                    link="https://m-olfatee.github.io/Designer-Challenge/"
                    img={Designer}
                />
            </section>
        </article>
    )
}

export default Projects