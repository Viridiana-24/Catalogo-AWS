import React from "react";
import {Text, TouchableOpacity} from "react-native";
import { styles } from "./Button.styles";

export default function ButtonComponent({ onPress, title = "Button", color="#EE74FB" }) {
    return(
    <TouchableOpacity 
    style={[styles.button, {backgroundColor:color}]}
    onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}
