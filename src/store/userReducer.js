import { StaticRouter } from "react-router-dom"

const initialState = {
    isLogin : false,
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'requestLogin':
            return {isLogin: false, loading: true}
            case 'loginSuccess':
                return {isLogin: true, loading: false}
                case 'loginFailure':
                    return {isLogin: false, loading: false}
                    default:
                        return state
    }
}

export function login(User){
    return dispatch => {
        dispatch({type: 'requestLogin'})
        setTimeout(()=> {
            dispatch({type: 'loginSuccess'})
        }, 1000)
    }
}