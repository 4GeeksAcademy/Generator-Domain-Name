/* eslint-disable */
// import "./bootstrap.js";
// import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  let list = listOfDomainNames();
  let addNames = document.createElement("ul");
  list.forEach(names => {
    const name = document.createElement("li");
    name.textContent = names;
    addNames.appendChild(name);
  });
  document.body.appendChild(addNames);
  function listOfDomainNames() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let extension = [".com", ".edu", ".net", ".us"];
    let string = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < extension.length; l++) {
            string.push(`${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`);
          }
        }
      }
    }
    return string;
  }
};
listOfDomainNames();
