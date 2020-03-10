import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import ModalScreen from './components/ModalScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SettingsScreen from './components/SettingsScreen';
import HomeIconWithBadge from './components/HomeIconWithBadge';

class App extends Component {
    render() {
        return (
            <AppContainer />
        )

    }
}

const MainNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: DetailScreen
},
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
        headerLayoutPreset: 'center'
    })

const StackNavigator = createStackNavigator({
    Main: MainNavigator,
    Modal: ModalScreen
},
    {
        initialRouteName: 'Main',
        headerMode: 'none',
        mode: 'modal'
    })
const TabNavigator = createBottomTabNavigator({
    Home: StackNavigator,
    Settings: SettingsScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor, horizontal }) => {
                const { routeName } = navigation.state;
                let iconName;
                let IconComponent = Ionicons;
                if (routeName == 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    IconComponent = HomeIconWithBadge;
                } else if (routeName == 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }
                return <IconComponent name={'ios-settings'} size={25} color={tintColor} />
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        }
    }
)


const Drawer = initialComponent =>
    createDrawerNavigator({
        Home: initialComponent,
        Settings: SettingsScreen
    },
        {
            hideStatusBar: false,
            drawerBackgroundColor: 'orange',
            overlayColor: '#6b52ae',
            contentOptions: {
                activeTintColor: 'white',
                activeBackgroundColor: 'black'
            }

        }
    );
const AppContainer = createAppContainer(Drawer(TabNavigator));

export default App;