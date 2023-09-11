import clearDom from "../utils/clearDom";
import renderToDom from "../utils/renderToDom";

const addEntryForm = (obj = {}) => {
    clearDom();
    const domstring = `
    <form id="${
        obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : "submit-entry"
      }" class="mb-4">
        <div class="form-group">
          <label for="title">Entry Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="entryTitle" placeholder="Enter Entry Title" value="${
            obj.title || ""
          }" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" placeholder="Entry Description" id="description" style="height: 100px">${
            obj.description || ""
          }</textarea>
        </div>
        <div class="form-group">
        <label for="language">Select a Language</label>
    <select class="form-control" id="category" required>
    <option value="">Select a Category</option>"${obj.category || ""}" required>
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