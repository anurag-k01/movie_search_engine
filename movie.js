async function getMovie() {
  let city = document.getElementById("city").value;
  let show = document.getElementById("show");
  let div = document.createElement("div");
  let error_div = document.getElementById("ereror");
  let recommend = document.createElement("p");
  recommend.innerHTML = "Recommended";
  recommend.style.color = "red";
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
    if (data.Response == "False") {
      let img = document.createElement("img");
      img.src =
        "https://th.bing.com/th/id/OIP.C_HN1Ny75PfkPGmK8YtR1gHaDT?w=345&h=156&c=7&o=5&dpr=1.25&pid=1.7";

      error_div.append(img);
    } else {
      if (data.imdbRating > 8.5) {
        error_div.innerHTML = null;
        div.append(poster, title, year, rating, recommend);
      } else {
        error_div.innerHTML = null;
        div.append(poster, title, year, rating);
      }
      show.append(div);
    }
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
}
