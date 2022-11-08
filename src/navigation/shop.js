import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../screens";
import { isAndroid } from "../utils/funtioncs";
import colors from "../constants/themes/colors";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isAndroid ? colors.primary : colors.secondary
                },
                headerTintColor: colors.text,
                headerTintColor: {
                    fontFamily: 'Lato-Bold'
                }

            }}
        >
            <Stack.Screen 
                name="Categories" 
                component={Categories}
                options={{
                    // Aca se puede crear muchas cosas...
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={Products}
                options={({route}) => ({
                    title: route.params.name
                })}
            />
            <Stack.Screen 
                name="Product" 
                component={Product}
                options={({route}) => ({
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
    )
}

export default ShopNavigator