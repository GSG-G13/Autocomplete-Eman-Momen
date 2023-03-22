// const myFetch = require("./fetch");
let myInput = document.querySelector(".myInput");
let options = document.querySelector(".options");

const renderAutoSuggest = (data) => {
  console.log(data);
  options.textContent = "";
  console.log(data);
  data.forEach((word) => {
    // options.innerHTML += `<span class="option">${word}</span>`;
    const option = document.createElement("span");
    option.classList.add("option");
    option.textContent = word;

    options.append(option);
  });
};
const renderFood = () => {};
const getDataFromApi = () => {};
myInput.addEventListener("keyup", (e) => {
  if (myInput.value) {
    fetchData(`/search?q=${e.target.value}`, renderAutoSuggest);
  } else {
    options.textContent = "";
  }
});

// user search on specific term // pizz
// value pizz send to server on our route (search endpoint)
// handle my endpoint get search term
// filter data based on search term
// send response
