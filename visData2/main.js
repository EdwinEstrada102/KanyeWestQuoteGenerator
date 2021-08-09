let url = 'https://api.kanye.rest/';

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(myJSON){
    let quote = document.querySelectorAll('p')[1];
    quote.innerText=myJSON.quote;
});