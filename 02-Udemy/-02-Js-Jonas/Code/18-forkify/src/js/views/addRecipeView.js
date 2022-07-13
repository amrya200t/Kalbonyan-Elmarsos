/////////// IMPORTING THE VIEW CLASS "PARENT CLASS" ////////////
import View from './View.js';

class AddRecipeView extends View {
  _parentEL = document.querySelector('.upload');
  _successMessage = 'Recipe was successfully uploaded :)';

  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  /////////////////////////////////////////////////
  //////////////// PUBLIC METHODS /////////////////
  /////////////////////////////////////////////////
  /** Uploading the recipe */
  addHandlerUpload(handler) {
    this._parentEL.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  /** Hide/Show the form */
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  /////////////////////////////////////////////////
  /////////////// PROTECTED METHODS ///////////////
  /////////////////////////////////////////////////
  _generateMarkup() {}

  /** Show the add recipe form when click on the ADD RECIPE button */
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  /** Close the add recipe form when click on the close button */
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }
}

export default new AddRecipeView();
