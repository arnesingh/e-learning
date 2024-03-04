import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import CourseDetailScreen from "../Screens/CourseDetailScreen";

const Stack = createStackNavigator;
export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="course-detail" component={CourseDetailScreen} />
    </Stack.Navigator>
  );
}
