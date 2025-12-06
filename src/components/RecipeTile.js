import { View, Text, Image } from "react-native";
import { s } from "./RecipeTile.style";

export default function RecipeTile({ item }) {
  return (
    <View style={s.container}>
      <Image source={{ uri: item.image }} style={s.image} />
      <View style={s.subContainer}>
        <Text style={s.title} >{item.title}</Text>
      </View>
    </View>
  );
}
