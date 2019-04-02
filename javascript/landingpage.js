"use strict";
window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");

  document
    .querySelector("body > div > div > div.cta_con > div")
    .addEventListener("click", function() {
      window.location.href = "index.html";
    });
}
