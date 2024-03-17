import {INCREMENT} from './types'

export const incrementAction = () => ({type: INCREMENT})
export const asyncIncrementAction = (data) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(incrementAction())
        }, 2000);
    }
}