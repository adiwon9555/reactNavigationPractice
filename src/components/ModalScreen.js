import React from 'react'
import { Image, View, Text, Button, BackHandler } from 'react-native'

export default ModalScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Close App?</Text>
            <Button
                title='Cancel'
                onPress={() => {
                    navigation.goBack()
                }}
            />
            <Button
                title='Exit'
                onPress={() => {
                    BackHandler.exitApp();
                }}
            />
        </View>

    )
}