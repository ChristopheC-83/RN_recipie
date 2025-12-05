export function useFetchRecipies() {
  async function getAllRecipies() {
    const URL_API = "https://api.spoonacular.com/recipes/complexSearch";
      const KEY_API = "7c382b29b3b8403794083080e98a1f64";
      const MAX_RESULTS = 30;
    try {
      const response = await fetch(URL_API, {
          apiKey: KEY_API,
          number : MAX_RESULTS
      });
      const data = await response.json();
      console.log("data", data.data.results);
    } catch (error) {
      console.error("Error fetching recipies:", error);
    }

    return [];
  }

  return {};
}
