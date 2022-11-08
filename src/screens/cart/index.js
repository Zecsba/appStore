import React from "react";
import {View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { cart } from '../../constants/data/cart'
import { CartItem } from "../../components";

const Cart = ({navigation}) => {
    const total = 1400

    const onDelete = (id) => {
        console.warn('oni',id)
    }

    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete}/>

    return( 
        <View style={styles.container}> 

            <View style={styles.containerList}>
                <FlatList 
                    
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.buttonConfirm} 
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total: </Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>   
        </View>
    )
}

export default Cart