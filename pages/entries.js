import clearDom from "../utils/clearDom";
import renderToDom from "../utils/renderToDom";

const emptyEntries = () => {
    const domstring = "<h1>No Entries</h1>";
    renderToDom("#view", domstring);
};

const showEntries = (array) => {
    clearDom();

    const btnString = 
    '<button class="btn btn-success btn-lg mb-4" id="add-entry-btn">Add A New Entry</button>';

    renderToDom("#add-button", btnString);

    let domstring = "";
    array.forEach((item) => {
        domstring += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;
    });
    renderToDom("#view", domstring);
};

export { showEntries, emptyEntries };