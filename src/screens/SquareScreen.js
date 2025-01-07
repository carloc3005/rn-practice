import React, {useReducer} from "react";
import {View, StyleSheet, Button, FlatList, Text} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const reducer = (state, action) => {
        //state === {red: number, green: number, blue: number}
        //action === {type: 'change_red' || 'change_green' || 'chane_blue', payload: 15 || -15 }

        switch(action.type) {
            case 'change_red':
                return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
            case 'change_green':
                return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
            case 'change_blue':
                return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state: {...state, green: state.green + action.payload};
            default:
                return state;
        }
    };

    const [state, RunMyReducer] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const{red, green, blue} = state;

    return (
        <View>
        <ColorCounter
            onIncrease={() => RunMyReducer({type: 'change_red', payload: COLOR_INCREMENT})}
            onDecrease={() => RunMyReducer({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
                      color={"Red"}
        />

        <ColorCounter
            onIncrease={() => RunMyReducer({type: 'change_green', payload: COLOR_INCREMENT})}
            onDecrease={() => RunMyReducer({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
            color={"Blue"}
        />

        <ColorCounter
            onIncrease={() => RunMyReducer({type: 'change_blue', payload: COLOR_INCREMENT})}
            onDecrease={() => RunMyReducer({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
                      color={"Green"}
        />
        <View
            style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${state.red}, ${state.blue}, ${state.green})`}}
        />
    </View>
    );
};

const styles = StyleSheet.create ({});

export default SquareScreen;