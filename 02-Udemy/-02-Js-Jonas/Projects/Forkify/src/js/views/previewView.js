/////////// IMPORTING THE VIEW CLASS "PARENT CLASS" ////////////
import View from './View.js';
/////////// IMPORTING THE ICONS PATH ////////////
import icons from 'url:../../img/icons.svg';

/////////////////////////////////////////////////
/**
 ** Extends the View class
 ** Generate the PREVIEWs HTML code.
 */
class PreviewView extends View {
  /** NO PARENT ELEMENT */
  _parentEL = '';

  /////////////////////////////////////////////////
  /////////////// PROTECTED METHODS ///////////////
  /////////////////////////////////////////////////
  /** Render the HTML code for the PREVIEW template */
  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
      <li class="preview">
        <a 
          class="preview__link ${
            this._data.id === id ? 'preview__link--active' : ''
          }" 
          href="#${this._data.id}"
        >
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="recipe__user-generated ${
              this._data.key ? '' : 'hidden'
            }">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new PreviewView();
