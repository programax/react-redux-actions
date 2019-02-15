import { handleActions } from 'redux-actions';
import { action1, action2 } from '../actions';

export default handleActions({
    [action1]: (state, action) => {
        return [1, 2, 3];
    },

    [action2]: (state, action) => {
        return [1, 2, 3];
    },
}, []);
