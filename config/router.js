import React from 'react';
import { TabNavigator,StackNavigator }from 'react-navigation';

import SignUpForm from '../login/SignUpForm';


export const StackTabs = StackNavigator({
    SignUpForm: {
        title : 'SignUp',
        navigationOptions:{
            title : 'Feed',
        }
    },
});


export const Tabs = TabNavigator({
    SignUpForm: {
        title : 'SignUpTab',
        navigationOptions:{
            tabBar:{
                label : 'Feed',
            }
        }
    },
});
