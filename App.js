/**
 * App.js
 */
import React from 'react';
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import rootReducer from "./src/redux/reducer"
import NavgationApp from "./src/config/NavgationApp"

const store = createStore(rootReducer, applyMiddleware(thunk));


  export default App extends React.Component {

    render(){
        return(
            <Provider store = {store}>
                <NavgationApp/>
            </Provider>
        )
    }
