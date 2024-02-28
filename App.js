import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./App/Screens/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import TabNavigation from "./App/Navigations/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-semibold": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-light": require("./assets/fonts/Outfit-Light.ttf"),
  });

  return (
    <ClerkProvider
      publishableKey={
        "pk_test_aW5maW5pdGUtYm9iY2F0LTY3LmNsZXJrLmFjY291bnRzLmRldiQ"
      }
    >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
});
