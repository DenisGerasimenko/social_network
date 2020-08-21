import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import storeRedux from "./redux/redux-store";
import {Provider} from "react-redux";
import {RootStateType} from "./redux/store";
import reduxStore from "./redux/redux-store";


let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={reduxStore.dispatch.bind(reduxStore)}
                 reduxStore={reduxStore}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(reduxStore.getState());

storeRedux.subscribe(() => {
    let state = reduxStore.getState();
    rerenderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






