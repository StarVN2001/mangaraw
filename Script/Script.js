var button = document.getElementById("button");
var cp = document.getElementById("cp");

button.addEventListener("click", function(){
    button.textContent = button.textContent ==="see more" ? "see less" : "see more";
    cp.classList.toggle("active");
})