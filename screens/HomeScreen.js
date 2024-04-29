import React, { useLayoutEffect } from "react"; // Importing React and useLayoutEffect hook
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native"; // Importing necessary components from React Native
import * as Animatable from "react-native-animatable"; // Importing Animatable library for animations
import { useNavigation } from "@react-navigation/native"; // Importing useNavigation hook from react-navigation
import { WorldImage } from "../assets"; // Importing WorldImage from assets

// Defining functional component HomeScreen
const HomeScreen = () => {
  const navigation = useNavigation(); // Using useNavigation hook to get navigation object

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
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Image container at the bottom
      The flex: 1 property indicates that the component should grow to
      occupy all available space along the main axis (usually vertical) within its container. */}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Animatable.Image
          animation="fadeIn" // Animation type
          easing="ease-in-out" // Animation easing
          source={WorldImage} // Image source
          style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, left: 0, right: 0 }} // Image styles
        />
      </View>

      {/* Text container at the top */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ paddingHorizontal: 20 }}>
          {/* Text introducing the app */}
          <Text style={{ color: '#000000', fontSize: 42, textAlign: 'center', marginBottom: 20 }}>Discover new places with the </Text>
          <Text style={{ color: '#006400', fontSize: 38, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Travel Advisor </Text>
        </View>
      </View>

      {/* "Go" button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Discover")} // Navigating to Discover screen on button press
        style={{ position: 'absolute', bottom: 20, alignSelf: 'center', width: 80, height: 80, borderRadius: 40, borderColor: '#006400', borderWidth: 4, alignItems: 'center', justifyContent: 'center', zIndex: 1 }} // Button styles
      >
        {/* Animatable view for pulsating effect */}
        <Animatable.View
          animation={"pulse"} // Animation type
          easing="ease-in-out" // Animation easing
          iterationCount={"infinite"} // Animation iteration count
          style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#006400', alignItems: 'center', justifyContent: 'center' }} // Animatable view styles
        >
          {/* Text inside the button */}
          <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>Go</Text>
        </Animatable.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen; // Exporting HomeScreen component