import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import React from "react"
import { navigationRef } from "../config/RootNavigation";

import * as Route from '../screens';

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Route.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
