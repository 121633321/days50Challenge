const loginBtn = document.getElementById("login");
const regBtn = document.getElementById("register");
const upper = document.querySelector(".upperLayer");

loginBtn.addEventListener("click", () => {
    document.querySelector(".login").style.display = "inline";
    document.querySelector(".regiter").style.display = "none";
    upper.classList.remove("left");
    upper.classList.add("right");

})
regBtn.addEventListener("click", () => {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".regiter").style.display = "inline";
    upper.classList.remove("right");
    upper.classList.add("left");
})
