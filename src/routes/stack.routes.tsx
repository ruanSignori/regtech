import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { Admin } from "@screens/Admin";
import { Home } from "@screens/Home";
import { Humidity } from "@screens/Humidity";
import { Temperature } from "@screens/Temperature";

const Tab = createBottomTabNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
          paddingVertical: 5,
        },
        tabBarActiveTintColor: "#2385E3",
      }}
    >
      <>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Umidade"
          component={Humidity}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="water-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Temperatura"
          component={Temperature}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="temperature-low" size={size} color={color} />
            ),
          }}
        />
      </>
    </Tab.Navigator>
  );
}
