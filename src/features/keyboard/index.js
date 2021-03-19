import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pressKey, releaseKey } from "./state/keyboardActions"


let Keyboard = ({ svg }) => {
    let dispatch = useDispatch()
    let { map } = useSelector(state => state.keyboard)
    let mapRef = useRef()
    mapRef.current = map
    useEffect(() => {
        function addKey(evt) {
            if (evt.repeat) return
            dispatch(pressKey(evt.key))
        }
        function removeKey(evt) {
            dispatch(releaseKey(evt.key))
        }
        window.addEventListener('keydown', addKey, false)
        window.addEventListener('keyup', removeKey, false)
        return () => {
    
            window.removeEventListener('keydown', addKey, false)
            window.removeEventListener('keyup', removeKey, false)
        }
    }, [svg, dispatch])
    return (<></>)
}
export default Keyboard
