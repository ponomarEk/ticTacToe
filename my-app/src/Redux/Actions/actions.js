export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_OPTION = 'CHANGE_OPTION';
export const SET_WINNER = 'SET_WINNER';
export const CLEAR_FIELD = 'CLEAR_FIELD';


export const changeValue = (newValue) => {
    return {
        type: CHANGE_VALUE,
        payload: newValue
    }
}

export const changeOption = (newValue) => {
    return {
        type: CHANGE_OPTION,
        payload: newValue
    }
}

export const setWinner = (newValue) => {
    return {
        type: SET_WINNER,
        payload: newValue
    }
}

export const clearField = (newValue) => {
    return {
        type: CLEAR_FIELD,
        payload: newValue
    }
}