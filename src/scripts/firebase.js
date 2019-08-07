"use script";

(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCHAfuYKInYd06JONXaBIDsOF4SFgXEjsc",
    authDomain: "personal-page-b59e0.firebaseapp.com",
    databaseURL: "https://personal-page-b59e0.firebaseio.com",
    projectId: "personal-page-b59e0",
    storageBucket: "",
    messagingSenderId: "178012766532",
    appId: "1:178012766532:web:84998a69cfd1f152"
  };

  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore();

  const changeSectionLanguage = (obj, parentNode) => {
    Object.keys(obj).forEach(key => {
      const childNode = parentNode.querySelector(`.${key}`);
      if (!childNode) {
        console.error(
          `Can't find node with className ${key} in node ${parentNode}`
        );
        return;
      }

      if (typeof obj[key] === "string") {
        try {
          childNode.textContent = obj[key];
        } catch (error) {
          console.error(`Got an error on field ${key} `, error);
        }
      }

      if (typeof obj[key] === "object") {
        Object.keys(obj[key]).forEach(childClassName => {
          try {
            if (typeof obj[key][childClassName] === "object") {
              changeSectionLanguage(
                obj[key][childClassName],
                parentNode.querySelector(`.${childClassName}`)
              );
            } else {
              childNode.querySelector(`.${childClassName}`).textContent =
                obj[key][childClassName];
            }
          } catch (error) {
            console.error(`Got an error on field ${childClassName} `, error);
          }
        });
      }
    });
  };

  const changeLang = (lang = "en", callback) => {
    const DOC_REF = firestore.doc(`lang/${lang}`);

    DOC_REF.get()
      .then(doc => {
        const data = doc.data();
        try {
          Object.keys(data).forEach(key => {
            const parentNode = document.querySelector(`.${key}`);
            changeSectionLanguage(data[key], parentNode);
          });
        } catch (error) {
          console.error("Got an error", error);
        }
      })
      .then(() => {
        callback();
      })
      .catch(error => {
        console.error("Got an error", error);
      });
  };

  window.changeLang = changeLang;
})();
