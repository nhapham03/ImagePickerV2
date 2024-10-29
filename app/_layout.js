import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="HomePage"
        options={{
          headerTitle: "Home Page",
        }}
      />
      <Stack.Screen
        name="ProjectsPage"
        options={{
          headerTitle: "Projects Page",
        }}
      />
      <Stack.Screen
        name="ContactPage"
        options={{
          headerTitle: "Contact Page",
        }}
      />
      <Stack.Screen
        name="SkillsPage"
        options={{
          headerTitle: "Skills Page",
        }}
      />
      <Stack.Screen
        name="project/[id]"
        options={({ route }) => ({
          headerTitle: `Project Detail Page ${route.params.id}`,
        })}
      />
    </Stack>
  );
};

export default Layout;
