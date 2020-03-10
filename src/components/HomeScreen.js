import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Logo from './Logo';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ 'increaseCount': this.increaseCount });
    }
    static navigationOptions = ({ navigation }) => {
        return {
            // title: 'Home',
            headerTitle: <Logo />,
            headerRight: (
                <TouchableOpacity
                    onPress={navigation.getParam('increaseCount')}
                    style={{ paddingRight: 20 }}
                >
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Add 1</Text>
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Modal')}
                    style={{ paddingLeft: 20 }}
                >
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Exit</Text>
                </TouchableOpacity>
            ),
        }
    }

    increaseCount = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HomeScreen</Text>
                <Text>number : {this.state.number}</Text>
                <Button
                    title='Go to Details'
                    onPress={() => {
                        this.props.navigation.navigate('Details')
                    }}
                />
                <Button
                    title='Open Modal'
                    onPress={() => {
                        this.props.navigation.navigate('Modal')
                    }}
                />
                <Button
                    title='Open Drawer'
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}
                />
            </View>

        )

    }
}


export default HomeScreen;