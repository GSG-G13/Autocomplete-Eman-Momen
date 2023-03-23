let myInput = document.querySelector(".myInput");
let options = document.querySelector(".options");
let option = document.querySelectorAll(".option");
let btn = document.querySelector(".btn");
let box_container = document.querySelector(".box-container");

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
    //   box_container.innerHTML += `<div class="box" data-aos="fade-up">
    //   <div class="image">
    //     <img src="${result.recipe.image}" alt="" />
    //   </div>
    //   <div class="content">
    //     <div class="title">${result.recipe.label}</div>
    //     <p>
    //       ${result.recipe.mealType}
    //     </p>
    //   </div>
    // </div>`;

    const outerDiv = document.createElement("div");
    outerDiv.classList.add("box");
    outerDiv.setAttribute("data-aos", "fade-up");

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image");

    const image = document.createElement("img");
    image.setAttribute("src", result.recipe.image);
    image.setAttribute("alt", "recipe");
    imageWrapper.append(image);

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("content");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = result.recipe.label;

    const paragraph = document.createElement("p");
    paragraph.textContent = result.recipe.mealType;

    innerDiv.appendChild(title);
    innerDiv.appendChild(paragraph);

    outerDiv.appendChild(imageWrapper);
    outerDiv.appendChild(innerDiv);

    box_container.appendChild(outerDiv);
  });
};

myInput.addEventListener("keyup", (e) => {
  if (myInput.value) {
    options.style.display = "block";
    fetchData(`/search?q=${e.target.value}`, renderAutoSuggest);
  } else {
    options.textContent = "";
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
});
