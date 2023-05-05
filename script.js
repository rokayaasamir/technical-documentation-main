let allCodeParents = document.querySelectorAll(".sec");

allCodeParents.forEach((section) => {
  let code = section.querySelectorAll("code");
  let btn = section.querySelectorAll(".copy-btn");

  for (let i = 0; i < code.length; i++) {
    btn[i].addEventListener("click", () => {
       navigator.clipboard.writeText(code[i].textContent);
    });
  }
});
