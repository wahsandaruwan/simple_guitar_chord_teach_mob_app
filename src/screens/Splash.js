import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import * as Icons from "react-native-heroicons/solid";

export default function Splash() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="orange" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "lightblue",
        }}
      >
        <Icons.MusicalNoteIcon size="120" color="brown" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 25,
            color: "brown",
          }}
        >
          Welcome to, Guitar Teacher!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "brown",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
