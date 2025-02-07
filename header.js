const header = document.getElementById("home-top");

header.innerHTML = `
    <div id="web-logo">
            <h1 id="logo-design">RF</h1><span class="logo-description">Web Development</span>
        </div>
        <nav id="navbar">
            <ul id="menu" class="nav-list">
                <li class="nav-btn"><a href="index.html">Home</a></li>
                <li class="nav-btn"><a href="projects.html">Projects</a></li>
                <li class="nav-btn"><a href="about.html">About</a></li>
            </ul>
        </nav>
        <div id="hamburger">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </div>
`;

const navHam = document.getElementById("hamburger");
const navMenu = document.getElementById("navbar");
const navBtn = document.getElementById("menu");

navHam.addEventListener("click", () => {
    navHam.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBtn.classList.toggle("active");
});