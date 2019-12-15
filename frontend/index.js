import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store'

document.getElementById('DomContentLoaded', () => {
    let store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getProps = store.getProps;
    const root = document.getElementById('root');
    ReactDom.render(<Root store={store}/>, root)
})