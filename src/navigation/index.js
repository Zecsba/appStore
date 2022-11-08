import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tabs";

import ShopNavigator from "./shop";

const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator