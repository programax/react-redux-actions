import { handleActions } from 'redux-actions';

export default handleActions({
    action1: (state, action) => {
        return [1, 2, 3];
    },

    action2: (state, action) => {
        return [1, 2, 3];
    },
}, []);
