import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";
import SubHeading from "../SubHeading";
import { Feather, Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Utils/Colors";

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
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              backgroundColor: Colors.WHITE,
              marginRight: 15,
              borderRadius: 15,
              paddingBottom: 0,
            }}
          >
            <Image
              source={{ uri: item.banner.url }}
              style={{ height: 120, width: 210 }}
            />
            <View style={{ padding: 17 }}>
              <Text style={{ fontSize: 17, fontFamily: "outfit-semibold" }}>
                {item.name}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 5,
                  }}
                >
                  <Feather name="book-open" size={24} color="black" />
                  <Text style={{ fontFamily: "outfit-regular" }}>
                    {item.chapters?.length} Chapters
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 5,
                  }}
                >
                  <Ionicons name="time-outline" size={24} color="black" />
                  <Text style={{ fontFamily: "outfit-regular" }}>
                    {item.time}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  marginTop: 5,
                  color: Colors.PRIMARY,
                  fontFamily: "outfit-semibold",
                }}
              >
                {item.price == 0 ? "Free" : item.price}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
