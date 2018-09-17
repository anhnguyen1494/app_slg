import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeComponent from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import ChatTab from './AppTabNavigator/ChatTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

import { createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

const AppTabNavigator = createBottomTabNavigator({

    HomeTab: {
        screen: HomeComponent
    },
    SearchTab: {
        screen: SearchTab

    },
    ChatTab: {
        screen: ChatTab
    },
    ProfileTab: {
        screen: ProfileTab
    }

}, {
    initialRouteName: 'ProfileTab',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: 'mediumseagreen',
        inactiveTintColor: 'white',
        style: {
            backgroundColor: '#3763ae',
        }
    },
});
export default AppTabNavigator;
