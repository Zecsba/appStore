import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { styles } from './styles'
import {categories} from '../../constants/data/categories'
import { CategoryItem } from '../../components'

const Categories = ({navigation}) => {
    const onSelected = (item) => {
        console.warn('item', item)
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />

    return(
        <View style={styles.container}>
            <FlatList 
                style={styles.constainerFlatList}
                data = {categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString}
            />
        </View>
    )
}

export default Categories