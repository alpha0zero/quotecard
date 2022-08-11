'use strict';

const btn = document.querySelector(".btn");
const idNum = document.querySelector("span");
const advicePara = document.querySelector("p");

fetchData();

btn.addEventListener("click", async () => {
    advicePara.innerText = `loading ...`
    fetchData();
});

async function fetchData() {
    const res = await fetch("https://api.adviceslip.com/advice", {cache: "reload"});
    const { slip } = await res.json();

    const { id , advice } = slip;

    idNum.innerText = id;
    advicePara.innerHTML = `<q>${advice}</q>`
}