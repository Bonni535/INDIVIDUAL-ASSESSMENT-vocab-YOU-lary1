import { getEntries } from "../api/entryData";
import { showEntries } from "../pages/entries";
import domBuilder from "../shared/domBuilder";
import domEvents from "../events/domEvents";
import formEvents from "../events/formEvent";
// import loginButton from "../components/loginButton";
import navBar from "../shared/navBar";
import navigationEvents from "../events/navigationEvents";
import logoutButton from "../components/logoutButton";
import filterButtons from "../components/filterButtons";

const startApp = (user) => {
    domBuilder(user);
    domEvents(user);
    formEvents(user);
    logoutButton();
    navBar();
    filterButtons();
    navigationEvents(user);

  // document.querySelector('#app').innerHTML = 'bananas'
  getEntries(user.uid).then((entries) => showEntries(entries))
};

export default startApp;