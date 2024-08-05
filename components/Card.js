import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card-container">
        <img src={`${props.item.imageUrl}`}></img>
        <div>
        <div className="text-container">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <h3>{`${props.item.location}`}</h3>
        <a href={`${props.item.googleMapsUrl}`} target="_blank">View on Google Maps</a>
        </div>
        <h1>{`${props.item.title}`}</h1>
        <h3><strong>{`${props.item.startDate} - ${props.item.endDate}`}</strong></h3>
        <p>{`${props.item.description}`}</p>
        </div>
        </div>
    )
}