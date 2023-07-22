import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ContinueWith from "../components/ContinueWith";
import { useNavigation, useRoute } from "@react-navigation/native";

const SignupScreen = () => {
  const route = useRoute();
  const navigator = useNavigation();
  const [routeName, setRouteName] = useState(route.name);

  return (
    <SafeAreaView className=" bg-white w-full h-full">
      <View className="mt-20">
        <Text className="text-center font-bold text-lg my">Sign up</Text>
        <View className="my-10 mx-8">
          <View>
            <Text className="text-gray-500 font-semibold mb-3">Name</Text>
            <TextInput
              placeholder="Jonny dev"
              className="bg-gray-100 rounded-lg px-5 py-3 font-bold text-black mb-3"
            />
            <Text className="text-gray-500 font-semibold mb-3">Email</Text>
            <TextInput
              placeholder="Jonnydev@gmail.com"
              inputMode="email"
              className="bg-gray-100 rounded-lg px-5 py-3 font-bold text-black mb-3"
            />
            <Text className="text-gray-500 font-semibold mb-3">Password</Text>
            <TextInput
              placeholder="*******"
              inputMode="text"
              secureTextEntry={true}
              className="bg-gray-100 rounded-lg px-5 py-3 font-bold text-black mb-3"
            />
            <TouchableOpacity
              onPress={() => navigator.push("Home")}
              className="bg-green-600 px-5 py-3 rounded-xl my-5"
            >
              <Text className="text-center text-white font-bold ">Sign up</Text>
            </TouchableOpacity>
          </View>
          <ContinueWith routeName={routeName} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
