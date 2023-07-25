import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function ChordCard({ name, image, clickFunc }) {
  return (
    <TouchableOpacity
      style={{
        padding: 15,
        backgroundColor: "brown",
        marginVertical: 5,
        borderRadius: 10,
        position: "relative",
      }}
      onPress={() => clickFunc()}
    >
      <View
        style={{
          width: "100%",
          borderRadius: 10,
        }}
      >
        <Image
          source={image}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          left: 25,
          bottom: 25,
          backgroundColor: "brown",
          borderRadius: 3,
          padding: 5,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "white",
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({});
