import { getEntry } from "../api/entryData";
import { showEntries } from "../pages/entries";
import domBuilder from "../shared/domBuilder";
import navBar from "../shared/navBar";
import domEvents from "../events/domEvents";
import formEvents from "../events/formEvent";
//import navigationEvents
import { showEntries } from "../pages/entries";
import loginButton from "../components/loginButton";

const startApp = () => {
    domBuilder();
    domEvents();
    formEvents();
    navBar();
    logOutButton();
    //navigationEvents();
    loginButton();


 getEntry().then((entries) => showEntries(entries))
};

export default startApp;