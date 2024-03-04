import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import LeaderBoard from "../Screens/LeaderBoard";
import MyCourse from "../Screens/MyCourse";
import Profile from "../Screens/Profile";

import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import HomeScreenNavigation from "./HomeScreenNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="myCourse"
        component={MyCourse}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="book-open" size={24} color={color} />
          ),
          tabBarLabel: "My Course",
        }}
      />
      <Tab.Screen
        name="leaderBoard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
          tabBarLabel: "Leaderboard",
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}
