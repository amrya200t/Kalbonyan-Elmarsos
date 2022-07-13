/////////// IMPORTING THE ICONS PATH ////////////
import icons from 'url:../../img/icons.svg';

/**
 ** Generates the HTML template for the data.
 ** Render the template on the page.
 ** Renders the Error message.
 ** Renders the success message.
 */
export default class View {
  /** Storing the data to view */
  _data;

  /////////////////////////////////////////////////
  //////////////// PUBLIC METHODS /////////////////
  /////////////////////////////////////////////////
  /** Removes the loading spinnerRender and render the data */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    // GENERATE THE HTML TEMPLATE AND RENDER IT IN THE PARENT ELEMENT
    const markup = this._generateMarkup();

    // return the markup as a string.
    if (!render) return markup;

    this._clear();
    this._parentEL.insertAdjacentHTML('afterbegin', markup);
  }

  /** Updates only the parts that changed instead of rerendering the whole data.*/
  update(data) {
    this._data = data;
    // GENERATE THE HTML TEMPLATE AND RENDER IT IN THE PARENT ELEMENT
    const newMarkup = this._generateMarkup();

    // Convert the markup form a string to a DOM Element.
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Covert the DOMs into array to loop over it.
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentEL.querySelectorAll('*'));

    // Compare the OLD and the NEW DOM elements before and after the edit.
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Update changed TEXT.
      if (
        !newEl.isEqualNode(curEl) && // Check if the Node Elements are different.
        newEl.firstChild?.nodeValue.trim() !== '' // Check if the Content of the text node isn't empty.
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Update changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(atr =>
          curEl.setAttribute(atr.name, atr.value)
        );
      }
    });
  }

  /** Render the loading spinner */
  renderSpinner() {
    const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `;

    this._clear();
    this._parentEL.insertAdjacentHTML('afterbegin', markup);
  }

  /** Render the Error message */
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentEL.insertAdjacentHTML('afterbegin', markup);
  }

  /** Render the Success message */
  renderMessage(message = this._successMessage) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentEL.insertAdjacentHTML('afterbegin', markup);
  }

  /////////////////////////////////////////////////
  /////////////// PROTECTED METHODS ///////////////
  /////////////////////////////////////////////////
  /** Clear the innerHTML of the parentEL */
  _clear() {
    this._parentEL.innerHTML = '';
  }
}
