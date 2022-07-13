/////////// IMPORTING THE VIEW CLASS "PARENT CLASS" ////////////
import View from './View.js';
/////////// IMPORTING THE PreviewView ////////////
import previewView from './previewView.js';

/////////////////////////////////////////////////
/**
 ** Extends the View class
 ** Render the HTML code for the Bookmarks preview.
 */
class BookmarksView extends View {
  /** The bookmarks' container */
  _parentEL = document.querySelector('.bookmarks__list');
  /** The Error Message */
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  /** The Success Message */
  _successMessage = 'Here are your bookmarks. Have fun!';

  /////////////////////////////////////////////////
  //////////////// PUBLIC METHODS /////////////////
  /////////////////////////////////////////////////
  /** Render the bookmarks. */
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  /////////////////////////////////////////////////
  /////////////// PROTECTED METHODS ///////////////
  /////////////////////////////////////////////////
  /** Render the HTML code for the bookmarks preview */
  _generateMarkup() {
    // RENDERING BOOKMARKS PREVIEWS
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
