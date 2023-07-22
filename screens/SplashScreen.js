import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigator = useNavigation();
  useLayoutEffect(() => {
    setTimeout(() => {
      navigator.navigate("Boarding");
    }, 1000);
  }, []);
  return (
    <View
      className="w-full bg-green-400 h-full flex justify-center items-center
    "
    >
      <Text className="text-center text-white text-xl font-extrabold">
        GOOD FOOD
      </Text>
    </View>
  );
};

export default SplashScreen;
