var allBox = document.querySelector(".allBox");
var mainFilmImg = document.querySelector(".container img");
const slugName = JSON.parse(localStorage.getItem("slugName"));

fetch(`https://phimapi.com/phim/${slugName}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let categories = data.movie.category;
    let category = [];
    categories.forEach((item) => {
      category.push(item.name);
    });
    mainFilmImg.src = `${data.movie.poster_url}`;
    allBox.innerHTML = `
    <h2>${data.movie.name}</h2>
      <div class="infoFilm">
        <div class="allBlock">
          <div class="block">
            <p>Thể loại: ${category}</p>
            <p>Diễn viên: ${data.movie.actor}</p>
          </div>
          <div class="block">
            <p>Năm phát hành: ${data.movie.year}</p>
            <p>Đạo diễn: ${data.movie.director}</p>
          </div>
          <div class="block">
            <p>Quốc gia: ${data.movie.country[0].name}</p>
            <p>Thời lượng: ${data.movie.time}</p>
          </div>
        </div>
        <div class="content">
          <h4>Nội dung phim</h4>
          <p>${data.movie.content}</p>
        </div>
      </div>
    `;
  });
