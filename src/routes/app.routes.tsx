import { createNativeStackNavigator } from "@react-navigation/native-stack"

import React from "react"

import * as Route from '../screens';

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Route.Home} />
    </Stack.Navigator>
  )
}

export default Routes
