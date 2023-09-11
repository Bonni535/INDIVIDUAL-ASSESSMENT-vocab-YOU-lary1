import renderToDom from "../utils/renderToDom";

const filterButtons = () => {
    const domstring =`<div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-danger" id="react-filter-btn">React</button>
    <button type="button" class="btn btn-warning" id="javaScript-filter-btn">JavaScript</button>
    <button type="button" class="btn btn-success" id="c.-filter-btn">C.</button>
  </div>`;

  renderToDom("#buttons", domstring)
}

export default filterButtons;

