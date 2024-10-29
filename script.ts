const buttonToggle = document.getElementById("toggle") as HTMLButtonElement;
const skills = document.getElementById("get") as HTMLElement;

buttonToggle.addEventListener("click", () => {
  if(skills.style.display === "none"){
    skills.style.display = "block";
  } else{
    skills.style.display = "none";
  }
});
