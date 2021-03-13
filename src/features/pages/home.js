import React from 'react'
import { useDispatch } from 'react-redux'
import { changePage } from "./state/pageActions"
let Home = () => {
    let dispatch = useDispatch()
    const toGame = () => dispatch(changePage("game"))
    return (
        <g>
            <text fontSize='50' fill='white'>You are now in HOME</text>
            <circle cy="100" fill="yellow" r="50" onClick={toGame} />
        </g>
    )
}

export default Home
