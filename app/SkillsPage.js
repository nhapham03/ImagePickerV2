import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

const skills = [
  { id: 1, name: "JavaScript", level: "Intermediate" },
  { id: 2, name: "React", level: "Intermediate" },
  { id: 3, name: "Node.js", level: "Intermediate" },
  { id: 4, name: "CSS", level: "Intermediate" },
];

const SkillsPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills Page</Text>
      <View style={styles.skillsContainer}>
        {skills.map((skill) => (
          <View key={skill.id} style={styles.skill}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <Text style={styles.skillLevel}>{skill.level}</Text>
          </View>
        ))}
      </View>
      <Pressable style={styles.button} onPress={() => router.push("/HomePage")}>
        <Text style={styles.buttonText}>Go To Home Page using Push method</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/HomePage")}
      >
        <Text style={styles.buttonText}>
          Go To Home Page using Replace method
        </Text>
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
  skillsContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  skill: {
    backgroundColor: "#ffebf1", 
    borderColor: "#ff1493", 
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: 250,
    alignItems: "center",
  },
  skillName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff1493", 
  },
  skillLevel: {
    fontSize: 16,
    color: "#ff69b4",
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

export default SkillsPage;
