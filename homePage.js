var allBox = document.querySelector(".allBox");
fetch("https://phimapi.com/v1/api/danh-sach/phim-le")
  .then((res) => res.json())
  .then((data) => {
    var box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
      <div class="title">
        <h2>${data.data.seoOnPage.titleHead}</h2>
        <p>Xem tất cả</p>
      </div>
      <div class="image">
      
      </div>
    `;

    let image = box.querySelector(".image");
    addImage(data, image);
    allBox.appendChild(box);
  });

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
