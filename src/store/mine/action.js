import * as type from './types';

//示例
export const getActiveTab = tab => {
    return dispatch => {
        let action = {
            type: type.ACTIVETAB,
            tab
        };
        dispatch(action);
    }
}