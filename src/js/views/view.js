import icons from "../../img/icons.svg";

export default class View {
  data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this.data = data;
    const markup = this.generateMarkup();
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    this.data = data;
    const newMarkup = this.generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this.parentElement.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      if (!newEl.isEqualNode(curElements[i])) {
        curElements[i].innerHTML = newEl.innerHTML;
      }
    });
  }

  clear() {
    this.parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this.errorMessage) {
    const markup = `
      <div class="error">
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
        <p>${message}</p>
      </div>`;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this.message) {
    const markup = `
      <div class="message">
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
        <p>${message}</p>
      </div>`;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
