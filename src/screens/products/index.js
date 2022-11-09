import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { ProductItem } from '../../components'
import { products} from '../../constants/data' 
import {useSelector} from 'react-redux'


const Products = ({navigation}) => {
    const selectCategory = useSelector((state) => state.category.selected)
    const productsFilter = products.filter(product => product.categoryId == selectCategory.id)
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