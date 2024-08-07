import { projectList } from "./projectList.js";

console.log("projectList", projectList);
const listProject = document.querySelector(".project");

const markup = projectList
  .map(
    ({ img, alt, text, stack, linkPage, linkGit, project }) => `
<li class="list">
     <h3>${alt}</h3>
     <img src=${img} alt=${alt} width="210"/>
     <p>${text}</p>
     <span>${stack.join(", ")}</span>
     <span>${project.projectType}/ ${project.role}</span>
     <ul>
        <li class="list"><a href=${linkPage}>link/Page</a></li>
        <li class="list"><a href=${linkGit}>link/Git</a></li>
     </ul>
</li>
`
  )
  .join("");

listProject.insertAdjacentHTML("beforeend", markup);
