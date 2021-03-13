import Home from "./home"
import React from 'react'
import { useSelector } from "react-redux"
import Game from "./game"

let Pages = () => {
    let { currentPage } = useSelector(state => state.pages)
    switch (currentPage) {
        case "home": return <Home />
        case "game": return <Game />
        default: return <Home />
    }
}

export default Pages
