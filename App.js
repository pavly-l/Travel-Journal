import React from "react"
import Header from "./components/Header.js"
import Card from "./components/Card.js"
import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        
        return (
            <Card
            key={item.id}
            item={item} />
        )
    })  
    return (
        <div className="container">
            <Header />
            <main>
            {cards}
            </main>
        </div>
    )
}