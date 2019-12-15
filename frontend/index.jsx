import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

document.addEventListener('DomContentLoaded', () => {
    let store = configureStore();
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getProps = store.getProps;
    const root = document.getElementById('root');
    ReactDom.render(<Root store={store}/>, root)
})