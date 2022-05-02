// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

import { searchData, searchCountry } from "./fetch.js";

let navbarBox = document.querySelector("#navbar");
navbarBox.innerHTML = navbar();

//fetch by topic

let searchByKey = (e) => {
    if(e.key === "Enter")
    {
        let query = document.querySelector("#search_input").value;
        searchData(query)
    }
}
document.addEventListener("keydown", searchByKey);



// news

let data = JSON.parse(localStorage.getItem("news"))||[];

let box = document.querySelector("#detailed_news");
let name = document.createElement("h3");
name.innerHTML = data[0].t;
let img = document.createElement("img");
img.src = data[0].img;
let des = document.createElement("p");
des.innerText = `Description :- ${data[0].des}`;
let det = document.createElement("p");
det.innerText = `Detailed News :- ${data[0].detail}`
box.append(name,img,des,det)
console.log(name,img,des,det)