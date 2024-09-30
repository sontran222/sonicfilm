let listFilm = document.querySelector(".listFilm");
let page = 0;

fetch("https://phimapi.com/v1/api/danh-sach/hoat-hinh?limit=25&page=1")
  .then((res) => res.json())
  .then((data) => {
    data.data.items.forEach((item) => {
      let box = document.createElement("div");
      box.classList.add("box");
      box.innerHTML = `
      <div class="eposideAmount">${item.episode_current}</div>
      <img
           src="https://phimimg.com/${item.thumb_url}"
           alt=""
      />
      <div class="filmName">${item.name}</div>
      `;

      listFilm.append(box);
      clickImg(box, item.slug);
    });
  });

function clickImg(img, slug) {
  img.addEventListener("click", function () {
    localStorage.clear();
    localStorage.setItem("slug", JSON.stringify(slug));
    console.log(JSON.parse(localStorage.getItem("slug")));
    window.location.href = "xemtruoc.html";
  });
}
