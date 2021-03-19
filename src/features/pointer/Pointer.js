import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PointerSVG from './PointerSVG'
import { setPointerCoord, setPointerLClick, setPointerRClick } from "./state/pointerActions"

let Pointer = ({ svg }) => {
    let { coords, show } = useSelector(state => state.pointer)
    let dispatch = useDispatch()

    useEffect(() => {
        svg.oncontextmenu = function(e){
            e.preventDefault()
        }
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
        function click(evt) {
            let pathways = {
                0: () => dispatch(setPointerLClick(true)),
                2: () => dispatch(setPointerRClick(true))
            }
            pathways[evt.button]()
        }
        function release(evt) {
            let pathways = {
                0: () => dispatch(setPointerLClick(false)),
                2: () => {
                    evt.preventDefault()
                    dispatch(setPointerRClick(false))
                }
            }
            pathways[evt.button]()
        }
        svg.addEventListener('mousemove', loc, false)
        svg.addEventListener('mousedown', click, false)
        svg.addEventListener('mouseup', release, false)
       
        return () => {
            svg.removeEventListener('mousemove', loc, false)
            svg.removeEventListener('mousedown', click, false)
            svg.removeEventListener('mouseup', release, false)
        }
    }, [svg, dispatch])

    return (
        <PointerSVG {...coords} show={show} />
    )
}

export default Pointer
