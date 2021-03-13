import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PointerSVG from './PointerSVG'
import { setPointerCoord } from "./state/pointerActions"

let Pointer = ({ svg }) => {
    let { coords, show } = useSelector(state => state.pointer)
    let dispatch = useDispatch()

    useEffect(() => {
        let pt = svg.createSVGPoint()
        function cursorPoint(evt) {
            pt.x = evt.clientX
            pt.y = evt.clientY
            return pt.matrixTransform(svg.getScreenCTM().inverse());
        }
        function loc(evt) {
            var loc = cursorPoint(evt);
            dispatch(setPointerCoord(loc))
        }
        svg.addEventListener('mousemove', loc, false)
        return () => svg.removeEventListener('mousemove', loc, false)
    }, [svg, dispatch])
    
    return (
        <PointerSVG {...coords} show={show} />
    )
}

export default Pointer
