const clearDom = () => {
    document.querySelector('#entry-list').innerHTML= '';
    document.querySelector('#add-button').innerHTML= '';
    document.querySelector('#form-container').innerHTML= '';
    document.querySelector('#view').innerHtml= '';
};

export default clearDom;