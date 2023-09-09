import { deleteEntry, getEntries, getSingleEntry } from "../api/entryData";
import addEntryForm from "../forms/addEntryForm";
import { showEntries } from "../pages/entries";

const domEvents = () => {
    document.querySelector("main-container").addEventListener("click", (e) => {
        if (e.target.id.includes("delete-entry-btn")){
            if (window.confirm("Want to delete?")) // eslint-disable-line no-alert
             {
                console.warn("CLICKED DELETE ENTRY", e.target.id);
                console.warn(e.target.id.split("--"));
                const splitArr = e.target.id.split("--");
                console.warn("splitArr", splitArr);
                const [, firebaseKey] = e.targed.id.split("--");
                deleteEntry(firebaseKey)
                .then(() => getEntries())
                .then((entries) => showEntries(entries));
            }
        }
        
    if (e.target.id.includes("add-entry-btn")) {
        addEntryForm();
    }

    if (e.target.id.includes("edit-entry-btn")) {
     const [, firebaseKey] = e.target.id.split("--");
     getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(entryObj));
    }

    if (e.target.id.includes("view-entry-btn")) {
        console.warn("VIEW ENTRY", e.target.id);
        console.warn(e.target.id.split("--"));
      }
    });
};

export default domEvents;