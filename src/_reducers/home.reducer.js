import { ADD_MESSAGE } from '../_constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
    messages: []
});

export const homereducer = (state, action) => {
    state = state || INITIAL_STATE;
    switch (action.type) {
        case ADD_MESSAGE:
            return state.update('messages', (messages) => messages.concat(action.payload));
        default:
            return state;
    }
}


