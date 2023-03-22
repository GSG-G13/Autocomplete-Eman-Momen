let myInput = document.querySelector(".myInput");
let options = document.querySelector(".options");
let option = document.querySelectorAll(".option");
let btn = document.querySelector(".btn");
let box_container = document.querySelector(".box-container");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

const renderAutoSuggest = (data) => {
  options.textContent = "";
  data.forEach((word) => {
    const option = document.createElement("span");
    option.classList.add("option");
    option.textContent = word;
    option.addEventListener("click", (e) => {
      fetchData(`/result?q=${e.target.textContent}`, renderFood);
      myInput.value = "";
      options.style.display = "none";
    });

    options.append(option);
  });
};
const renderFood = (data) => {
  box_container.textContent = "";
  data.forEach((result, i) => {
    box_container.innerHTML += `<div class="box" data-aos="fade-up">
    <div class="image">
      <img src="${result.recipe.image}" alt="" />
    </div>
    <div class="content">
      <div class="title">${result.recipe.label}</div>
      <p>
        ${result.recipe.mealType}
      </p>
    </div>
  </div>`;
  });
};

myInput.addEventListener("keyup", (e) => {
  if (myInput.value) {
    fetchData(`/search?q=${e.target.value}`, renderAutoSuggest);
  } else {
    options.textContent = "";
  }
});
