// import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./component/Screen1";
import Screen2 from "./component/Screen2";
import Screen3 from "./component/Screen3";
import Screen4 from "./component/Screen4";
import Screen3b from "./component/Screen3b";
import Screen4b from "./component/Screen4b";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen1"
          component={Screen1}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen2"
          component={Screen2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen3"
          component={Screen3}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen3b"
          component={Screen3b}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen4"
          component={Screen4}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen4b"
          component={Screen4b}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
