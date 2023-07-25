import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import * as Icons from "react-native-heroicons/solid";

export default function Help({ navigation }) {
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
            justifyContent: "flex-start",
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
          Help!
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
          <Icons.QuestionMarkCircleIcon size="140" color="brown" />
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Icons.EnvelopeIcon size="20" color="brown" />
            <Text style={{ fontSize: 14, marginLeft: 10, color: "brown" }}>
              info@guitarteach.com
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Icons.PhoneIcon size="20" color="brown" />
            <Text style={{ fontSize: 14, marginLeft: 10, color: "brown" }}>
              +94778899003
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Icons.TvIcon size="20" color="brown" />
            <Text style={{ fontSize: 14, marginLeft: 10, color: "brown" }}>
              @guitarteach
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
