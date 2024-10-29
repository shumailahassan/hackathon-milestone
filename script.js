var buttonToggle = document.getElementById("toggle");
var skills = document.getElementById("get");
buttonToggle.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
