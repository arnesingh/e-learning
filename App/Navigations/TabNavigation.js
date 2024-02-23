import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import LeaderBoard from "../Screens/LeaderBoard";
import MyCourse from "../Screens/MyCourse";
import Profile from "../Screens/Profile";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="leaderBoard" component={LeaderBoard} />
      <Tab.Screen name="myCourse" component={MyCourse} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
