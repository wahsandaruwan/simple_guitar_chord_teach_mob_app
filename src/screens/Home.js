import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

import * as Icons from "react-native-heroicons/solid";
import { useIsFocused } from "@react-navigation/native";

import { ChordCard } from "../components";

// Data
import { guitarChords } from "../data";

export default function Home({ navigation }) {
  // Focus
  const isFocused = useIsFocused();

  const [chords, setChords] = useState(guitarChords);

  const [searchQuery, setSearchQuery] = useState("");

  const [filteredChords, setFilteredChords] = useState([]);

  // Load chords
  useEffect(() => {
    if (isFocused) {
      setChords(guitarChords);
    }
  }, [isFocused]);

  // Filter
  useEffect(() => {
    filterChords();
  }, [searchQuery, chords]);

  // Filter function
  const filterChords = () => {
    const query = searchQuery.toLowerCase();
    const result = chords.filter(
      (chord) =>
        chord.name.toLowerCase().includes(query) ||
        chord.type.toLowerCase().includes(query)
    );
    setFilteredChords(result);
  };

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
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TextInput
            placeholder="Filter Chords"
            style={{
              width: "82%",
              height: "100%",
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
            }}
            onChangeText={(txt) => setSearchQuery(txt)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "brown",
              padding: 5,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("About")}
          >
            <Icons.CubeIcon size="40" color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: "100%",
            backgroundColor: "lightblue",
            borderRadius: 10,
          }}
        >
          {filteredChords.length > 0 ? (
            filteredChords.map((item) => (
              <ChordCard
                id={item.id}
                name={item.name}
                type={item.type}
                image={item.image}
                key={item.id}
              />
            ))
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Icons.GlobeAltIcon size="40" color="brown" />
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                Not Available!
              </Text>
            </View>
          )}
          {/* <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Icons.GlobeAltIcon size="40" color="brown" />
            <Text style={{ textAlign: "center", marginTop: 10 }}>
              Not Available!
            </Text>
          </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
