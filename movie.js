async function getMovie() {
  let city = document.getElementById("city").value;
  let show = document.getElementById("show");
  let div = document.createElement("div");

  div.setAttribute("class", "movie_div");
  try {
    let res = await fetch(`http://www.omdbapi.com/?t=${city}&apikey=e2dc73e1`);
    let data = await res.json();

    let title = document.createElement("p");
    title.innerHTML = `Name :- ${data.Title}`;
    let year = document.createElement("p");
    year.innerHTML = `Year :-  ${data.Year}`;
    let rating = document.createElement("p");
    rating.innerHTML = `Rating :-  ${data.imdbRating}`;
    let poster = document.createElement("img");
    poster.setAttribute("class", "poster");
    poster.src = data.Poster;
    div.append(poster, title, year, rating);

    show.append(div);

    console.log(data);
  } catch (error) {
    div.append(error);

    show.append(div);
  }
}
