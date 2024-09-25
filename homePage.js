var allBox = document.querySelector(".allBox");
var filmCategories = [
  { film: "phim-le", linkNav: "phimle.html" },
  { film: "phim-bo", linkNav: "phimbo.html" },
  { film: "hoat-hinh", linkNav: "hoathinh.html" },
  { film: "tv-shows", linkNav: "TVshow.html" },
  "phim-bo",
  "hoat-hinh",
  "tv-shows",
];

async function FilmImg(filmCategory, linkSeeAll) {
  console.log(linkSeeAll);
  const res = await fetch(
    `https://phimapi.com/v1/api/danh-sach/${filmCategory}`
  );
  const data = await res.json();
  var box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
  <div class="title">
    <h2>${data.data.seoOnPage.titleHead}</h2>
    <a href="${linkSeeAll}">Xem tất cả</a>
  </div>
  <div class="image">
  
  </div>
  `;

  let seeAll = box.querySelector(".title h2");

  let image = box.querySelector(".image");
  addImage(data, image);
  allBox.appendChild(box);
}

function addImage(data, image) {
  console.log(data.data.items);
  data.data.items.forEach((item, index) => {
    let img = document.createElement("img");
    img.src = `https://phimimg.com/` + item.thumb_url;
    img.addEventListener("click", function () {
      localStorage.setItem("slugName", JSON.stringify(item.slug));
      window.location.href = "xemtruoc.html";
    });

    image.append(img);
  });
}

async function loadData() {
  for (let filmCategory of filmCategories) {
    await FilmImg(filmCategory.film, filmCategory.linkNav);
  }
}

function clickToSeeAll(seeAll) {
  seeAll.addEventListener("click", function () {});
}

loadData();




