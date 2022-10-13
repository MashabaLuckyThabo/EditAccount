import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EditAccount from "./screens/EditAccount";

export default function App() {
  return (
    <View style={styles.container}>
      <EditAccount />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
