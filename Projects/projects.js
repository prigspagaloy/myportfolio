const navHam = document.getElementById("hamburger");
const navMenu = document.getElementById("navbar");
const navBtn = document.getElementById("menu");

navHam.addEventListener("click", () => {
    navHam.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBtn.classList.toggle("active");
});

const projectType = document.getElementById("projects");

fetch("./projects.json").then(response => response.json()).then(json => {
    getJson(json);
}).catch(err => console.error(err));

const getJson = (data) => {
    //console.log(data)
    const all = data.reduce((values, item) => {
        if (!values.includes(item.type)) {
            values.push(item.type)
        }
        return values;
    }, ["All"]);
    projectType.innerHTML = all.map(item => {
        //console.log(item)
        return `
        <option class="types" value="${item}">${item}</option>
        `;
    }).join("");
    const types = document.querySelectorAll(".types");
    //console.log(types)
    projectType.addEventListener("click", e => {
        console.log(e)
    })
}