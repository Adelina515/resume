import { projectList } from "./projectList.js";

console.log("projectList", projectList);
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
console.log(stackElements);

stackElements.forEach((stackElement) => {
  const scrollWidth = stackElement.scrollWidth;
  const clientWidth = stackElement.clientWidth;

  console.log(`scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth}`);
  console.log(stackElement);
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
