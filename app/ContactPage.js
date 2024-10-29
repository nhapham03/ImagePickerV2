import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

const ContactPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Text style={styles.subtitle}>Get in Touch</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>phamminhnha2003@gmail.com</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>(206) 532-6732</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>North Seattle College, Seattle, United States</Text>
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
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff69b4", 
    marginBottom: 10,
    fontFamily: "Cursive",
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff1493", 
    marginTop: 10,
  },
  info: {
    fontSize: 18,
    color: "#ff1493",
    marginBottom: 10,
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

export default ContactPage;
