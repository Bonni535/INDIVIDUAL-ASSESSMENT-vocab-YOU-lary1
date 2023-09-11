import { signOut } from "../utils/auth";
import { getEntries } from "../api/entryData";
import { showEntries } from "../pages/entries";
import clearDom from "../utils/clearDom";

const navigationEvents = (user) => {
    document.querySelector("#main-page").addEventListener("click", () => {
      getEntries(user.uid).then(showEntries);
    })

    document.querySelector("#logout-button").addEventListener("click", () => {
        clearDom();
        signOut()});
}

export default navigationEvents;