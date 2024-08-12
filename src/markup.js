import { projectList } from "./projectList.js";

const listProject = document.querySelector(".project");

const markup = projectList
  .map(
    ({ img, alt, text, stack, linkPage, linkGit, project }) => `
<li class="list list-project">
     <h3>${alt}</h3>
     <div class="proj-text-thumb">
        <img src=${img} alt=${alt} class="proj-img" width="250" height="175" />
        <p class="proj-cover-text">${text}</p>
     </div>
     <div class="proj-text-thumb">
        <span class="proj-stack">Stack: ${stack.join(", ")}</span><br/>
        <span class="proj-type">${project.projectType}/ ${
      project.role
    }</span><br/>
     </div>
     <ul class="proj-links">
        <li class="list proj-link"><a class="link" href=${linkPage}>Link/Page</a></li>
        <li class="list proj-link"><a class="link" href=${linkGit}>Link/Git</a></li>
     </ul>
</li>
`
  )
  .join("");

listProject.insertAdjacentHTML("beforeend", markup);
const stackElements = document.querySelectorAll(".proj-stack");

stackElements.forEach((stackElement) => {
  const scrollWidth = stackElement.scrollWidth;
  const clientWidth = stackElement.clientWidth;

  stackElement.addEventListener("mouseover", () => {
    if (scrollWidth > clientWidth) {
      stackElement.style.transition = "transform 3.5s ease-in-out";
      stackElement.style.transform = "translateX(-112%)";
      stackElement.style.overflow = "visible";
      stackElement.style.textOverflow = "clip";
    }
  });

  stackElement.addEventListener("mouseout", () => {
    stackElement.style.transition = "transform 0.5s ease-in-out";
    stackElement.style.transform = "translateX(0)";
    stackElement.style.textOverflow = "ellipsis";
    stackElement.style.overflow = "hidden";
  });
});

const btnDec = document.querySelector(".bnt-dec");
const btnInc = document.querySelector(".bnt-inc");
const wrap = document.querySelector(".wrap-project");

// Встановлюємо поточне зміщення списку
let currentTranslate = 0;

const handleDec = () => {
  // Перевіряємо, чи можемо рухатись ліворуч
  if (currentTranslate > 0) {
    currentTranslate -= 1;
    updateTransform();
  }
};

const handleInc = () => {
  // Перевіряємо, чи можемо рухатись праворуч
  const maxTranslate =
    listProject.children.length - Math.floor(wrap.clientWidth / 300); // кількість видимих елементів
  if (currentTranslate < maxTranslate) {
    currentTranslate += 1;
    updateTransform();
  }
};
const updateTransform = () => {
  listProject.style.transition = "transform 0.3s ease-in-out";
  listProject.style.transform = `translateX(-${currentTranslate * 300}px)`;
};
btnDec.addEventListener("click", handleDec);
btnInc.addEventListener("click", handleInc);
