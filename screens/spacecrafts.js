import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function spacecrafts({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ margin: 20 }} onPress={() => { navigation.navigate("HOME") }}>
                <Text>HOME SCREEN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 20 }} onPress={() => { navigation.navigate("DAILY PICKS") }}>
                <Text>DAILY PICK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 20 }} onPress={() => { navigation.navigate("SPACECRAFTS") }}>
                <Text>SPACECRAFTS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 20 }} onPress={() => { navigation.navigate("STAR MAP") }}>
                <Text>STAR MAP</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
