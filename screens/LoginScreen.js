import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import ContinueWith from "../components/ContinueWith";

const LoginScreen = () => {
  const route = useRoute();
  const [routeName, setRouteName] = useState(route.name);

  return (
    <SafeAreaView className=" bg-white w-full h-full">
      <View className="mt-28">
        <Text className="text-center font-bold text-lg my">
          Welcome to Good Food
        </Text>
        <View className="my-10 mx-8">
          <View>
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
            <Text className="text-gray-500 font-semibold my-3 text-right">
              Forgot Password?
            </Text>
            <TouchableOpacity className="bg-green-600 px-5 py-3 rounded-xl my-5">
              <Text className="text-center text-white font-bold ">Login</Text>
            </TouchableOpacity>
          </View>
          <ContinueWith routeName={routeName} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
