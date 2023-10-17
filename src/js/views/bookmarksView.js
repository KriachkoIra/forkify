import PreviewView from "./previewView.js";

class BookmarksView extends PreviewView {
  parentElement = document.querySelector(".bookmarks__list");
  errorMessage = "No bookmarks yet.";
  message = "";
}

export default new BookmarksView();
