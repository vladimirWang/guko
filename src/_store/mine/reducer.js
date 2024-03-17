import * as type from './types';

let initState = {
    activeTab: 'tab1'
};

export const mineData = (state = initState, action) => {
    switch (action.type) {
        //示例
        case type.ACTIVETAB:
            return { ...state, activeTab: action.tab };
        default:
            return { ...state };
    }
};

