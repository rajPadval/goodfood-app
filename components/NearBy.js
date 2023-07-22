import { View, Text, Image } from "react-native";
import React from "react";

const NearBy = () => {
  return (
    <View className="ml-5">
      <Image
        borderRadius={100}
        source={{
          width: 75,
          height: 75,
          uri: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
      />
      <Text className="text-center font-bold mt-2">Restaunts</Text>
    </View>
  );
};

export default NearBy;
