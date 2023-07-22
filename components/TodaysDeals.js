import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

const TodaysDeals = () => {
  return (
    <View className="ml-5">
      <ImageBackground
        borderRadius={10}
        source={{
          uri: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600",
          width: 80,
          height: 100,
        }}
        className="px-5 py-4 w-[315px]"
      >
        <Text className="text-white font-extrabold text-xl">Today's</Text>
        <Text className="text-white font-extrabold text-xl">Best Deals</Text>
        <TouchableOpacity className="">
          <Text className="text-white text-xs font-bold bg-green-300 w-24 text-center rounded-full px-2 py-2 mt-3">
            upto 60% off
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default TodaysDeals;
