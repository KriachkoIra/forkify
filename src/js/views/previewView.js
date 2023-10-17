import View from "./view.js";
import icons from "../../img/icons.svg";

class PreviewView extends View {
  generateMarkup() {
    const id = window.location.hash.slice(1);

    return this.data
      .map((recipe) => {
        return `
        <li class="preview">
            <a class="preview__link ${
              recipe.id === id && "preview__link--active"
            }" href="#${recipe.id}">
            <figure class="preview__fig">
                <img src="${recipe.image}" alt="Test" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${recipe.title}</h4>
                <p class="preview__publisher">${recipe.publisher}</p>
                <div class="preview__user-generated ${!recipe.key && "hidden"}">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
                </div>
            
            </a>
        </li>
        `;
      })
      .join("");
  }
}

export default PreviewView;
