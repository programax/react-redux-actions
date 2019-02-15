import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/root';
import store from './redux/store';

const nodes = (
    <Provider store={store}>
        <Root />
    </Provider>
);

ReactDOM.render(nodes, document.getElementById('root'));
