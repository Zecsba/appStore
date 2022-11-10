import React, {useEffect} from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { ProductItem } from '../../components'
import { products} from '../../constants/data' 
import {useSelector, useDispatch} from 'react-redux'
import { filteredProducts, selectedProduct } from '../../store/actions'


const Products = ({navigation}) => {
    const dispatch = useDispatch()
    const selectCategory = useSelector((state) => state.category.selected)

    const productsFilter = useSelector((state) => state.products.filteredProducts)

    useEffect(() => {
        dispatch(filteredProducts(selectCategory.id))
    }, []);



    const onSelected = (item) => {
        dispatch(selectedProduct(item.id))
        navigation.navigate('Product', {name: item.title})
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