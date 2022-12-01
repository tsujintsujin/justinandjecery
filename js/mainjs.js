function tabChange(id) {
  switch (id) {
    case 'kitchen':
      document.getElementById("kitchen_row").style.display = "block";
      document.getElementById("dining_row").style.display = "none";
      document.getElementById("bedroom_row").style.display = "none";
      document.getElementById("living_row").style.display = "none";
      break;
    case 'dining':
      document.getElementById("kitchen_row").style.display = "none";
      document.getElementById("dining_row").style.display = "block";
      document.getElementById("bedroom_row").style.display = "none";
      document.getElementById("living_row").style.display = "none";
      break;
    case 'living':
      document.getElementById("kitchen_row").style.display = "none";
      document.getElementById("dining_row").style.display = "none";
      document.getElementById("bedroom_row").style.display = "none";
      document.getElementById("living_row").style.display = "block";
      break;
    case 'bedroom':
      document.getElementById("kitchen_row").style.display = "none";
      document.getElementById("dining_row").style.display = "none";
      document.getElementById("bedroom_row").style.display = "block";
      document.getElementById("living_row").style.display = "none";
      break;
  }
}

function locationSwitch(id) {
  switch (id) {
    case "verandaLoc":
      document.getElementById("churchMod").style.display = "none";
      document.getElementById("verandaMod").style.display = "block";
      break;
    case "churchLoc":
      document.getElementById("verandaMod").style.display = "none";
      document.getElementById("churchMod").style.display = "block";
      break;
  }
}

function chngeModTitle(id) {
  let cnfrm = "Pledge in gifting us a <br>" + id + "?";
  document.getElementById("modalTitle").innerHTML = cnfrm;
}

function to_pledge(id) {
  let pledgetemp = document.getElementById("pledge_text").innerHTML;
  document.getElementById("pledge_text").innerHTML = pledgetemp + " " + id;
}

var countDownDate = new Date("Dec 15, 2022 10:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("weddingDay").innerHTML = days + " days " + "to go!";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("weddingDay").innerHTML = "ITS OUR WEDDING DAY!";
  }
}, 1000);

