import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Pointer from '../pointer/Pointer'
import Keyboard from "../keyboard/index"
import { theaterReady } from "./state/theaterActions"
import Pages from "../pages"

let Theater = () => {
    let svgRef = useRef()
    let svg = svgRef.current
    let ready = useSelector(state => state.theater.ready)
    let dispatch = useDispatch()
    function startTheater() {
        if (!ready) dispatch(theaterReady())
    }
    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="-1000 -500 2000 1000"
            preserveAspectRatio="xMidYMid"
            onClick={startTheater}
        >
            <rect width="1000" height="250" x="-1000" y="-500" fill="black" />
            {ready && (
                <g>
                    <Pointer svg={svg} />
                    <Keyboard svg={svg} />
                    <Pages />
                </g>
            )}
        </svg>
    )
}

export default Theater
