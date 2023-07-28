import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [review, setReview] = useState([
    {
      title: "Zeldat, breath of air 222",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Zeldat, bheathy of air ",
      rating: 7,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Zeldat, the of air nomade ",
      rating: 4,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
