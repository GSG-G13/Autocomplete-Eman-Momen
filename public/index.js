let myInput = document.querySelector(".myInput");
let options = document.querySelector(".options");

const myFetch = (cb) => {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            cb(data);
            // console.log(data);
          } else {
            console.error(xhr.responseText);
          }
        }
      };
      xhr.open("GET", "/data/food.json", true);
      xhr.send();
    }
  };
};

myFetch((data) => {
  // console.log(data);
  myInput.addEventListener("input", (e) => {
    options.textContent = "";
    if (e.target.value !== "") {
      data.ingredients.forEach((ward) => {
        if (ward.startsWith(e.target.value)) {
          options.innerHTML += `<span class="option">${ward}</span>`;
        }
      });
    }
  });
});
