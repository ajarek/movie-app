const container = document.querySelector('.container');
const btn = document.querySelector('button')
const search = document.getElementById('search');

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  if(search.value && search.value !== '') {
    szukaj()
search.value = ''
} else {
    window.location.reload()
}

})
const szukaj = () => {
  x = search.value

  const randomImageApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${x}"`;
  async function getRandom() {
    fetch(randomImageApiUrl)
      .then(function (response) {
        return response.json();

      }).then(function (json) {
       
        json.results.forEach(element => {
          let title = element.title;
          let image = 'https://image.tmdb.org/t/p/w1280' + element.poster_path;
          let description = '<span>Overview </span><br>' + element.overview;
          let note = element.vote_average;
          const newDiv = document.createElement('div');
          newDiv.classList.add('newDiv')
          newDiv.innerHTML = `<div><img src="${image}"></div>
<div class="h3".><h3>${title}</h3></div>
<div class="rating"><span>${note}</span></div>
<div class="text">${description}</div>
`
          container.appendChild(newDiv)
        })
      })
      .catch(function (error) {
        // jeśli wystąpi jakikolwiek błąd, taki jak brak połączenia internetowego, zostanie wywołane to wywołanie zwrotne
        console.error(error)

      })
  }
  
  getRandom()
}
