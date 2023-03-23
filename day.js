let day = new Date().getDay();

switch (day) {
  case 0:
    document.getElementById("sun").style.fontWeight = "bold";
    break;
  case 1:
    document.getElementById("mon").style.fontWeight = "bold";
    break;
  case 2:
    document.getElementById("tue").style.fontWeight = "bold";
    break;
  case 3:
    document.getElementById("wed").style.fontWeight = "bold";
    break;
  case 4:
    document.getElementById("thu").style.fontWeight = "bold";
    break;
  case 5:
    document.getElementById("fri").style.fontWeight = "bold";
    break;
  case 6:
    document.getElementById("sat").style.fontWeight = "bold";
    break;
}
