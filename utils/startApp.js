import { getEntry } from "../api/entryData";
import { showEntries } from "../pages/entries";
import domBuilder from "../shared/domBuilder";
import navBar from "../shared/navBar";
import domEvents 
import formEvents
import navigationEvents
import { showEntries } from "../pages/entries";

const startApp = () => {
    domBuilder();
    domEvents();
    formEvents();
    navBar();
    logOutButton();
    navigationEvents();


 getEntry().then((entries) => showEntries(entries))
};

export default startApp;