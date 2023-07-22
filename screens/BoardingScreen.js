import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowRightIcon } from "react-native-heroicons/solid";

const BoardingScreen = () => {
  const navigator = useNavigation();
  return (
    <View >
      <Image
        className="relative w-screen h-full"
        source={{
          uri: "https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
      />
      <View className="absolute bottom-0 w-full bg-white ">
        <Text className="text-center font-bold text-xl mt-8 ">
          Welcome to our Good Food App!
        </Text>
        <Text className="text-center font-bold text-gray-500 mt-3 text-lg">
          Rescue, Share, and Save
        </Text>
        <Text className="text-center font-bold text-gray-500 text-lg">
          Delicious Meals
        </Text>
        <TouchableOpacity
          onPress={() => navigator.navigate("Signup")}
          className="bg-green-600 mx-8 py-3 rounded-xl mt-5 mb-10 flex flex-row justify-evenly items-center"
        >
          <Text className="font-bold text-white text-center text-lg w-full ml-10">
            Continue
          </Text>
          <ArrowRightIcon size={20} color="white" style={{ marginRight: 60 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BoardingScreen;
