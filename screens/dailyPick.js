import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, ImageBackground, Alert } from 'react-native';
import { WebView } from "react-native-webview";

import axios from "axios";

export default function dailyPick({ navigation }) {
    const [data, setdata] = useState(false);
    const [axiosData, setaxiosData] = useState({});
    const [image, setimage] = useState("../assets/stars.gif")

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=j19nJaXJDUmM67xBhXBeggNoq47zmFCjCXgpkQ3b").then((response) => {
            setaxiosData(response.data);
            // setimage("https://apod.nasa.gov/apod/image/2107/2021Jul11MarsVenusMoon_ShiHuan1024.jpg");
            setdata(true);
        }).catch((error) => {
            Alert.alert(error.message)
        })
    }, []);

    return (
        <ImageBackground style={styles.container} source={require("../assets/stars.gif")}>
            {
                data ? (
                    <ImageBackground style={styles.container} source={{ uri: axiosData.url }}>
                        <View style={{ backgroundColor: "#ffffff66", padding: 20, width: "90%", borderRadius: 15 }}>
                            <Text style={{ color: "#005", fontSize: 20, alignSelf: "center" }}>{axiosData.title}</Text>
                            <Text style={{ color: "#005", marginTop: 15, fontSize: 16, textAlign: "justify" }}>{axiosData.explanation}</Text>
                            <Text style={{ color: "#005", alignSelf: "flex-end", marginTop: 15 }}>{axiosData.date}</Text>
                            <Text style={{ color: "#005", alignSelf: "flex-end" }}>©{axiosData.copyright}</Text>
                        </View>
                    </ImageBackground>
                ) : (
                    <ActivityIndicator size="large" color="#00ff00" />
                )
            }
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
});
