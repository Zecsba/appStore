import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { orders} from '../../constants/data';
import { OrderItem } from "../../components";

const Orders = ({navigation}) => {

    const onCancel = (id) => {
        console.warn(id)
    } 

    const renderItem = ({item}) => <OrderItem item={item} onCancel={onCancel}/>
    return( 
        <View style={styles.container}> 
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Orders