import React from "react"

import "./ItemsList.css"

import { Link } from "react-router-dom"

function ItemsList(props) {

    function itemClick(event) {
        props.itemClick(event)
    }

    var x = "borderto"

    var items = props.items.map(item => {
        x += "p" //not really solution I'm proud of
        return ( //item.item.name just because it is that way in api
            <div id={x} key={item.itemId} className="item_div">
                <img alt={item.item.name} src={item.item.images.icon} width="70vw"></img>
                <nobr><Link className="item_link" id={item.itemId} onClick={itemClick} to="/FortniteApiCall/item">{item.item.name} - {item.item.rarity}</Link></nobr>
            </div>
        )
    })

    return(
        <div className="items_list_div">
            <Link to="/FortniteApiCall/"><h2 className="back">&#x21a9; Go Back</h2></Link>
            <h1 className="heading">Items List</h1>
            <p className="click_on">Click on the name of item to learn more</p>
            {items}
        </div>
    )
}

export default ItemsList