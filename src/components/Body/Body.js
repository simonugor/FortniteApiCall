import React from "react"
//importing Link from React Router
import { Link } from "react-router-dom"
//importing images
import Ghostrider from "./../../images/fortnite1.png"
import Character from "./../../images/fortnite2.png"

import "./Body.css"

function Body(props) {

    function callOnChange(event) {
        props.onChange(event)
    }

    function callOnClick(event) {
        props.itemClick(event)
    }

    const items = props.filteredItems.map(item => {
        return <Link onClick={callOnClick} to="/FortniteApiCall/item"><p id={item.itemId} className="filtered">{item.item.name}</p></Link>
    })

    return (
        <div className="body_div">
            <br />
            <h1 className="heading">Fortnite Items API</h1>
            <input onChange={callOnChange} className="searchbox" placeholder="Search new items" type="search"></input>
            <div className="filtered_div">
                {items}
            </div>
            <p className="or">or find all new items in</p>
            <Link className="link" to="/FortniteApiCall/itemsList">Items List</Link>
            <img className="ghostrider" alt="ghostrider" src={Ghostrider}></img>
            <img className="character" alt="character" src={Character}></img>
        </div>
    )
}

export default Body