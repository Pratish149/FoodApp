import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from "./src/screens/SearchScreen";
import ShowDetails from "./src/screens/ShowDetails";

const Stack = createNativeStackNavigator();

const App  = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SearchScreen} />
        <Stack.Screen name="Details" component={ShowDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <SearchScreen />
    // </View>
  )
}

export default App;