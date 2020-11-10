import React from "react"

import "./Item.css"

import { Link } from "react-router-dom"

function Item(props) {

    var color = ""
    if (props.rarity === "legendary") {
        color = "yellow"
    } else if (props.rarity === "epic") {
        color = "purple"
    } else if (props.rarity === "rare") {
        color = "blue"
    } else if (props.rarity === "uncommon") {
        color = "green"
    } else if (props.rarity === "common") {
        color = "gray"
    }

    return(
        <div className="item_details_div">
            <Link to="/itemsList"><h2 className="back">&#x21a9; Go Back</h2></Link>
            <h1 className="item_heading">{props.name}</h1>
            <h2 className="item_desc">{props.desc}</h2>
            <nobr className="item_rarity_type">Rarity: <nobr style={{color: color}}>{props.rarity}</nobr></nobr>
            <nobr className="item_rarity_type">Type: {props.type}</nobr>
            <br />
            <img className="item_img" alt="icon" src={props.imgSrc}></img>
        </div>
    )
}

export default Item