import React, { useEffect, useState } from 'react'

let Renderer = ({ bodies }) => {
    let [renders, setRenders] = useState(bodies)
    let updateCycle = () => {
        console.log("running")
        setRenders([...bodies])
    }
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
    }, [])
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
