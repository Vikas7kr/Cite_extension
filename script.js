fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
.then(data=>data.json())
.then(jokeData=>{
    const jokeText=jokeData.quotes[0].text;
    const jokeElement=document.getElementById('jokeElement');
    jokeElement.innerHTML=`❝`+jokeText+`❞`;
    const jokeAuthor=jokeData.quotes[0].author;
    const author=document.getElementById('author');
    author.innerHTML=jokeAuthor;
})