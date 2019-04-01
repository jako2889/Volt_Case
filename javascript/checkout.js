
//GLOBALS
let basicinfo = {};

function post(customer) {
    
    const postData = JSON.stringify(customer);
    fetch("https://volt3sem-11e6.restdb.io/rest/customer", {
        method: "post",
        headers: {
         "Content-Type": "application/json; charset=utf-8",
         "x-apikey": "5ca21c32df5d634f46ecb11b",
         "cache-control": "no-cache"
        },
        body: postData
    })
    .then(res => res.json())
    .then(data => {

    console.log(data);
    //Display confirm site
    //Use data to show in right box
    
 });
 
 }

const registerform = document.querySelector("#register_con");
const paymentform = document.querySelector("#payment_con");

 // Lav eventlistener på submit button og send data til post
 registerform.addEventListener("submit", event => {
    event.preventDefault();
    console.log("submitted");
   
    basicinfo = {
        firstname: registerform.elements.firstname.value,
        lastname: registerform.elements.lastname.value,
        email: registerform.elements.mail.value,
        phone: registerform.elements.phone.value,
        detail_country: registerform.elements.country.value,
        address: registerform.elements.address.value,
        zip_code: registerform.elements.zip_code.value,
        city: registerform.elements.city.value,
        shipping_country: registerform.elements.shipping_country.value
   
    }
    console.log(basicinfo);

    // Display info in summary box

    // Display Payment site & un display register
    registerform.style.display = "none";
    paymentform.style.display = "grid";
   
   });


 // Lav eventlistener på submit button og send data til post
 paymentform.addEventListener("submit", event => {
    event.preventDefault();
    console.log("submitted");
   
    // display confirm form
    // Post basic info to function post
    post(basicinfo);
   
   });