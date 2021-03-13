export const THEATER_READY = "Theater SVG has correctly loaded."

export function theaterReady() {
    return {
        type: THEATER_READY,
        payload: true
    }
}
