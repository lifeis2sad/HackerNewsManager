const SET_STORIES = "SET_STORIES"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const defaultState = {
    items: [],
    isFetching: true
}


export default function storiesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_STORIES:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

export const setStories = (stories) => ({type:SET_STORIES, payload:stories})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})