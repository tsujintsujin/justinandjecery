



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

function chngeModTitle(id) {
  let cnfrm = "Pledge in gifting us a <br>" + id + "?";
  document.getElementById("modalTitle").innerHTML = cnfrm;
}




function to_pledge(id) {
  let pledgetemp = document.getElementById("pledge_text").innerHTML;
  document.getElementById("pledge_text").innerHTML = pledgetemp + " " + id;
}


function playPause() {
  let vid = document.getElementById("Sitevid");
  if (vid.paused) {
    vid.play();
    document.getElementById("playbtn").style.display = "none";
  } else {
    vid.pause();
    document.getElementById("playbtn").style.display = "block";

  }
}

