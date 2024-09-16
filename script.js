const searchBox = document.querySelector("#searchBox");
const searchForm = document.querySelector("#searchForm");
const searchResult = document.querySelector("#searchResult");
const btn = document.querySelector("#show-more-btn");
const submit = document.querySelector("#submit");
const apiUrl= "https://api.unsplash.com/search/photos?page=";
const accessKey = "4vxDmzZd09z8DpwT4WvgvKA1-lDnq88bhWf8NF-lLSU";

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(page ===1){
        searchResult.innerHTML="";
    }
     
    const results = data.results;

    results.map(function(result){
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLinks = document.createElement("a");
        imageLinks.href = result.links.html;
        imageLinks.target = "_blank";

        imageLinks.appendChild(image);
        searchResult.appendChild(imageLinks);
    })
    
    // console.log(data);
}

submit.addEventListener("click", function(e){
    e.preventDefault();
    page = 1;
    searchImages();
    btn.style.display = "block";
})

btn.addEventListener("click", function(){
    page++;
    searchImages();
})

