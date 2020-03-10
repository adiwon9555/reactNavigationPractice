import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DetailScreen extends Component {
    static navigationOptions = ({ navigation,navigationOptions }) => {
        return {
            title: navigation.getParam('header', 'Default Header'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
            headerTitleStyle: {
                fontStyle: 'italic'
            }
        }
    }
    render() {
        const { navigation } = this.props;
        const number = navigation.getParam('number', 1);
        const randNum = (Math.random() * 10).toFixed(0);
        const newNumber = number * randNum;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>DetailScreen</Text>
                <Text>{`${number} * ${randNum} = ${newNumber}`}</Text>

                <Button
                    title='Go to Details again'
                    onPress={() => {
                        navigation.push('Details', {
                            number: newNumber,
                            header: 'Modified Header'
                        })
                    }}
                />
                <Button
                    title='go Homescreen'
                    onPress={() => {
                        // this.props.navigation.navigate('Home') OR
                        navigation.popToTop()
                        // this.props.navigation.push('Home')
                    }}
                />
                <Button
                    title='back'
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>
        )

    }
}


export default DetailScreen;