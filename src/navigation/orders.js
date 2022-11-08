import React from "react";
import { isAndroid } from "../utils/funtioncs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens";
import colors from "../constants/themes/colors";

const Stack = createNativeStackNavigator()

const OrderNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Orders"
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
                name="Orders"
                component={Orders}
            />
        </Stack.Navigator>
    )
}

export default OrderNavigator