import * as ActionTypes from '../actions/actionTypes';


const initState = {
    userInfo: { name: '', email: '' },
    // load from previous setting when init
    uploadToken: { token: '', fileName: '' },
    selectedGym: localStorage && JSON.parse(localStorage.getItem(SELECTED_GYM_KEY)) ? JSON.parse(localStorage.getItem(SELECTED_GYM_KEY)) : {},
    loading: false,
    errorMsg: '',
    successMsg: '',
};

const NON_ACTION = {
    type: ActionTypes.SWITCH_GYM
};

const setting = (state = initState, action = NON_ACTION) => {
    switch (action.type) {
        case ActionTypes.SWITCH_GYM:
            // load from local storage
            if (localStorage) {
                localStorage.setItem(SELECTED_GYM_KEY, JSON.stringify(action.value))
            }
            return Object.assign({}, state, { selectedGym: action.value });

        case ActionTypes.UPDATE_GYM:
            return Object.assign({}, state, { loading: true });
        case ActionTypes.UPDATE_GYM_SUCCESS:
            localStorage.setItem(SELECTED_GYM_KEY, JSON.stringify(action.payload.data))
            return Object.assign({}, state, {
                loading: false,
                successMsg: 'Update gym setting success',
                selectedGym: action.payload.data
            });
        case ActionTypes.UPDATE_GYM_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'Update gym setting failed',
                loading: false
            });

        case ActionTypes.LOAD_UPLOAD_TOKEN:
            return Object.assign({}, state, { loading: true });
        case ActionTypes.LOAD_UPLOAD_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                uploadToken: action.payload.data
            });
        case ActionTypes.LOAD_UPLOAD_TOKEN_FAIL:
            return Object.assign({}, state, {
                errorMsg: 'upload token load failed',
                loading: false
            });

        case ActionTypes.SHOW_ERR_MSG:
            return Object.assign({}, state, {
                errorMsg: action.value,
            });
        case ActionTypes.SHOW_SUCCESS_MSG:
            return Object.assign({}, state, {
                successMsg: action.value,
            });

        case ActionTypes.CLOSE_ERR_MSG:
            return Object.assign({}, state, {
                errorMsg: '',
            });
        case ActionTypes.CLOSE_SUCCESS_MSG:
            return Object.assign({}, state, {
                successMsg: '',
            });
        default:
            return state;
    }
};

export default setting;