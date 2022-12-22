import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteScreen from "../screens/Favorite";
import PokedexScreen from "../screens/Pokedex";
import AccountScreen from "../screens/Account";
// import PokemonScreen from "../screens/Pokemon";

// Este componente ya no se utiliza porque el componente de Tab.Screen ya lo hace tambien con solo actualizar sus options.
// import FavoriteNavigation from "./FavoriteNavigation";
// import PokedexNavigation from "./PokedexNavigation";
// import AccountNavigation from "./PokedexNavigation";

import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favorito",
          title: "Favorito",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          headerTitleAlign: "center",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/poke-logo.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
