document.getElementById("hamburger_btn").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("nav_menu").classList.toggle("show");
})