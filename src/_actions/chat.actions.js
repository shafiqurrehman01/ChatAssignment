import { ADD_MESSAGE } from '../_constants';

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        payload: message
    };
}

