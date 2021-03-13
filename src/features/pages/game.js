import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import startEngine from "../engine/gameEngine"
import Renderer from '../renderer/Renderer'
import { changePage } from "./state/pageActions"
import { Engine, World, Runner } from 'matter-js'

let Game = () => {

    let [bodies, setBodies] = useState([])
    let dispatch = useDispatch()
    useEffect(() => {
        let loop;
        let engine = startEngine()
        let updateCycle = () => {
            console.log('running')
            setBodies([...engine.world.bodies])
        }
        let cycle = () => {
            updateCycle()
            loop = requestAnimationFrame(cycle)
        }
        let finishCycle = () => {
            cancelAnimationFrame(loop)
            World.clear(engine.world);
            Engine.clear(engine);
        }
        cycle()
        return finishCycle
    }, [])
    return (
        <g>
            <text fontSize="50" fill="white">You are now in GAME</text>
            <Renderer bodies={bodies} />
            <circle fill="red" r="25" onClick={() => dispatch(changePage())} />
        </g>
    )
}

export default Game
