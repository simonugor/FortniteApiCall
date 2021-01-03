import React, { useEffect, useState } from "react"
//importing components
import ItemsList from "./components/ItemsList/ItemsList"
import Body from "./components/Body/Body"
import Item from "./components/Item/Item"
import Loading from "./components/Loading/Loading"
//importing React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  const [itemName, setItemName] = useState("")
  const [itemDesc, setItemDesc] = useState("")
  const [itemRarity, setItemRarity] = useState("")
  const [itemType, setItemType] = useState("")
  const [imgSrc, setImgSrc] = useState("")

  useEffect(() => {
    fetch("https://fortnite-api.theapinetwork.com/store/get")
      .then(res => res.json())
      .then(json => {
        setIsLoaded(true)
        setItems(json.data)
      })
  }, [])

  console.log(items)
  console.log(search)

  function onChange(event) {
    setSearch(event.target.value)
  }

  const filteredItems = items.filter(item => {
    if (search !== "") {
      return item.item.name.toLowerCase().includes(search.toLowerCase())
    } else {
      return ""
    }
  })

  function itemClick(event) {
    var id = event.target.id
    items.map(item => {
      if (id === item.itemId) {
        setItemName(item.item.name)
        setItemDesc(item.item.description)
        setItemRarity(item.item.rarity)
        setItemType(item.item.type)
        setImgSrc(item.item.images.icon)
      }
      return item
    })
  }
  
  if (isLoaded === true) {
    return(
      <Router>
        <div className="app_div">
          <Switch>
            <Route exact path="/FortniteApiCall/">
              <Body itemClick={itemClick} filteredItems={filteredItems} onChange={onChange} />
            </Route>
            <Route exact path="/FortniteApiCall/itemsList">
              <ItemsList itemClick={itemClick} items={items} />
            </Route>
            <Route exact path="/FortniteApiCall/item">
              <Item 
                name={itemName}
                desc={itemDesc}
                rarity={itemRarity}
                type={itemType}
                imgSrc={imgSrc}
              />
            </Route>
          </Switch>
          <a href="https://myportfo1io.online/"><button className="btp-button">Back to portfolio</button></a>
        </div>
      </Router>
    )
  } else {
    return <Loading />
  }
}

export default App;
