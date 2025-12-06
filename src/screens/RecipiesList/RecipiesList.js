
import { s } from "./RecipiesList.style";
import { useEffect } from "react";
import { FlatList, Text, ActivityIndicator, View } from "react-native";
import { useRecipesStore } from "../../store/recipiesStore";
import RecipeTile from "../../components/RecipeTile";

export default function RecipiesList() {
  const { recipes, loading, error, fetchRecipes } = useRecipesStore();

  useEffect(() => {
    fetchRecipes();
    // console.log(recipes);
  }, []);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={s}>
      <Text>RecipiesList</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RecipeTile item={item} />}
      />
    </View>
  );
}
