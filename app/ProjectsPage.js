import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const initialProjects = [
  { id: 1, name: "Project One", imageUri: null },
  { id: 2, name: "Project Two", imageUri: null },
  { id: 3, name: "Project Three", imageUri: null },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState(initialProjects);
  const router = useRouter();

  // Function to pick an image for a specific project
  const pickProjectImage = async (projectId) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const selectedImageUri = result.assets[0].uri;
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === projectId
            ? { ...project, imageUri: selectedImageUri }
            : project
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects Page</Text>

      {projects.map((project) => (
        <View key={project.id} style={styles.projectContainer}>
          <Text style={styles.projectName}>{project.name}</Text>

          {/* Display Project Image if available */}
          {project.imageUri ? (
            <Image
              source={{ uri: project.imageUri }}
              style={styles.projectImage}
            />
          ) : (
            <Text style={{ color: "#888" }}>No Image Selected</Text>
          )}

          {/* Button to add/update image */}
          <Button
            title="Add/Update Image"
            onPress={() => pickProjectImage(project.id)}
          />
        </View>
      ))}

      <Pressable onPress={() => router.push("/HomePage")}>
        <Text style={styles.link}>Go To Home Page using Push method</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe4e1",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff69b4",
    marginBottom: 20,
    fontFamily: "Cursive",
  },
  projectContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    width: "80%",
  },
  projectName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  projectImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
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

export default ProjectsPage;
