// let data = require("../data/food.json");

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
  console.log(data);
});
