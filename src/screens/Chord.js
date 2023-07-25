import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

import * as Icons from "react-native-heroicons/solid";

export default function Chord({ navigation, route }) {
  // Get route params
  const { name, instruction, image } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightblue" }}>
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
          {name}
        </Text>
        <View
          style={{
            width: "100%",
            height: 310,
            borderWidth: 2,
            borderColor: "brown",
            borderStyle: "solid",
            borderRadius: 8,
            overflow: "hidden",
            marginBottom: 10,
          }}
        >
          <Image
            source={image}
            style={{ width: "100%", height: 310, marginBottom: 10 }}
          />
        </View>
        <Text style={{ textAlign: "center", marginBottom: 10, color: "black" }}>
          {instruction}
        </Text>
      </View>
    </SafeAreaView>
  );
}
