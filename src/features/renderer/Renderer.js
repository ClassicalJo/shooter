import React from 'react'

let Renderer = ({ bodies }) => {
    let ids = bodies.map(key => key.id)
    return (
        <g>
            {bodies.map(key => {
                let { position, width, height, id } = key
                
                return (
                    <rect key={id}x={position.x} y={position.y} width={width} height={height} fill='grey' />
                )
            })}
        </g>
    )
}

export default Renderer
