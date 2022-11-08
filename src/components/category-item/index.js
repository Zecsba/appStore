import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../../constants/themes/colors";
import { styles } from "./styles";

const categoryItem = ({ item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{...styles.contentContainer, backgroundColor: item.color}}
                onPress={() => onSelected(item)}
            >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default categoryItem