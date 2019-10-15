import { combineReducers } from 'redux'
import {
    UserToken,    
} from './actions'

const appInitialState = {
    title: '农业',
}
const serverInitialState = {
    token: undefined, 
}

function appReducer(state = appInitialState, action) {
    switch (action.type) {
   
        default:
            return state
    }
}
function serverReducer(state = serverInitialState, action) {
    switch (action.type) {
        case UserToken:
            return { ...state, token: action.token }
        default:
            return state
    }

}
const rootReducer = combineReducers({
    app: appReducer, server: serverReducer
})

export default rootReducer