var allBox = document.querySelector(".allBox");
var mainFilmImg = document.querySelector(".container img");
var container = document.querySelector(".container");
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

    container.addEventListener("click", function () {
      IconPlayClick(data.movie.slug);
    });
  });
mouseMove(container);
mouseLeft(container);

function mouseMove(container) {
  container.addEventListener("mouseover", function () {
    if (!container.querySelector(".iconPlay")) {
      BlurIcon = document.createElement("div");
      BlurIcon.innerHTML = '<img src="iconPlay.png" alt="" class="iconPlay" />';
      BlurIcon.style.background = "rgba(0, 0, 0, 0.4)";
      BlurIcon.style.cursor = "pointer";
      container.append(BlurIcon);
    }
  });
}

function mouseLeft(container) {
  container.addEventListener("mouseleave", function () {
    container.querySelector("div").remove();
    this.style.transition = "5s";
  });
}

function IconPlayClick(slug) {
  localStorage.setItem("slugName", JSON.stringify(slug));
  window.location.href = "trinhchieu.html";
}
