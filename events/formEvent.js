import { createEntry, getEntries, updateEntry } from "../api/entryData";
import { showEntries } from "../pages/entries";

const formEvents = (user) => {
    document.querySelector("#form-container").addEventListener("submit", (e) => {
        e.preventDefault();
    if (e.target.id.includes("submit-entry")) {
      const currentTime = new Date().toLocaleDateString();
        console.warn("CLICKED SUBMIT ENTRY", e.target.id);
      console.warn('e.target.id', e.target.id)
      const payload = {
        title: document.querySelector("#title").value,
        category: document.querySelector("#category").value,
        description: document.querySelector("#description").value,
        timeSubmitted: currentTime,
        uid: `${user.uid}`,
      };
      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
            getEntries(user.uid).then(showEntries);
        });
      });
    }
      if (e.target.id.includes("update-entry")) {
        const currentUpdateTime = new Date().toLocaleDateString();
        const [, firebaseKey] = e.target.id.split("--");
        console.warn("CLICKED UPDATE ENTRY", e.target.id);
        console.warn(firebaseKey);
        const payload = {
          title: document.querySelector("#title").value,
          category: document.querySelector("#category").value,
          description: document.querySelector("#description").value,
          timeSubmitted: currentUpdateTime,
          firebaseKey,
        };
  
        updateEntry(payload).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      }
    })
    }

export default formEvents;