import { View, Text } from "react-native";
import React from "react";
import Header from "../components/HomeScreen/Header";
import Colors from "../../assets/Utils/Colors";
import CourseList from "../components/HomeScreen/CourseList";

export default function HomeScreen() {
  return (
    <View>
      <View
        style={{ backgroundColor: Colors.PRIMARY, height: 250, padding: 20 }}
      >
        <Header />
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: -90 }}>
          <CourseList level={"Basic"} />
        </View>
        <CourseList level={"Advance"} />
      </View>
    </View>
  );
}
