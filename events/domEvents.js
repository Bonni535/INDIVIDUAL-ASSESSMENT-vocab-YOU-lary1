import { deleteEntry, getEntries, getSingleEntry } from "../api/entryData";
import addEntryForm from "../forms/addEntryForm";
import { showEntries } from "../pages/entries";

const domEvents = (user) => {
    document.querySelector("#main-container").addEventListener("click", (e) => {
        if (e.target.id.includes("delete-entry-btn")){
            if (window.confirm("Want to delete?")) // eslint-disable-line no-alert
             {
                console.warn("CLICKED DELETE ENTRY", e.target.id);
                console.warn(e.target.id.split("--"));
                const splitArr = e.target.id.split("--");
                console.warn("splitArr", splitArr);
                const [, firebaseKey] = e.target.id.split("--");
                deleteEntry(firebaseKey)
                .then(() => getEntries(user.uid))
                .then((entries) => showEntries(entries));
            }
        }
        
    if (e.target.id.includes("add-entry-btn")) {
        addEntryForm(user.uid);
    }

    if (e.target.id.includes("edit-entry-btn")) {
     const [, firebaseKey] = e.target.id.split("--");
     getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(user.uid, entryObj));
    }

    if (e.target.id.includes("view-entry-btn")) {
        console.warn("VIEW ENTRY", e.target.id);
        console.warn(e.target.id.split("--"));
      }
    
    if (e.target.id.includes("react-filter-btn")) {
        console.warn("SHOW REACT ENTRIES", e.target.id);
        getEntries(user.uid).then((entries) => {
            const reactEntries= []
            entries.forEach((entry) => {
                if (entry.category==="react") {
                    reactEntries.push(entry)
                }
            });
            showEntries(reactEntries)
        })
    }

        if (e.target.id.includes("javaScript-filter-btn")) {
            console.warn("SHOW JAVASCRIPT ENTRIES", e.target.id);
            getEntries(user.uid).then((entries) => {
                const javaScriptEntries= []
                entries.forEach((entry) => {
                    if (entry.category==="javaScript") {
                        javaScriptEntries.push(entry)
                    }
                });
                showEntries(javaScriptEntries)
            })
        }
            
        if (e.target.id.includes("c.-filter-btn")) {
            console.warn("SHOW C. ENTRIES", e.target.id);
            getEntries(user.uid).then((entries) => {
                const cEntries= []
                entries.forEach((entry) => {
                    if (entry.category==="c.") {
                            cEntries.push(entry)
                     }
                });
                showEntries(cEntries)
            })
        };
    });
};

export default domEvents;