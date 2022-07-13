/////////// IMPORTING THE VIEW CLASS "PARENT CLASS" ////////////
import View from './View.js';
/////////// IMPORTING THE PreviewView ////////////
import previewView from './previewView.js';

/////////////////////////////////////////////////
/**
 ** Extends the View class
 ** Render the HTML code for the recipe preview.
 */
class ResultsView extends View {
  /** The results' container */
  _parentEL = document.querySelector('.results');
  /** The Error Message */
  _errorMessage = 'No recipes found for your query! Please try agin ;)';
  /** The Success Message */
  _successMessage =
    'Start by searching for a recipe or an ingredient. Have fun!';

  /////////////////////////////////////////////////
  /////////////// PROTECTED METHODS ///////////////
  /////////////////////////////////////////////////
  /** Render the HTML code for the recipe preview */
  _generateMarkup() {
    // RENDERING RECIPE
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
