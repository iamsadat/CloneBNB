import React from "react"

export default function Card(props) {
    return(
        <div className="card--list">
            <a className="card--wiki" href={`${props.wiki}`} target="_blank">
            <div className="card">
                <h3> {props.name} </h3>
                <img src={`${props.img}`} className="card--img" />
                <p>{props.info}</p>
                <p><img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png" className="card--star"/> Ratings: <span className="rating"> {props.rating}</span>/5 </p>
            </div>
            </a>
        </div>
    )
}