import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";
import SubHeading from "../SubHeading";
import { Feather, Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Utils/Colors";
import CourseItem from "./CourseItem";

export default function CourseList({ level }) {
  const [courseList, SetCourseList] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () => {
    getCourseList(level).then((resp) => {
      console.log("RESP-", resp);
      SetCourseList(resp?.courses);
    });
  };
  return (
    <View>
      <SubHeading
        text={level + " Courses"}
        color={level == "Basic" && Colors.WHITE}
      />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CourseItem item={item} />}
      />
    </View>
  );
}
