import { SET_SPRINTS } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case SET_SPRINTS:
            return action.payload
        default:
            return state
    }
}