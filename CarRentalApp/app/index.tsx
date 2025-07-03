import { Text, View } from "react-native";
import Intro from "./pages/Intro";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Intro />
    </View>
  );
}
