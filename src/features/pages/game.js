import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import startEngine from "../engine/gameEngine"
import Renderer from '../renderer/Renderer'
import { changePage } from "./state/pageActions"

let Game = () => {
    let engine = startEngine()
    let dispatch = useDispatch()
    console.log('once')

    return (
        <g>
            <text fontSize="50" fill="white">You are now in GAME</text>
            
            <Renderer bodies={engine.world.bodies} />
            <circle fill="red" r="25" onClick={() => dispatch(changePage())} />
        </g>
    )
}

export default Game
