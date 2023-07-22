import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";
import TodaysDeals from "../components/TodaysDeals";
import NearBy from "../components/NearBy";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row justify-between mt-10 mx-5">
          <View className="flex flex-row">
            <MapPinIcon size={30} color="green" />
            <View>
              <Text className="text-gray-400 text-[10px]">Delivery to</Text>
              <Text className="text-xs font-bold">Wadala, Mumbai</Text>
            </View>
          </View>
          <BellIcon size={30} color={"black"} />
        </View>

        <View className="flex flex-row justify-between mx-5 my-3 ">
          <TextInput
            className="border border-gray-300 py-1 px-3 rounded-lg w-[85%]"
            placeholder="Search"
          />
          <AdjustmentsHorizontalIcon size={40} color="green" />
        </View>
      </ScrollView>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TodaysDeals />
        <TodaysDeals />
        <TodaysDeals />
      </ScrollView>

      <Text className="mx-5 font-bold my-3 text-base">Near by</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <NearBy />
        <NearBy />
        <NearBy />
        <NearBy />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
