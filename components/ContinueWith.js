import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ContinueWith = ({ routeName }) => {
  const navigator = useNavigation();

  return (
    <View>
      <Text className="text-center text-gray-400">or</Text>
      <Text className="font-bold text-base text-center my-3">
        continue with
      </Text>
      <View className="flex flex-row gap-5 justify-center py-2">
        <Image
          source={require("../assets/icons/apple-logo.png")}
          className="w-[30] h-[30]"
        />
        <Image
          source={require("../assets/icons/facebook.png")}
          className="w-[30] h-[30]"
        />
        <Image
          source={require("../assets/icons/google.png")}
          className="w-[30] h-[30]"
        />
      </View>

      <View className="flex flex-row justify-center items-center my-3">
        <Text className="text-center  text-gray-500 font-bold">
          Don't have account?{" "}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigator.navigate(routeName == "Signup" ? "Login" : "Signup")
          }
        >
          <Text className="text-green-700 font-bold">
            {routeName == "Signup" ? "Log in" : "Sign up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContinueWith;
