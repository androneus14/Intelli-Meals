
const searchForm = document.querySelector('form')
const searchResult = document.querySelector('.search-result')
const containerDiv = document.querySelector('.container')
let searchQuery=''
const APP_ID = '12edc078'
const APP_Key = '4bc7ce7cadab45ebd5a8551769209ee2'

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});
async function fetchAPI () {
    const baseUrl = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_Key}`
    const response = await fetch(baseUrl);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data)
}
function generateHTML(results) {
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += 
        `
        <div class="item">
        <img src="${result.recipe.imgage}" alt="">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" href="#">Get Reciepe</a>
        </div>
        <p class="item-data">Calories:${result.recipe.calories.toFixed(2)}</p>
        
        </div>
        
        `
    })
    searchResult.innerHTML = generatedHTML;
}