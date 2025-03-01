import ThemedButton from "@/components/ThemedButton";
import { ThemedHomeScreenView } from "@/components/ThemedHomeScreenView";
import { ThemedLOGO } from "@/components/ThemedLogo";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <StatusBar style={useColorScheme() === 'dark' ? 'inverted' : 'auto'}/>
        <ThemedHomeScreenView style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <ThemedLOGO style={{ width: 219, height: 200 }} />
            <View style={{ gap: 20, marginBottom: 20 }}>
              <ThemedButton title="Continue with google" onPress={() => {}} icon={"google"} />
              <ThemedButton title="Continue as a guest" onPress={() => {router.navigate("(choices)")}} />
            </View>
          </View>
        </ThemedHomeScreenView>
      </ThemedView>
    </SafeAreaView>
  );
}
