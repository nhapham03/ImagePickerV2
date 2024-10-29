import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import projectOneImage from "../../assets/images/proj1.png";
import projectTwoImage from "../../assets/images/proj2.png";
import projectThreeImage from "../../assets/images/proj3.png";

const projects = [
  {
    id: "1",
    name: "Project One",
    description: "Interactive Gallery Recipe",
    imageUrl: projectOneImage,
  },
  {
    id: "2",
    name: "Project Two",
    description: "React Counter",
    imageUrl: projectTwoImage,
  },
  {
    id: "3",
    name: "Project Three",
    description: "React Task Manager",
    imageUrl: projectThreeImage,
  },
];

const ProjectDetailPage = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Project not found</Text>
      </View>
    );
  }


  console.log(project.imageUrl);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{project.name}</Text>
      <Image source={project.imageUrl} style={styles.image} />
      <Text style={styles.description}>{project.description}</Text>
      <Pressable style={styles.button} onPress={() => router.push("/HomePage")}>
        <Text style={styles.buttonText}>Go To Home Page using Push method</Text>
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
  image: {
    width: 500,
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "#ff1493",
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ff1493",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default ProjectDetailPage;
