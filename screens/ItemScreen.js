// Importing necessary components from React Native and related libraries
import {
  View, // Component for creating container views
  Text, // Component for displaying text
  SafeAreaView, // Component for creating a safe area within the bounds of a device's screen
  ScrollView, // Component for creating a scrollable container
  Image, // Component for displaying images
  TouchableOpacity, // Component for creating touchable elements
} from "react-native";
import React, { useLayoutEffect } from "react"; // Importing React and useLayoutEffect hook
import { useNavigation } from "@react-navigation/native"; // Importing useNavigation hook from react-navigation
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons"; // Importing specific icons from Expo vector icons

// Defining functional component ItemScreen which takes route object as a parameter
const ItemScreen = ({ route }) => {
  const navigation = useNavigation(); // Using useNavigation hook to get navigation object

  const data = route?.params?.param; // Extracting data from route params

  // Side effect hook that sets options for navigation
  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false, // Hiding the header
      });
  }, []);

  // Rendering JSX elements representing the screen
  // JSX (JavaScript XML) elements are used to define the visual layout and components that make up the user interface (UI) of the screen
  // JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript
  return (
      // SafeAreaView provides a safe area for rendering content
      <SafeAreaView className="flex-1 bg-white relative"> 
          {/* ScrollView allows for scrolling content */}
          <ScrollView className="flex-1 px-4 py-6">
              {/* View acts as a container for other elements */}
              <View className="relative bg-white shadow-lg">
                  {/* Image component to display a photo */}
                  <Image
                      source={{
                          // Providing the image URI from data, with a fallback default image
                          uri: data?.photo?.images?.large?.url
                              ? data?.photo?.images?.large?.url
                              : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
                      }}
                      // Applying styles to the image
                      className="w-full h-72 object-cover rounded-2xl"
                  />

                  {/* View component with absolute positioning, flex row layout, 
                   positioned at top 5px, and space between items with 
                   horizontal padding */}
                  <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                      {/* TouchableOpacity for navigating back to Discover screen */}
                      <TouchableOpacity
                          onPress={() => navigation.navigate("Discover")}
                          className="w-10 h-10 rounded-md items-center justify-center bg-white"
                      >
                          <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
                      </TouchableOpacity>

                      {/* TouchableOpacity for some action */}
                      {/* 
                        TouchableOpacity component with a fixed width and height of 10 units, rounded corners, 
                        centered items and content, with a background color of "#06B2BE".
                      */}
                      <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                          <FontAwesome5 name="heartbeat" size={24} color="#fff" />
                      </TouchableOpacity>
                  </View>

                  <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                      {/* Displaying price and open status */}
                      <View className="flex-row space-x-2 items-center">
                          <Text className="text-[12px] font-bold text-gray-100">
                              {data?.price_level}
                          </Text>
                          <Text className="text-[32px] font-bold text-gray-100">
                              {data?.price}
                          </Text>
                      </View>

                      {/* Displaying open status */}
                      <View className="px-2 py-1 rounded-md bg-teal-100">
                          <Text>{data?.open_now_text}</Text>
                      </View>
                  </View>
              </View>

              {/* Displaying restaurant name and location */}
              <View className="mt-6">
                  <Text className="text-[#428288] text-[24px] font-bold">
                      {data?.name}
                  </Text>
                  <View className="flex-row items-center space-x-2 mt-2">
                      <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                      <Text className="text-[#8C9EA6] text-[20px] font-bold">
                          {data?.location_string}
                      </Text>
                  </View>
              </View>

              {/* Displaying restaurant rating and price level*/}
              <View className="mt-4 flex-row items-center justify-between">
                  {data?.rating && (
                      <View className="flex-row items-center space-x-2">
                          <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                              <FontAwesome name="star" size={24} color="#D58574" />
                          </View>
                          <View>
                              <Text className="text-[#515151]">{data?.rating}</Text>
                              <Text className="text-[#515151]">Ratings</Text>
                          </View>
                      </View>
                  )}
                  {/* Displaying restaurant price level */}
                  {data?.price_level && (
                      <View className="flex-row items-center space-x-2">
                          <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                              <MaterialIcons name="attach-money" size={24} color="black" />
                          </View>
                          <View>
                              <Text className="text-[#515151]">{data?.price_level}</Text>
                              <Text className="text-[#515151]">Price Level</Text>
                          </View>
                      </View>
                  )}
                               
              </View>

              {/* Displaying restaurant description */}
              {data?.description && (
                  <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
                      {data?.description}
                  </Text>
              )}

              {/* Displaying restaurant cuisine */}
              {data?.cuisine && (
                  <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                      {data?.cuisine.map((n) => (
                          <TouchableOpacity
                              key={n.key}
                              className="px-2 py-1 rounded-md bg-emerald-100"
                          >
                              <Text>{n.name}</Text>
                          </TouchableOpacity>
                      ))}
                  </View>
              )}

              {/* Displaying restaurant contact information */}
              <View style=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
                  {data?.phone && (
                      <View className="items-center flex-row space-x-6">
                          <FontAwesome name="phone" size={24} color="#428288" />
                          <Text className="text-lg">{data?.phone}</Text>
                      </View>
                  )}
                  {data?.email && (
                      <View className="items-center flex-row space-x-6">
                          <FontAwesome name="envelope" size={24} color="#428288" />
                          <Text className="text-lg">{data?.email}</Text>
                      </View>
                  )}
                  {data?.address && (
                      <View className="items-center flex-row space-x-6">
                          <FontAwesome name="map-pin" size={24} color="#428288" />
                          <Text className="text-lg">{data?.address}</Text>
                      </View>
                  )}

                  {/* Button for booking */}
                  <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
                      <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
                          Book Now
                      </Text>
                  </View>
              </View>
          </ScrollView>
      </SafeAreaView>
  );
};

export default ItemScreen; // Exporting ItemScreen component
