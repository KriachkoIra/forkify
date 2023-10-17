import View from "./view.js";
import icons from "../../img/icons.svg";

class PaginationView extends View {
  parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this.parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (btn) handler(+btn.dataset.goto);
    });
  }

  generateMarkup() {
    const numPages = Math.ceil(
      this.data.results.length / this.data.resultsPerPage
    );

    const page = this.data.page;
    let markup = ``;

    if (page !== 1) {
      markup += `
            <button data-goto="${
              page - 1
            }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${page - 1}</span>
            </button>`;
    }

    if (page !== numPages) {
      markup += `
            <button data-goto="${
              page + 1
            }" class="btn--inline pagination__btn--next">
                <span>Page ${page + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>`;
    }

    return markup;
  }
}

export default new PaginationView();
