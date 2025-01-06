import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    const name = 'December 31, 2024'

    return (
        <View>
            <Text style={styles.textStyle}>Happy New Year!! </Text>
            <Text style={styles.greetingStyle}>{name}</Text>
        </View>
    )
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 45
        },
        greetingStyle: {
            fontSize: 20
        }
    }
);

export default ComponentsScreen;