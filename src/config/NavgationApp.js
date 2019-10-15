/**
 * NavgationApp.js
 */
import React from 'react';
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginPage from "../page/Login/loginPage";
import RegPage from "../page/Login/regPage";
import ArticleDetail from "../page/ArticleDetail";
import FindAccountPage from "../page/Login/findAccountPage"; 
import {TabNav} from "../config/RootPage";
import rootReducer from "../redux/reducer"

const store = createStore(rootReducer, applyMiddleware(thunk));
const NavgationApp = createStackNavigator({
        Login: {screen: LoginPage}, // 登录页
        Reg: {screen: RegPage}, // 注册页
        FindAccount: {screen: FindAccountPage}, // 找回密码页
        ArticleDetail:{screen:ArticleDetail},
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'screen'
    });

  export default createAppContainer(NavgationApp);