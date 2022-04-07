import React from 'react'
import Card from './Card'

const Project = (props) => {
    return (
        <section className="card-section">
            <Card name={props.name} title={props.title} text={props.text} link={props.link} img={props.img} />
        </section>
    )
}

export default Project