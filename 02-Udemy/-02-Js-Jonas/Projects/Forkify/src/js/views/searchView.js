/**
 ** Gets the user query from the search form.
 ** Clears the input field.
 ** Renders the results preview of the query with the resultsView using addHandlerSearch() method.
 */
class SearchView {
  /** The search form */
  #parentEL = document.querySelector('.search');

  /////////////////////////////////////////////////
  //////////////// PUBLIC METHODS /////////////////
  /////////////////////////////////////////////////
  /** Get the query from the form */
  getQuery() {
    const query = this.#parentEL.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  /** Load the search results for the query */
  addHandlerSearch(handler) {
    this.#parentEL.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  /////////////////////////////////////////////////
  //////////////// PRIVATE METHODS ////////////////
  /////////////////////////////////////////////////
  /** Clear the input flied */
  #clearInput() {
    this.#parentEL.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
