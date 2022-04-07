import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="flip-card">
                <div className="flip-card__container">
                    <div className="card-front">
                        <div className="card-front__tp card-front__tp--city">
                            <h2 className="card-front__heading">
                                {props.name}
                            </h2>
                        </div>
                        <div className="card-front__bt">
                            <p className="card-front__text-view card-front__text-view--city">
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
                    <h3 className="inside-page__heading inside-page__heading--city">
                        {props.title}
                    </h3>
                    <p className="inside-page__text">
                        {props.text}
                    </p>
                    <a href={props.link} className="inside-page__btn inside-page__btn--city" target="_blank" rel="noreferrer">Visit Site</a>
                </div>
            </div>
        </div>
    )
}

export default Card