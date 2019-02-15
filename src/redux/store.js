import { createStore, combineReducers } from 'redux';
import posts from './reducers/posts';
import comments from './reducers/comments';

const reducer = combineReducers({
    posts,
    comments,
});

const store = createStore(reducer);

export default store;
