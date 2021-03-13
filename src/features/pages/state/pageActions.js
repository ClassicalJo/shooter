export const CHANGE_PAGE = "Change the current page to a new string"

export function changePage(str) {
    return {
        type: CHANGE_PAGE,
        payload: str
    }
}
