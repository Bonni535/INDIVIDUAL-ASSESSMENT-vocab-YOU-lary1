import { getEntries } from "../api/entryData";
import renderToDom from "../utils/renderToDom";

const selectLanguage = (uid) => {
    let domstring = ` <label for="language">Select a Language</label>
    <select class="form-control" id="category-id" required>
    <option value="">Select a Language</option>`;

    getEntries(uid).then((entriesArray) => {
        entriesArray.forEach((entry) => {
            domstring += `
             <option
              value="${language.firebaseKey}"
              ${categoryID === category.firebaseKey ? "selected" : ""}>
           </option> `;
        });

        domstring += "</select>";

        renderToDom("#select-category", domstring);
    });
};

export default selectLanguage;