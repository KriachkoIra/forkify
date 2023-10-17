class SearchView {
  parentElement = document.querySelector(".search");

  getQuery() {
    const res = this.parentElement.querySelector(".search__field").value;
    this.clearInput();
    return res;
  }

  clearInput() {
    this.parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this.parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
