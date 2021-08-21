import * as ActionTypes from './actionTypes'

export function switchGym(value) {
    return {
        type: ActionTypes.SWITCH_GYM,
        value
    };
}

export function changePwd(currentPwd, newPwd) {
    return {
        type: ActionTypes.CHANGE_PWD,
        payload: {
            request: {
                method: 'post',
                url: '/auth/reset',
                data: {
                    currentPassword: currentPwd,
                    newPassword: newPwd
                }
            }
        }
    }
}

export function loadLoggedInCoachInfo() {
    return {
        type: ActionTypes.LOAD_LOGGED_IN_COACH_INFO,
        payload: {
            request:{
                url:'/coach'
            }
        }
    }
}

export function refreshUploadToken(params) {
    return  {
        type: ActionTypes.LOAD_UPLOAD_TOKEN,
        payload: {
            request:{
                url:'/token/upload',
                params
            }
        }
    }
}

export function showError(value) {
    return {
        type: ActionTypes.SHOW_ERR_MSG,
        value
    };
}

export function showSuccess(value) {
    return {
        type: ActionTypes.SHOW_SUCCESS_MSG,
        value
    };
}