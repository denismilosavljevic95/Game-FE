import * as actionTypes from './actionTypes';

const initialState = 
{
}


const reducer = (state = initialState, action) => 
{
    switch ( action.type )
    {
        case actionTypes.FETCH_MY_BATTLES:
            return Object.assign({}, state, {
                battles: null,
                isLoading: true,
                error: false,
                errorMessage: null
            });
        case actionTypes.FETCH_MY_BATTLES_SUCCESS:
            return Object.assign({}, state, {
                battles: action.data,
                isLoading: false,
                error: false,
                errorMessage: null
            });
        case actionTypes.FETCH_MY_BATTLES_FAIL:
            return Object.assign({}, state, {
                battles: null,
                isLoading: false,
                error: true,
                errorMessage: action.data
            });
        case actionTypes.FETCH_LOGS:
            return Object.assign({}, state, {
                logs: null,
                isLoading: true,
                error: false,
                errorMessage: null
            });
        case actionTypes.FETCH_LOGS_SUCCESS:
            return Object.assign({}, state, {
                logs: action.data,
                isLoading: false,
                error: false,
                errorMessage: null
            });
        case actionTypes.FETCH_LOGS_FAIL:
            return Object.assign({}, state, {
                logs: null,
                isLoading: false,
                error: true,
                errorMessage: action.data
            });
        case actionTypes.RESET_BATTLE:
            return Object.assign({}, state, {
                isLoading: true,
                error: false,
                errorMessage: null
            });
        case actionTypes.RESET_BATTLE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                error: false,
                errorMessage: null
            });
        case actionTypes.RESET_BATTLE_FAIL:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                errorMessage: action.data
            });
        case actionTypes.NEW_BATTLE:
            return Object.assign({}, state, {
                isLoading: true,
                error: false,
                errorMessage: null
            });
        case actionTypes.NEW_BATTLE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                error: false,
                errorMessage: null
            });
        case actionTypes.NEW_BATTLE_FAIL:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                errorMessage: action.data
            });
        case actionTypes.NEW_ATTACK:
            return Object.assign({}, state, {
                isLoading: true,
                error: false,
                errorMessage: null
            });
        case actionTypes.NEW_ATTACK_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                error: false,
                errorMessage: null
            });
        case actionTypes.NEW_ATTACK_FAIL:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                errorMessage: action.data
            });
        default:
            return state;
    }
}

export default reducer;