import PreviewView from "./previewView.js";

class ResultsView extends PreviewView {
  parentElement = document.querySelector(".results");
  errorMessage = "No recipes found for your query.";
  message = "";
}

export default new ResultsView();
