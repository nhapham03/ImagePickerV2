import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Link } from "expo-router";

const HomePage = () => {
  const [profileImage, setProfileImage] = useState(null);

  // Request media library permissions
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission is required to access images.");
      }
    })();
  }, []);

  // Function to pick an image
  const pickProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri); // Set the selected image
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is my Home Page</Text>

      {/* Profile Image Section */}
      <View style={styles.profileContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Text style={{ color: "#ff69b4" }}>No Profile Picture</Text>
        )}
        <View style={styles.buttonContainer}>
          <Button title="Upload Profile Image" onPress={pickProfileImage} />
        </View>
      </View>

      {/* Navigation Links */}
      <Link href="/ProjectsPage" style={styles.link}>
        Go to Projects Page
      </Link>
      <Link href="/SkillsPage" style={styles.link}>
        Go to Skills Page
      </Link>
      <Link href="/ContactPage" style={styles.link}>
        Go to Contact Page
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe4e1",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff69b4",
    marginBottom: 20,
    fontFamily: "Cursive",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30, // Adds space below the profile section
    padding: 20, // Adds space around the profile image
  },
  profileImage: {
    width: 300, // Increases the image size
    height: 300,
    borderRadius: 75, // Keeps the image circular
    marginBottom: 20, // Adds space between image and button
    borderWidth: 2,
    borderColor: "#ff69b4",
  },
  buttonContainer: {
    marginTop: 10, // Adds a bit more space above the button
  },
  link: {
    margin: 10,
    fontSize: 18,
    color: "#ff1493",
    textDecorationLine: "underline",
    borderColor: "#ff1493",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffebf1",
    textAlign: "center",
  },
});

export default HomePage;
