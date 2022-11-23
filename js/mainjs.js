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

