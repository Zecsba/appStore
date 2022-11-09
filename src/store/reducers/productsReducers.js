import {products} from '../../constants/data/products'

const initialState = {
    products: products,
    filteredProducts: [],
    selected: null
}

const producReducer = (state = initialState, action) => {
    return state
}

export default producReducer