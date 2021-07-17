import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ToastAndroid, TextInput } from 'react-native';
import { WebView } from "react-native-webview";
import * as Location from 'expo-location';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function starMap({ navigation }) {
    const [change, setchange] = useState(false);
    const [latitude, setlatitude] = useState("25.058128");
    const [longitude, setlongitude] = useState("85.537612");
    const [rlongitude, setrlongitude] = useState("");
    const [rlatitude, setrlatitude] = useState("");
    const [input1, setinput1] = useState("");
    const [input2, setinput2] = useState("");

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                ToastAndroid.showWithGravity(
                    "Permission to access location was denied",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
                return;
            }

            let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
            setlatitude(location.coords.latitude);
            setlongitude(location.coords.longitude);
            setrlatitude(location.coords.latitude);
            setrlongitude(location.coords.longitude);
            setinput1("");
            setinput2("");
        })();
    }, []);

    function displayChange() {
        setchange(true);
    }

    function hideChange() {
        if (input1 && input2) {
            if (input1 <= 180 && input2 <= 90 && input1 >= -180 && input2 >= -90) {
                setlatitude(input1);
                setlongitude(input2);
                setinput1("");
                setinput2("");
            } else {
                ToastAndroid.showWithGravity(
                    "Invalid Coordinates",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
            }
        } else {
            ToastAndroid.showWithGravity(
                "Data Invalid",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }

        setchange(false);
    }

    return (
        <View style={styles.main}>
            <WebView style={styles.container}
                scalesPageToFit
                source={{
                    uri: 'https://virtualsky.lco.global/embed/index.html?longitude=' + longitude + '&latitude=' + latitude + '&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
                }}>
            </WebView>
            <View style={{ flex: 1, position: "absolute", alignItems: "flex-end", flexDirection: "column-reverse", alignSelf: "center", width: "100%" }}>
                {!change ? (
                    <View>
                        <TouchableOpacity style={{ backgroundColor: "#003029", borderRadius: 10, padding: 10 }} onPress={() => { displayChange() }}>
                            <Text style={{ color: "#fff" }}>CHANGE LOCATION</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View />
                )}
                <View style={{ alignSelf: "flex-start", position: "absolute", zIndex: 1, width: 200 }}>
                    <Text style={{ color: "#0f0", fontSize: 20 }}>Geolocation</Text>
                    <Text style={{ color: "#f00" }}>{longitude},  {latitude}</Text>
                </View>
            </View>
            {
                change ?
                    (
                        <View style={{ position: "absolute", width: "90%", height: 300, backgroundColor: "#003029dd", alignSelf: "center", borderRadius: 10, alignItems: "center", marginBottom: 20, justifyContent: "center" }}>
                            <TextInput
                                value={input1}
                                placeholder="latitude"
                                style={{ color: "#fff", borderRadius: 5, backgroundColor: "#99999999", padding: 10, width: "80%", textAlign: "center", margin: 10 }}
                                placeholderTextColor={"#aaa"}
                                onChangeText={(t) => {
                                    setinput1(t);

                                }}
                                keyboardType={"number-pad"}
                            />
                            <TextInput
                                value={input2}
                                placeholder="Longitude"
                                style={{ color: "#fff", borderRadius: 5, backgroundColor: "#99999999", padding: 10, width: "80%", textAlign: "center", margin: 10 }}
                                placeholderTextColor={"#aaa"}
                                onChangeText={(t) => {
                                    setinput2(t);

                                }}
                                keyboardType={"number-pad"}
                            />
                            <TouchableOpacity style={{ margin: 20, backgroundColor: "#ffffffdd", padding: 10, width: "50%", alignItems: "center", borderRadius: 10 }} onPress={() => { hideChange() }}>
                                <Text style={{ color: "#f00" }}>Explore</Text>
                            </TouchableOpacity>
                            {rlatitude !== latitude || rlongitude !== longitude ? (
                                <TouchableOpacity onPress={() => {
                                    setlatitude(rlatitude);
                                    setlongitude(rlongitude);
                                    setchange(false);
                                }}><Text style={{ color: "#fff" }}>Use Current Location</Text></TouchableOpacity>
                            ) : (<View />)}

                        </View>
                    ) : (
                        <View />
                    )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column-reverse"
    },
    container: {
        flex: 1,
        backgroundColor: '#001729',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
