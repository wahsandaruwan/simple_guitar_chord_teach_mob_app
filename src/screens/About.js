import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import * as Icons from "react-native-heroicons/solid";

export default function About({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="brown" />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons.ArrowLeftCircleIcon size="40" color="brown" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Help")}>
            <Icons.InformationCircleIcon size="40" color="brown" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            width: "100%",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 20,
            textAlign: "center",
            color: "brown",
          }}
        >
          About!
        </Text>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginBottom: 10,
            borderWidth: 2,
            borderColor: "brown",
            borderStyle: "solid",
            borderRadius: 8,
          }}
        >
          <Icons.BookOpenIcon size="140" color="brown" />
        </View>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Guitar Teacher App is one and only one mobile application available in
          both Apple App Store and Google Play Store that teaches all kinds of
          guitar chords with the initial strumming pattern in simple and basic
          manner that every beginner can understand easily.
        </Text>
      </View>
    </SafeAreaView>
  );
}
