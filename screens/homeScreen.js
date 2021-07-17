import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function homeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.container} source={require("../assets/space.gif")}>
            <Image source={require("../assets/main-icon.png")} style={{ width: 150, height: 150 }} />
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("DAILY PICKS") }}>
                <Image source={require("../assets/daily_pictures_i.png")} style={{ width: 50, height: 50 }} />
                <Text style={styles.text}>DAILY PICK</Text>
                <Image source={require("../assets/daily_pictures.png")} style={{ width: 50, height: 50 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("SPACECRAFTS") }}>
                <Image source={require("../assets/space_crafts.png")} style={{ width: 40, height: 40 }} />
                <Text style={styles.text}>SPACECRAFTS</Text>
                <Image source={require("../assets/space_crafts_i.png")} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("STAR MAP") }}>
                <Image source={require("../assets/star_map.png")} style={{ width: 40, height: 40 }} />
                <Text style={styles.text}>STAR MAP</Text>
                <Image source={require("../assets/star_map_i.png")} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
    }, button: {
        margin: 20,
        backgroundColor: "#68f",
        borderRadius: 6,
        width: "60%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row-reverse"
    }, text: {
        fontSize: 20,
        // position: "absolute",
        fontWeight: "bold",
        color: "#fff"
    }
});
