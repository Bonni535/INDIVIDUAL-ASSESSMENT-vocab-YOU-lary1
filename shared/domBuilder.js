import renderToDom from "../utils/renderToDom";

const domBuilder = () => {
    const domstring = `
    <div id="navigation"></div>
    <div id="main-container">
        <div id="buttons"></div>
        <div id="add-button"></div>
        <div id="form-container"></div>
        <div id="entry-list"></div>
        <div id="view"></div>
    </div>`;


renderToDom('#app', domstring);
};

export default domBuilder;