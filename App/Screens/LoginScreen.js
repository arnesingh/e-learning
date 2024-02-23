import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import app from "./../../assets/images/app.png";
import Colors from "./../../assets/Utils/Colors";
import gIcon from "./../../assets/images/google.png";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Image
        source={app}
        style={{
          width: 250,
          height: 500,
          objectFit: "contain",
          marginTop: 150,
        }}
      />
      <View
        style={{
          height: 400,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: -90,
          padding: 20,
          marginLeft: 0,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            color: Colors.WHITE,
            fontFamily: "outfit-bold",
          }}
        >
          Codebox
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontSize: 20,
          }}
        >
          Your Ultimate Programming Learning Box
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.WHITE,
            height: 50,
            marginTop: 50,
            marginLeft: 60,
            marginRight: 60,
            borderRadius: 25,
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            display: "flex",
            justifyContent: "center",
          }}
          onPress={onPress}
        >
          <Image
            source={gIcon}
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
            }}
          ></Image>
          <Text style={{ color: "blue", fontSize: 15, fontWeight: 600 }}>
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
