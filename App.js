import { registerRootComponent } from "expo";
import { Stack } from "expo-router";

const HomePage = require("./app/HomePage").default;
const ProjectsPage = require("./app/ProjectsPage").default;
const SkillsPage = require("./app/SkillsPage").default;
const ContactPage = require("./app/ContactPage").default;
const ProjectDetailPage = require("./app/project/[id]").default; 

function App() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="projects" component={ProjectsPage} />
      <Stack.Screen name="skills" component={SkillsPage} />
      <Stack.Screen name="contact" component={ContactPage} />
      <Stack.Screen name="project/:id" component={ProjectDetailPage} />
    </Stack>
  );
}


registerRootComponent(App);
