import { Button } from "heroui-native";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <Button className="w-full">
        <Button.Label>Explore Properties</Button.Label>
      </Button>
    </View>
  );
}