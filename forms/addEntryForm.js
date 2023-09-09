import clearDom from "../utils/clearDom";
import renderToDom from "../utils/renderToDom";

const addEntryForm = (obj = {}) => {
    clearDom();
    const domstring = `

    `;

    renderToDom("#form-container", domstring);
};

export default addEntryForm;