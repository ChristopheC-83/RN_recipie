import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RecipiesList from "./src/screens/RecipiesList/RecipiesList";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <RecipiesList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
