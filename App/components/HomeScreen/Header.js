import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../../assets/Utils/Colors";
import coin from "./../../../assets/images/coin.png";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View>
        <View style={[{ justifyContent: "space-between" }, styles.rowStyle]}>
          <View style={styles.rowStyle}>
            <Image
              source={{ uri: user?.imageUrl }}
              style={{ height: 50, width: 50, borderRadius: 99 }}
            />
            <View>
              <Text
                style={{ color: Colors.WHITE, fontFamily: "outfit-regular" }}
              >
                Welcome,
              </Text>
              <Text style={styles.mainText}>{user?.fullName}</Text>
            </View>
          </View>
          <View style={styles.rowStyle}>
            <Image
              source={coin}
              style={{ height: 40, width: 40, borderRadius: 50 }}
            />
            <Text style={styles.mainText}>3500</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            backgroundColor: Colors.WHITE,
            paddingLeft: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 99,
            paddingRight: 5,
          }}
        >
          <TextInput
            placeholder="Search Courses"
            style={{ fontSize: 18, fontFamily: "outfit-regular" }}
          />
          <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  mainText: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: "outfit-regular",
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
