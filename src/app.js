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
    for (let i in pronoun) {
      for (let j in adj) {
        for (let k in noun) {
          for (let l in extension) {
            string.push(`${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`);
          }
        }
      }
    }
    return string;
  }

  listOfDomainNames();
};
