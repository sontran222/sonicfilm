const slugName = JSON.parse(localStorage.getItem("slugName"));
var title = document.querySelector("title");
var listEpisode = document.querySelector(".listEpisode");
var filmName = document.querySelector(".filmName p");
var iframe = document.querySelector(".video iframe");
fetch(`https://phimapi.com/phim/${slugName}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // sửa titlte và tên phim
    title.innerText = `${data.movie.name}`;
    filmName.innerText = `${data.episodes[0].server_data[0].filename}`;

    //Tạo chức năng nút bấm cho các tập
    data.episodes[0].server_data.forEach((item, index) => {
      let createEpisodeButton = document.createElement("span");
      createEpisodeButton.innerText = `${item.name}`;
      if (index == 0) {
        createEpisodeButton.classList.add("choseEpisode");
        iframe.src = `${data.episodes[0].server_data[0].link_embed}`;
      }

      listEpisode.append(createEpisodeButton);
      EpisodeButtonClick(
        createEpisodeButton,
        index,
        data.episodes[0].server_data
      );
    });
  });

function EpisodeButtonClick(button, index, data) {
  button.addEventListener("click", function () {
    var previousButton = document.querySelector(".choseEpisode");
    previousButton.classList.remove("choseEpisode");
    button.classList.add("choseEpisode");
    iframe.src = data[index].link_embed;
    filmName.innerText = data[index].filename;
  });
}
