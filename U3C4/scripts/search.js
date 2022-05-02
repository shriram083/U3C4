// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

import { sidebar } from "../components/sidebar.js";

import { searchData, searchCountry } from "./fetch.js";

let navbarBox = document.querySelector("#navbar");
navbarBox.innerHTML = navbar();

let sidebarBox = document.querySelector("#sidebar");
sidebarBox.innerHTML = sidebar();


//fetch by topic

let searchByKey = (e) => {
    if(e.key === "Enter")
    {
        let query = document.querySelector("#search_input").value;
        searchData(query)
    }
}
document.addEventListener("keydown", searchByKey);


// fetch by country

let countries = document.querySelector("#sidebar").children;

for(let el of countries)
{
    if(el.id!="")
    {
        el.addEventListener("click", search);
    } 
}
function search(){
    searchCountry(this.id);
}

//default
window.addEventListener("load", defaultSeacrh);

function defaultSeacrh(){
    let query = JSON.parse(localStorage.getItem("query"));
    searchData(query);
}

