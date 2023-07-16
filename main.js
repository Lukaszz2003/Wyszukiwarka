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
    url: "https://porn-movies.p.rapidapi.com/index.php",
    params: { id: "1" },
    headers: {
      "X-RapidAPI-Key": "64663ca6edmshe699af0afa6001fp1aa53ajsnb7c687b0545e",
      "X-RapidAPI-Host": "porn-movies.p.rapidapi.com",
    },
  };

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
