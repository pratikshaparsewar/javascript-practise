document.getElementById("submit").addEventListener('click',loadJokes);

function loadJokes(e) {
    const number = document.getElementById("number").value;
    console.log(number);

    //we are using http://www.icndb.com/ website for external api

    const xhr = new XMLHttpRequest();
    xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`,true);
   
    xhr.onload = function(e) {
        if (this.status == 200) {
            const respose = JSON.parse(this.responseText);
            let output = '';
            if(this.responseType === 'success') {
              response.value.forEach(function(joke){
                output += `<li>${joke.joke}</li>`
              });
            }
            else {
                output += '<li>Something went wrong</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
        } 
    }
    xhr.send();
    e.preventDefault();
}