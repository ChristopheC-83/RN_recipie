export function useFetchRecipies() {
  async function getAllRecipies() {
    const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "7c382b29b3b8403794083080e98a1f64";
    const MAX_PER_PAGE = 30;

    const url = `${BASE_URL}?apiKey=${API_KEY}&number=${MAX_PER_PAGE}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log("data", data); // Spoonacular renvoie { results: [...] }
    } catch (error) {
      console.error("Error fetching recipies:", error);
    }
  }

  return { getAllRecipies };
}


//  dans mon cas inutile car j'utilise zustand et non redux