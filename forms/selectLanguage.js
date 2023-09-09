import { getEntries } from "../api/entryData";
import renderToDom from "../utils/renderToDom";

const selectLanguage = () => {
    let domstring = ` <label for="language">Select a Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>`;

    getEntries().then((entriesArray) => {
        entriesArray.forEach((entry) => {
            domstring += `
             <option
              value="${language.firebaseKey}"
              ${languageID === language.firebaseKey ? "selected" : ""}>
           </option> `;
        });

        domstring += "</select>";

        renderToDom("#select-language", domstring);
    });
};

export default selectLanguage;