console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告
import React from 'react';
import {AppRegistry, Image} from 'react-native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Login from './Login';
import ContactDetail from "./ContactDetail";
import Friend from "./Friend";
import RegisterPage from "./RegisterPage";
import {StackNavigator} from 'react-navigation'
import {
    TabNavigator,
} from 'react-navigation';

const simpleApp = StackNavigator({
    //首页第一个
    Login: {screen: SecondPage},
    Second: {screen: ContactDetail},
}, {headerMode: 'none'});

const SimpleAppNavigator = TabNavigator({
        page1: {
            screen: FirstPage,
            navigationOptions: {
                tabBarLabel: '聊天界面',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./image/3.png')}
                        style={{width: 20, height: 20, resizeMode: 'stretch'}}
                    />
                )
            }
        },
        page2: {
            screen: simpleApp,
            navigationOptions: {
                tabBarLabel: '通讯录',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./image/2.png')}
                        style={{width: 20, height: 20, resizeMode: 'stretch'}}
                    />),
            }

        },
        page3: {
            screen: Friend,
            navigationOptions: {
                tabBarLabel: '朋友圈',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./image/1.png')}
                        style={{width: 20, height: 20, resizeMode: 'stretch'}}
                    />)
            }
        },
    },
    //属性配置
    {
        initialRouteName: 'page1',
        swipeEnabled: true,
        tabBarPosition:"bottom",
        animationEnabled: true,
        lazy: false,
        tabBarOptions:{
            activeTintColor: '#4BC1D2',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#788493',
            pressOpacity: 0.8,
            style:{
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',			},
            showIcon:true,
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: {height: 0},
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
    });

const firstLogin = StackNavigator({
    //首页第一个
    Login: {screen: Login},
    Second: {screen: SimpleAppNavigator},
    Register: {screen: RegisterPage},
}, {headerMode: 'none'});


AppRegistry.registerComponent('Demo', () => firstLogin);
