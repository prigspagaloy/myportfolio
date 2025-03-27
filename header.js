const header = document.getElementById("home-top");

header.innerHTML = `
    <div id="web-logo">
        <img class="logo" src="./Img/LOGO.png">
    </div>
        <nav id="navbar">
            <ul id="menu" class="nav-list">
                <li class="nav-btn home"><a href="./">Home</a></li>
                <li class="nav-btn project"><a href="projects.html">Projects</a></li>
                <li class="nav-btn about"><a href="about.html">About</a></li>
                <li class="nav-btn contact"><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="hamburger">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </div>
        <div class="side-bar">
            <div class="top-area"></div>
            <div class="side-bar-menu">
                <ul id="menu" class="nav-list">
                <li class="nav-btn home"><a href="./">Home</a></li>
                <li class="nav-btn project"><a href="projects.html">Projects</a></li>
                <li class="nav-btn about"><a href="about.html">About</a></li>
                <li class="nav-btn contact"><a href="contact.html">Contact</a></li>
            </ul>
            </div>
        </div>
   
`;

const logo = document.querySelector(".logo");
// const navbar = document.getElementById("navbar");
const hamburgerBtn = document.getElementById("hamburger");
const burgerLine = document.querySelectorAll(".burger-line");
const sideBar = document.querySelector(".side-bar");

logo.addEventListener("click", () => {
    window.location = "./";
})

hamburgerBtn.addEventListener("click", () => {
    burgerLine.forEach(line => {
        line.classList.toggle("active");
    })
    sideBar.classList.toggle("show");
})