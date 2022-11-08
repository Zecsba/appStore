import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { ProductItem } from '../../components'
import { products} from '../../constants/data' 


const Products = ({navigation, route}) => {
    const {categoryId} = route.params

    const productsFilter = products.filter(product => product.categoryId == categoryId)

    const onSelected = (item) => {
        navigation.navigate('Product', {name: item.title, productId: item.id})
    }

    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected} />

    return(
        <FlatList 
            data={productsFilter}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        > 
        </FlatList>
    )
}

export default Products