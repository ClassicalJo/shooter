import React from 'react'

let PointerSVG = ({ x, y, show }) => {
    return (
        <g display={show ? "inline" : "none"}>
            <circle cx={x} cy={y} r={25} fill="white" opacity="0" >
                <animate 
                    attributeName="opacity"
                    from='0'
                    to="1"
                    dur="1s"
                    begin="1s"
                    fill='freeze'
                />
            </circle>
        </g>
    )
}

export default PointerSVG
