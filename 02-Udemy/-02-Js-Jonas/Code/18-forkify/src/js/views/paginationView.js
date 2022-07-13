/////////// IMPORTING THE VIEW CLASS "PARENT CLASS" ////////////
import View from './View.js';
/////////// IMPORTING THE ICONS PATH ////////////
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEL = document.querySelector('.pagination');

  /////////////////////////////////////////////////
  //////////////// PUBLIC METHODS /////////////////
  /////////////////////////////////////////////////
  /** lists to the buttons and send its goto dataset to the handler  */
  addHandlerClick(handler) {
    this._parentEL.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      // Get the destination page number.
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  /////////////////////////////////////////////////
  /////////////// PROTECTED METHODS ///////////////
  /////////////////////////////////////////////////
  /**
   * Generate the buttons HTML code according to the the current page
   * and the total pages number.
   */
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this.#generateMarkupButton('next', currentPage + 1);
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return this.#generateMarkupButton('prev', currentPage - 1);
    }

    // Other page
    if (currentPage < numPages) {
      return `
        ${this.#generateMarkupButton('prev', currentPage - 1)}
        ${this.#generateMarkupButton('next', currentPage + 1)}
        `;
    }

    // Page 1, and there are NO other pages
    return ``;
  }

  // Generates the HTML code for the button.
  #generateMarkupButton(destination, numPage) {
    const direction = destination === 'prev' ? 'left' : 'right';
    return `
    <button 
      data-goto="${numPage}"
      class="btn--inline pagination__btn--${destination}"
    >
      <span>Page ${numPage}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-${direction}"></use>
      </svg>
    </button>
    `;
  }
}

export default new PaginationView();
