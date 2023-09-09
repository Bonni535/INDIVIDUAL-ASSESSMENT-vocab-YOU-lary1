import { signOut } from "../utils/auth";
import { getEntries } from "../api/entryData";
import { showEntries } from "../pages/entries";

const navigationEvents = (user) => {
    document.querySelector("#main-page").addEventListener("click", () => {
      getEntries(user.uid).then(showEntries);
    })

    document.querySelector("#logout-button").addEventListener("click", signOut);
}

export default navigationEvents;