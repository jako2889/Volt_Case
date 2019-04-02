"use strict";
window.addEventListener("DOMContentLoaded", init);

import "babel-polyfill";

//GLOBAL
let proj;

// INIT
function init() {
  console.log("init hej");
  getJson();

  //Go To payment event
  goToPayment();
}

//henter json fil fra WP url
async function getJson() {
  console.log("GetJson");

  let jsonObject = await fetch(
    "http://magnusvjensen.dk/2_semester/eksamen/Kea_3sem/Afleveringer/volt/wordpress/wp-json/wp/v2/products"
  );
  proj = await jsonObject.json();

  document.querySelector(".cart_items_totalt_amount").textContent =
    proj.length + " ";

  proj.forEach(element => {
    displayList(element);
  });
}

// display listi

function displayList(e) {
  let element = e.acf;

  let target = document.querySelector("#target");
  let output = document.querySelector("#output");

  let clone = target.cloneNode(true).content;

  clone.querySelector(".prod_title").textContent = element.title;
  clone.querySelector(".fest").textContent = element.festival;
  clone.querySelector(".disc_p").textContent = element.disc_price + " " + "DKK";
  clone.querySelector(".org_p").textContent = element.org_price + " " + "DKK";
  clone.querySelector(".d_img").style.backgroundImage = `url(${
    element.prod_img
  })`;

  if (element.shipping === false) {
    clone.querySelector(".delv_opt").style.display = "none";
  }

  clone.querySelector(".help_icon").addEventListener("click", function() {
    showModal(element);
  });

  output.appendChild(clone);
}

function showModal(e) {
  console.log("show Modal");

  document.querySelector(".modal_hover_wrap").style.display = "block";
  document.querySelector(".modal_title").textContent = e.title;
  document.querySelector(".modal_img").src = e.info_img;

  document.querySelector(".modal_close").addEventListener("click", function() {
    document.querySelector(".modal_hover_wrap").style.display = "none";
  });
}

function goToPayment() {
  document.querySelector(".but_con").addEventListener("click", function() {
    window.location.href = "checkout.html";
  });
}

//GET FUNCTION PRODUCT  DATA EITHER FROM DATABASE OR DIRECTLY FROM INPUT FX ITEM AMOUNT 1,2,3 VOLT CHARGERS

//DISPLAY PRODUCTS -- IF WE USE DATABSE !!

//EVENTLISTENER CLICK GOES TO PURCHASE FLOW HTML THOUGH URL AND BRINGS DATA = AMOUNT OF ITEMS AND IF SHIPPING IS REQUIRED

//SOME CODE THAT TJEKS FOR VALIDATION AND TAKE ACTION ACORDINGLY

// PUTS AMOUNT DATA INTO DATA OBJECT WITH PERSONAL INFORMATION

// OBEJCT OF DATA STUCTURE TO BE SEND INTO POST DATA (NEEDS TO MATCH restdb.io )

//EVENT LISTENER CLICK ON SUBMIT
//POST FUNCTION PERSONAL  / PRODUCT DATA

//SOME CODE THAT CHANGES FORM SECITON 1-2

//SOME CODE THAT CREATE HOVER/MOUSEOVER WINDOW ON INFORMATION ICONS
// SOME CODE THAT TJEKS WICH INFORMATION ICON IS TARGET
// SOME CODE THAT DISLPAY MODAL WIDTH INFORMATION ACORDING TO TARGET ID

// SOME POP UP SIGN SAYING ITS NOT AN OFICIAL SITE
