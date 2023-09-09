import { createEntry, getEntries, updateEntry } from "../api/entryData";
import { showEntries } from "../pages/entries";

const formEvents = () => {
    document.querySelector("#main-container").addEventListener("submit", (e) => {
        e.preventDefault();
    if (e.target.id.includes("submit-entry")) {
        console.warn("CLICKED SUBMIT ENTRY", e.target.id);
      console.warn('e.target.id', e.target.id)
      const payload = {
        title: document.querySelector("#title").value,
        author_id: document.querySelector("#author_id").value,
        category: document.querySelector("#category").value,
        description: document.querySelector("#description").value,
        uid: "",
      };
      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
            getEntries().then(showEntries);
        });
      });

      if (e.target.id.includes("update-entry")) {
        const [, firebaseKey] = e.target.id.split("--");
        console.warn("CLICKED UPDATE ENTRY", e.target.id);
        console.warn(firebaseKey);
        const payload = {
          title: document.querySelector("#title").value,
          author_id: document.querySelector("#author_id").value,
          category: document.querySelector("#category").value,
          description: document.querySelector("#description").value,
          firebaseKey,
        };
  
        updateEntry(payload).then(() => {
          getEntries().then(showEntries);
        });
      }
    }
    });
};

export default formEvents;