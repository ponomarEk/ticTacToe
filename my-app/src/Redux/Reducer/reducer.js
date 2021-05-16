import { CHANGE_VALUE, CHANGE_OPTION, SET_WINNER, CLEAR_FIELD } from '../Actions/actions';

let initialState = {
    data: [{
        id: 1,
        value: ''
    }, {
        id: 2,
        value: ''
    }, {
        id: 3,
        value: ''
    }, {
        id: 4,
        value: ''
    }, {
        id: 5,
        value: ''
    }, {
        id: 6,
        value: ''
    }, {
        id: 7,
        value: ''
    }, {
        id: 8,
        value: ''
    }, {
        id: 9,
        value: ''
    }],
    option: 'circle',
    winId: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_OPTION:
            return {
                ...state,
                option: (state.option === 'circle') ? 'cross' : 'circle'
            }
        case CHANGE_VALUE:
            return {
                ...state,
                data: state.data.map(curr => {
                    if (curr.id === action.payload) {
                        (state.option === 'circle') ? curr.value = '0' : curr.value = 'X'
                        return curr
                    } else {
                        return curr
                    }
                })
            }
        case SET_WINNER:
            return {
                ...state,
                winId: [...action.payload]
            }
        case CLEAR_FIELD:
            return {
                ...state,
                data: state.data.map(curr => {
                    curr.value = '';
                    return curr;
                })
            }
        default: return state;
    }
}