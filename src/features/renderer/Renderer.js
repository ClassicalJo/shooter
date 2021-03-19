import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

let Renderer = ({ bodies }) => {
    let [renders, setRenders] = useState(bodies)
    let pointer = useSelector(state => state.pointer)
    let keyboard = useSelector(state => state.keyboard)

    let mouseRef = useRef()
    mouseRef.current = pointer

    let keyboardRef = useRef()
    keyboardRef.current = keyboard
    
    let updateCycle = useCallback(() => {
        setRenders([...bodies])
    }, [bodies])

    useEffect(() => {
        let loop;
        let cycle = () => {
            updateCycle()
            loop = requestAnimationFrame(cycle)
        }
        let finishCycle = () => {
            cancelAnimationFrame(loop)
        }
        cycle()
        return finishCycle
    }, [updateCycle])
    return (
        <g>
            {renders.map(key => {
                let { position, width, height, id } = key

                return (
                    <rect key={id} x={position.x} y={position.y} width={width} height={height} fill='grey' />
                )
            })}
        </g>
    )
}

export default Renderer
