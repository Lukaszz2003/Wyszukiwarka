"use strict";

const showResult = (result) => {
  const { i: image, l: label } = result;
  output.innerHTML += `
  <br/>
  <p>${label}</p>
  <img alt="${label}" src="${image.imageUrl}" width="100">
  <hr/>
  `;
};

const getData = async (searchValue) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "756ab52cf2msh6e63525a3677824p175c96jsn658e8fc788bd",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURIComponent(
    searchValue
  )}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result.d;
    data.forEach(showResult);
  } catch (error) {
    console.error(error);
  }
};

const search = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const output = document.querySelector("#js-output");

searchButton.addEventListener("click", async () => {
  const inputValue = search.value;
  output.innerHTML = "";
  await getData(inputValue);
  search.value = "";
});

async function Class() {}
const inst = new Class();
