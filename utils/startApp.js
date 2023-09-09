import { getEntries } from "../api/entryData";
import { showEntries } from "../pages/entries";
import domBuilder from "../shared/domBuilder";
import domEvents from "../events/domEvents";
import formEvents from "../events/formEvent";
// import navigationEvents
import loginButton from "../components/loginButton";
import navBar from "../shared/navBar";

const startApp = () => {
    domBuilder();
    domEvents();
    formEvents();
    // navigationEvents();
    loginButton();
    navBar();

  // document.querySelector('#app').innerHTML = 'bananas'
  getEntries().then((entries) => showEntries(entries))
};

export default startApp;