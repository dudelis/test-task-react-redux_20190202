import { getSampleData } from '../utils';

export const getData = (length, minHeight, maxHeight) => {
    return {
        type: 'GET_DATA',
        payload: getSampleData(length, minHeight, maxHeight)
    }
}

export const selectItem = (index) =>{
    return {
        type: 'SELECT_ITEM',
        payload: {index}
    }
}