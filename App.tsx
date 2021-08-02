import 'react-native-gesture-handler';

import * as React from 'react';
import {PixelRatio} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './src/presentation/screens/HomeScreen';
import ExploreScreen from './src/presentation/screens/ExploreScreen';
import SettingScreen from './src/presentation/screens/SettingScreen';
import ProfileScreen from './src/presentation/screens/ProfileScreen';
import RandomScreen from './src/presentation/screens/RandomScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const topTab = createMaterialTopTabNavigator();

let tabBottomFontSize = 20;

if (PixelRatio.get() <= 2) {
    tabBottomFontSize = 40;
}

const BottomTabStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    textAlign: 'center',
                    fontSize: tabBottomFontSize,
                },
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home Screen',
                }}
            />
            <Tab.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore Screen',
                }}
            />
        </Tab.Navigator>
    );
};

const TopTabStack = () => {
    return (
        <topTab.Navigator initialRouteName="ProfileScreen">
            <topTab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Home Screen',
                }}
            />
            <topTab.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore Screen',
                }}
            />
        </topTab.Navigator>
    );
};

const HomeScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="BottomTabStack"
                component={BottomTabStack}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="TopTabStack"
                component={TopTabStack}
                options={{
                    headerTitle: 'Top Tap Example',
                }}
            />
            <Stack.Screen
                name="RandomScreen"
                component={RandomScreen}
                options={{
                    headerTitle: 'Top Tap Example',
                }}
            />
        </Stack.Navigator>
    );
};

const SettingScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="SettingScreen"
        >
            <Stack.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeScreenStack"
                screenOptions={{
                    headerShown: false,
                    drawerActiveTintColor: '#e91e63',
                }}
            >
                <Drawer.Screen
                    name="ProfileScreen"
                    options={{drawerLabel: 'Profile Screen Option'}}
                    component={ProfileScreen}
                />
                <Drawer.Screen
                    name="HomeScreenStack"
                    options={{drawerLabel: 'Home Screen Option'}}
                    component={HomeScreenStack}
                />
                <Drawer.Screen
                    name="SettingScreenStack"
                    options={{drawerLabel: 'Setting Screen Option'}}
                    component={SettingScreenStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
