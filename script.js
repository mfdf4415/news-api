let url = `https://newsapi.org/v2/everything?q=test&from=2021-11-21&sortBy=publishedAt&apiKey=7d2191a2a0014fb5887436d31df873e9`
const main = document.getElementById("main")
const search = document.getElementById("search")

const handleSearch = () => {
    url = `https://newsapi.org/v2/everything?q=${search.value}&from=2021-11-21&sortBy=publishedAt&apiKey=7d2191a2a0014fb5887436d31df873e9`
    fetchApi().then((res) => {
        console.log(res.articles)
        renderUI(res.articles)
    })
}
let hello = 'hello' 

let fetchApi = async () => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log("error", error)
    }
}

const renderUI = (articles) => {
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }
    articles.forEach(element => {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="title">${element.title}</div>
    <div class="content">${element.content}</div>
    <div class="img"> <img src="${element.urlToImage}" alt=""> </div>
    `
        main.appendChild(div)
    });

}