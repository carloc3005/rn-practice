import React, {useState} from "react";
import {View, StyleSheet, Button, Text, TextInput} from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize={"none"}
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue) }
            />
       <Text>My password is {password}</Text>
            {password.length < 5 ? <Text> Password must be 5 character </Text> : null}
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;