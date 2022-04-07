import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="flip-card">
                <div className="flip-card__container">
                    <div className="card-front">
                        <div className="card-front__tp">
                            <h2 className="card-front__heading">
                                {props.name}
                            </h2>
                        </div>
                        <div className="card-front__bt">
                            <p className="card-front__text-view">
                                View more
                            </p>
                        </div>
                    </div>
                    <div className="card-back">
                        <img src={props.img} alt={props.name} />
                    </div>
                </div>
            </div>
            <div className="inside-page">
                <div className="inside-page__container">
                    <h3 className="inside-page__heading">
                        {props.title}
                    </h3>
                    <p className="inside-page__text">
                        {props.text}
                    </p>
                    <a href={props.link} className="inside-page__btn" target="_blank" rel="noreferrer">Visit Site</a>
                </div>
            </div>
        </div>
    )
}

export default Card