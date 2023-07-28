import React from "react";
import Navigator from "./routes/homeStack"
import { useFonts } from "expo-font";


export default function App() {
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (fontsLoaded) {
    return <Navigator/>;
  } else {
    return null;
  }
}
