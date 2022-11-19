function gift_windowSwitch(id){
    document.getElementById("kitchen_row").style.display = "none";
    document.getElementById("dining_row").style.display = "none";
    document.getElementById("living_row").style.display = "none";
    document.getElementById("bedroom_row").style.display = "none";
    document.getElementById(id+"_row").style.display = "flex";
}