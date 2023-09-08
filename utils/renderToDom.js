const renderToDom = (divId, content) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHtml = content;
};

export default renderToDom;