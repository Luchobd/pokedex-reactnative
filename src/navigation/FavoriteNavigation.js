import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoritScreen from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoritScreen}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
