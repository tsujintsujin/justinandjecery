


function gift_windowSwitch(id){
    document.getElementById("kitchen_row").style.display = "none";
    document.getElementById("dining_row").style.display = "none";
    document.getElementById("living_row").style.display = "none";
    document.getElementById("bedroom_row").style.display = "none";
    document.getElementById(id+"_row").style.display = "flex";
}

function add_pledge(id){
const checkbox = document.getElementById(id)
checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    to_pledge(id);
  } else {

  }
})
}




function to_pledge(id){
var pledgetemp = document.getElementById("pledge_text").innerHTML;
  document.getElementById("pledge_text").innerHTML = pledgetemp +" "+ id;
}


function pledge_check(){

}

function remove_pledge(){
  
}