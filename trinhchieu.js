const slugName = JSON.parse(localStorage.getItem("slugName"));

fetch(`https://phimapi.com/phim/${slugName}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
