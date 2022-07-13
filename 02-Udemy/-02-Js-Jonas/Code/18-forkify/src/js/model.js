/////////////////////////////////////////////////
import { async } from 'regenerator-runtime';

///////// IMPORTING THE CONFIGURATIONS //////////
import { API_URL, RES_PER_PAGE, KEY } from './config.js';

///////////// IMPORTING THE HELPERS /////////////
import { AJAX } from './helpers';

/////////////////////////////////////////////////
////////////// EXPORTING THE MODEL //////////////
/////////////////////////////////////////////////
/** Store all the data about the recipes */
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

/**
 * @param {*} data A recipe Object.
 * @returns {object} A restructured version of the recipe object.
 */
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    ingredients: recipe.ingredients,
    cookingTime: recipe.cooking_time,
    image: recipe.image_url,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    ...(recipe.key && { key: recipe.key }),
  };
};

// LOAD THE RECIPES INTO THE STATE OBJ "CHANGE STATE"
/** Loads the recipes into the sate object */
export const loadRecipe = async function (id) {
  try {
    // LOADING RECIPE
    const data = await AJAX(`${API_URL}${id}?&key=${KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/** Load the search results form the API for a specific query */
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    // loading the search results
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image_url,
        publisher: rec.publisher,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 ** Loads a specific amount of the search results form the results array.
 ** 1 page >= 10 results
 */
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; // 10;

  return state.search.results.slice(start, end);
};

/**
 * Updates the Ingredients quantity according to the number of the servings.
 * Updates the recipe's servings number to the new one.
 * @param {number} newServings
 */
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldOt * newServings / oldServings // 2 * 8 / 4 = 4
  });

  state.recipe.servings = newServings;
};

/** Stores all the bookmarks in the localStorage. */
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

/**
 ** Adds the recipe OBJ to the bookmarks Array.
 ** Mark it as a bookmarked.
 ** Stores it in the local Storage.
 * @param {object} recipe
 */
export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);
  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  // Store it to the local storage
  persistBookmarks();
};

/**
 ** Removes the recipe OBJ with that id from the bookmarks Array.
 ** Mark it as NOT bookmarked.
 ** Remove it from the local Storage.
 * @param {string} id
 */
export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  // Remove it from the local storage
  persistBookmarks();
};

/** Gets the bookmarks from the Local Storage to the bookmarks array. */
const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

/** Removes the bookmarks from the local storage. */
const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

/**
 * Restructured the recipe and sent it to the API.
 * Mark the new recipe as bookmarked.
 * @param {object} newRecipe
 */
export const uploadRecipe = async function (newRecipe) {
  try {
    console.log(newRecipe);
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        const ingArr = ing[1].split(',').map(el => el.trim());

        if (ingArr.length !== 3)
          throw new Error(
            'Wong ingredient format! Please use the correct format :)'
          );
        const [quantity, unit, description] = ingArr;
        return { quantity: +quantity || null, unit, description };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: newRecipe.cookingTime,
      servings: newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?&key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }
};
