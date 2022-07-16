/*
  - CHINAR BAWA
  - 0782362
*/
$(function () {
  document.getElementById("location").addEventListener("click",getLocation);
  document.getElementById("submit").addEventListener("click",Submission);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition );
    } else {
      document.getElementById("error").innerHTML =
        " Not supported by the browser.";
    }
  }

  });


  function showPosition(position) {
   let latitude = position.coords.latitude
   localStorage.getItem(latitude );
  let longitude =position.coords.longitude
   localStorage.getItem(longitude );
  document.getElementById('latitude').value=latitude;
  document.getElementById('longitude').value=longitude;

  localStorage.setItem('latitude',latitude);
  localStorage.setItem('longitude',longitude);
  }
function Submission(){ 
 let firstname= document.getElementById('firstName').value;
let lastname =document.getElementById('lastName').value;
localStorage.setItem('firstname',firstname);
  localStorage.setItem('lastname',lastname);
  document.getElementById("Success").innerHTML =
  " Content successfully submitted";

  
}

