
import Cookies from 'js-cookie'
import API from '.API'

//登陆

export const loginAction = (state) => {
    return function (dispatch, getState) {
        API.login(state).then(data => {

            dispatch()
        }).catch(err => {       
            Toast.offline(err.message, 1);            
        })
    }
}
export const userToken = (token) => ({
    type: UserToken,
    token
})


export const USER_NAME = 'username'
export const UserToken = 'UserToken'