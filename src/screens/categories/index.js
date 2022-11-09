import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { CategoryItem } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../store/actions'


const Categories = ({navigation, route}) => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.category.categories)

    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {name: item.title})
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />

    return(
        <View style={styles.container}>
            <FlatList 
                style={styles.constainerFlatList}
                data = {categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Categories