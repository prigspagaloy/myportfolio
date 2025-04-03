const projectType = document.getElementById("projects");
const displayProjects = document.getElementById("projects-display");
const header = document.getElementById("home-top");

if (window.location.pathname.includes("projects.html")) {
    header.style.position = "static";
}

fetch("Projects/projects.json").then(response => response.json()).then(json => {
    getJson(json);
    projectDisplay(json);
}).catch(err => console.error(err));

const getJson = (data) => {
    //console.log(data)
    const all = data.reduce((values, item) => {
        if (!values.includes(item.type)) {
            values.push(item.type)
        }
        return values;
    }, ["All"]);
    projectType.innerHTML += all.map(item => {
        //console.log(item)
        return `
        <option class="types" value="${item}">${item}</option>
        `;
    }).join("");
    const types = document.querySelectorAll(".types");
    //console.log(types)
    projectType.addEventListener("change", () => {
        const optionSelected = projectType.value;
        const displaySelected = data.filter(type => {
            if(type.type === optionSelected) {
                return type;
            }
        });
        if (optionSelected === "All") {
            projectDisplay(data);
        } else {
            projectDisplay(displaySelected);
        }
    });
};

const projectDisplay = data => {
    displayProjects.innerHTML = data.map(item => {
        return `
        <a href="${item.link}" target="_blank">
            <div id="item-container">
                <img src="${item.img}" class="project-img">
                <div class="project-name-box">
                    <h2>${item.title}</h2>
            </div>
            </div>
        </a>
        `;
    }).join("");
};