import clearDom from "../utils/clearDom";
import renderToDom from "../utils/renderToDom";

const addEntryForm = (obj = {}) => {
    clearDom();
    const domstring = `
    <form id="${
        obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : "submit-book"
      }" class="mb-4">
        <div class="form-group">
          <label for="title">Entry Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Book Title" value="${
            obj.title || ""
          }" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${
            obj.description || ""
          }</textarea>
        </div>
        <div class="form-group">
        <label for="language">Select a Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>"${obj.category || ""}" required>
    <option value="react">React</option>
    <option value="javaScript">JavaScript</option>
    <option value="c.">C.</option>
    </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit Entry
        </button>
      </form>
    `;

    renderToDom("#form-container", domstring);
};

export default addEntryForm;