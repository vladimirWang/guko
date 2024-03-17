import {incrementAction} from './action'

const initialState = {
    count: 0
}

export const treasure = (prevState = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...prevState,
            count: prevState.count + 1
        }
    } else if (action.type === 'decrement') {
        return {
            ...prevState,
            count: prevState.count - 1
        }
    } else if (action.type === 'asyncIncrement') {
        return (dispatch) => {
            console.log('dispatch', dispatch);
            setTimeout(() => {
                dispatch(incrementAction())
            }, 2000);
        }
    } else {
        return prevState;
    }
}