let searchData = async (query) => {
    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;

    let res = await fetch(url);
    let data = await res.json();

    
    localStorage.setItem("news_search",JSON.stringify(query));
    // window.location.href = "../search.html";

    appendData(data.articles)
}


let searchCountry = async (country) => {
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`

    let res = await fetch(url);
    let data = await res.json();
    appendData(data.articles)
}

let appendData = (data) => {
    let main = document.querySelector("#results");
    main.innerHTML = null;
    data.forEach(({title,urlToImage,description,content}) => {
        let box = document.createElement("div");
        box.setAttribute("class", "news");

        box.addEventListener("click", function(){
            briefNews(title,urlToImage,description,content);
        })

        let box2 = document.createElement('div'); 
        let img = document.createElement("img");
        img.src = urlToImage;

        let name = document.createElement("h3");
        name.innerHTML = title;

        let p = document.createElement("p");
        p.innerText = description;
        box2.append(name,p)
        box.append(img,box2);
        main.append(box);
        // console.log(title)
        // console.log(urlToImage)
        // console.log(description)
        // console.log(content)
    })
};


function briefNews(title,urlToImage,description,content){
    let data = JSON.parse(localStorage.getItem("news"))||[];

    let news = [{
        t: title,
        img: urlToImage,
        des: description,
        detail: content
    }]

    localStorage.setItem("news", JSON.stringify(news));

    window.location.href = "../news.html";
}
export { searchData, searchCountry };