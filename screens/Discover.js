// Importing necessary components from React Native and related libraries
import {
  View, // Component for creating container views
  Text, // Component for displaying text
  SafeAreaView, // Component for creating a safe area within the bounds of a device's screen
  Image, // Component for displaying images
  ScrollView, // Component for creating a scrollable container
  TouchableOpacity, // Component for creating touchable elements
  ActivityIndicator,  // Component used to visually indicate ongoing processes or loading states to the user
} from "react-native"; // Importing necessary components from React Native
import React, { useEffect, useLayoutEffect, useState } from "react"; // Importing React, useEffect, useLayoutEffect, and useState hooks
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; // Importing GooglePlacesAutocomplete component
import { useNavigation } from "@react-navigation/native"; // Importing useNavigation hook from react-navigation
import { Attractions, Globe, Hotels, NotFound, Restaurants } from "../assets"; // Importing images from assets
import MenuContainer from "../components/MenuContainer"; // Importing MenuContainer component
import { FontAwesome } from "@expo/vector-icons"; // Importing FontAwesome icon from Expo vector icons
import ItemCarDontainer from "../components/ItemCarDontainer"; // Importing ItemCarDontainer component
import { getPlacesData } from "../api"; // Importing getPlacesData function from API file

// Defining functional component Discover
const Discover = () => {
  const navigation = useNavigation(); // Using useNavigation hook to get navigation object

  // State variables to manage component state
  const [type, setType] = useState("restaurants"); // Represents the type of data being fetched
  const [isLoading, setIsLoading] = useState(false); // Tracks whether data is currently being loaded
  const [mainData, setMainData] = useState([]); // Holds the main data fetched from an API 
  const [bl_lat, setBl_lat] = useState(null); // Latitude of the bottom-left corner of a bounding box
  const [bl_lng, setBl_lng] = useState(null); // Longitude of the bottom-left corner of a bounding box
  const [tr_lat, setTr_lat] = useState(null); // Latitude of the top-right corner of a bounding box
  const [tr_lng, setTr_lng] = useState(null); // Longitude of the top-right corner of a bounding box


  // Side effect hook that sets options for navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hiding the header
    });
  }, []);

  // Side effect hook that fetches places data when location or type changes
  useEffect(() => {
    setIsLoading(true); // Set isLoading state to true to indicate data fetching is in progress
    // Call getPlacesData function with updated parameters
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      // Once data is fetched, update mainData state with the fetched data
      setMainData(data);
      // Set isLoading state to false after a delay of 2000 milliseconds (2 seconds)
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);  // Dependencies: bl_lat, bl_lng, tr_lat, tr_lng, type

  // Rendering JSX elements representing the screen
  // JSX (JavaScript XML) elements are used to define the visual layout and components that make up the user interface (UI) of the screen
  // JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          {/* Heading */}
          <Text className="text-[40px] text-[#000000] font-bold">Explore</Text>
          <Text className="text-[#000000] text-[36px]">new places today</Text>
        </View>

        {/* Globe icon */}
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Globe}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      {/* Search bar */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        {/* Google Places Autocomplete component */}
        <GooglePlacesAutocomplete
          // Fetches details from Google Places API including geometry information
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          // Placeholder text for the search bar
          placeholder="Search"
          // Indicates to fetch details when a place is selected
          fetchDetails={true}
          // Callback function when a place is pressed
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            
            // Set state variables for latitude and longitude of the bounding box's southwest corner
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            
            // Set state variables for latitude and longitude of the bounding box's northeast corner
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "", // Google Places API key
            language: "en", // Language parameter for the query
          }}
        />
      </View> 
      {/* Closing View component */}


      {/* Menu Container */}
      {isLoading ? (
        // If isLoading is true, show loading indicator
        <View className=" flex-1 items-center justify-center">
          {/* Loading indicator */}
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        // If isLoading is false, show menu items
        <ScrollView>

          {/* 
            View className... - creates a View component with the following styles:
            - Display: flex with a row direction
            - Align items to the center vertically
            - Justify content with space-between (distributes items evenly along the main axis)
            - Apply padding of 4 units on the horizontal axis
            - Apply margin of -10 units on the left side (which might be used for specific layout adjustments)
            - It's typically used to wrap multiple MenuContainer components for layout purposes.
          */}
          <View className="flex-row items-center justify-between px-4 mt-8" style={{ marginLeft: -10 }}>
            
            {/* Menu items */}
            <MenuContainer
              key={"hotels"} // Unique key for React rendering
              title="Hotels" // Title of the menu item
              imageSrc={Hotels} // Image source for the hotel item
              type={type} // Current selected type (e.g., 'hotels', 'attractions', 'restaurants')
              setType={setType} // Function to set the type
            />

            <MenuContainer
              key={"attractions"} // Unique key for React rendering
              title="Attractions " // Title of the menu item
              imageSrc={Attractions} // Image source for the attractions item
              type={type} // Current selected type (e.g., 'hotels', 'attractions', 'restaurants')
              setType={setType} // Function to set the type
            />

            <MenuContainer
              key={"restaurants"} // Unique key for React rendering
              title="Restaurants" // Title of the menu item
              imageSrc={Restaurants} // Image source for the restaurants item
              type={type} // Current selected type (e.g., 'hotels', 'attractions', 'restaurants')
              setType={setType} // Function to set the type
            />
          </View>
          
          {/* Outer View component */}
          <View> 
            {/* Inner View component with flex-row layout, items centered, space between items */}
            <View className="flex-row items-center justify-between px-4 mt-8">
              {/* Text component with specified styling and content */}
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Our Top Suggestions 
              </Text>             
            </View>

            {/* Opening View component with specified class names */}
            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              
              {/* If mainData has items, display them */}  
              {/* Conditional rendering of place cards */}
              {mainData?.length > 0 ? (
                <>
                  {/* Displaying place cards */}
                  {/* Map through mainData and render ItemCarDontainer for each item */}
                  {mainData?.map((data, i) => (
                    <ItemCarDontainer
                      key={i} // Unique key for React rendering
                      imageSrc={ //Image Source for place card
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          // Default image source if no image is available
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg" 
                      }
                      title={data?.name} // Title of the place
                      location={data?.location_string} // Location string of the place
                      data={data} // Data associated with the place
                    />
                  ))}
                </>
              ) : (
                <>
                  {/* Displaying no data message */}
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">

                    {/* Image component for displaying a not found image */}
                    <Image
                      source={NotFound}
                      className=" w-32 h-32 object-cover"
                    />
                    {/* Text component displaying the message */}
                    <Text className="text-2xl text-[#428288] font-semibold"> 
                      No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover; // Exporting Discover component