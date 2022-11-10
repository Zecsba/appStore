import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions'

const Product = ({navigation}) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected)

    const addCartItem = () => {
        dispatch(addToCart(product))
    }

    return(
        <View style={styles.container}>
            <Text>{product.id}</Text>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
            <Text>{product.weight}</Text>
            <Button 
                title='Add to cart'
                onPress={addCartItem}
            />
        </View>
    )
}

export default Product