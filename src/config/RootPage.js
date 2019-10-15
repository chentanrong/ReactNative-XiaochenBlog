
import React from 'react';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Home from '../page/Home';
import Mine from '../page/Mine';

export const TabNav = createBottomTabNavigator (
    {
        Home: {
            screen: Home,
        },
        Mine: {
            screen: Mine,
        }
    });
export default createAppContainer(TabNav);