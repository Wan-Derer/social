import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from './StoreContext';

const reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // state={state}
                    // dispatch={store.dispatch.bind(store)}
                    // store={store}
                />
            </Provider>
        </BrowserRouter>, document.getElementById('root'),
    );
};

reRenderEntireTree();

store.subscribe(() => {
    reRenderEntireTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



