/////////////////////////////////////////////////
/////////// POLYFILL NEW JS FEATURES ////////////
import 'core-js';
import { async } from 'regenerator-runtime';
import 'regenerator-runtime/runtime';
///////////// IMPORTING THE MODELS //////////////
import * as model from './model.js';
/////////// IMPORTING THE RECIPE VIEW ///////////
import recipeView from './views/recipeView.js';
/////////// IMPORTING THE SEARCH VIEW ///////////
import searchView from './views/searchView.js';
/////////// IMPORTING THE SEARCH VIEW ///////////
import resultsView from './views/resultsView.js';
///////// IMPORTING THE PAGINATION VIEW /////////
import paginationView from './views/paginationView.js';
/////////// IMPORTING THE BOOKMARKS VIEW ///////////
import bookmarksView from './views/bookmarksView.js';
/////////// IMPORTING THE ADD RECIPE VIEW ///////////
import addRecipeView from './views/addRecipeView.js';
///////// IMPORTING THE CONFIGURATIONS //////////
import { MODAL_CLOSE_SEC } from './config.js';

/////////////////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }

/////////////////////////////////////////////////

const ControlRecipes = async function () {
  // GET THE RECIPE ID FORM THE URL
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 1- RENDER SPINNER
    recipeView.renderSpinner();

    // 2- UPDATE RESULTS VIEW TO MARK SELECTED SEARCH RESULT
    resultsView.update(model.getSearchResultsPage());

    // 3- Updating bookmarks view.
    bookmarksView.update(model.state.bookmarks);

    // 4- LOADING THE RECIPE
    await model.loadRecipe(id);

    // 5- RENDERING THE RECIPE
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
    recipeView.renderError();
  }
};

/////////////////////////////////////////////////
/// Search functionality: API SEARCH REQUEST ////
/////////////////////////////////////////////////
/** Get the search results and render it on the page. */
const controlSearchResults = async function () {
  try {
    // 1- GET THE SEARCH QUERY FROM THE SEARCH FORM
    const query = searchView.getQuery();
    if (!query) return;

    // 2- RENDER SPINNER
    resultsView.renderSpinner();

    // 3- LOADING THE SEARCH RESULTS
    await model.loadSearchResults(query);

    // 4- RENDERING THE INITIAL RESULTS "up to the first 10 results"
    resultsView.render(model.getSearchResultsPage());

    // 5- RENDER INITIAL PAGINATION BUTTONS
    paginationView.render(model.state.search);
  } catch (error) {
    console.error(error);
    recipeView.renderError();
  }
};

/** Render the new buttons and the selected page. */
const controlPagination = function (gotoPage) {
  // 1- RENDERING THE NEW RESULTS "According to the page number"
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // 2- RENDER NEW PAGINATION BUTTONS "According to the current page"
  paginationView.render(model.state.search);
};

const controlServings = function (updateTo) {
  // Update the recipe servings (in state)
  model.updateServings(updateTo);

  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1- Add/remove Bookmarks
  // Add to the bookmarked list
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  // Delete the bookmarked for the list
  else model.deleteBookmark(model.state.recipe.id);

  // 2- Update recipe view "Update the View to fill the icon."
  recipeView.update(model.state.recipe);

  // 3- Update recipe view
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  // Render the Bookmarks form the LocalStorage.
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // 1- RENDER SPINNER
    addRecipeView.renderSpinner();

    // 2- UPLOAD THE NEW RECIPE DATA
    await model.uploadRecipe(newRecipe);

    // 3- RENDER RECIPE
    recipeView.render(model.state.recipe);

    // 4- SUCCESS MESSAGE
    addRecipeView.renderMessage();

    // 5- Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // 6- CLOSE FORM WINDOW
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
    console.log(model.state.recipe);
  } catch (error) {
    console.error('💥', error);
    addRecipeView.renderError(error.message);
  }
};

/**
 ** Publisher-subscriber design pattern
 */
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(ControlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
/* (function () {
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerRender(ControlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    addRecipeView.addHandlerUpload(controlAddRecipe);
})(); */
