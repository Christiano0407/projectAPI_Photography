//* ==  Project API  Photography == */
const apiKey = ` 68wlXxaMmNtUzrADXqGtupAgDMr3IQEtkb9lPwWhETY`; // Token>
const searchInput = document.querySelector(".search--input");
const viewMore = document.querySelector(".view-More");
const searchForm = document.querySelector(".search__form");
const mainContent = document.querySelector(".main");
let fetchLink;
let currentSearch;
let searchValue;
let pageNumber = 1;

//* ===> apiHeaders  02 <==  */
const apiHandling = async (url) => {
  const fetchData = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: apiKey,
    },
  });

  const data = await fetchData.json();
  return data;
};

//* == Get Curate Photos 01  == */
const curatePhotos = async () => {
  /*  const fetchData = await fetch("https://api.pexels.com/v1/curated?per_page=15"); */
  /*  console.log(fetchData.json()); */
  const data = await apiHandling();
  /*  `https://api.pexels.com/v1/curated?per_page=10` */
  console.log(data);
  /*  generateMarkup(data); */
};

curatePhotos();
