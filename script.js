var year;
var month;
var day;


function getYear() {
  document.getElementById("myYear").value = prompt("Enter the year you were born:");
  year = parseInt(document.getElementById("myYear").value);
  return year;
}

function getMonth() {
  document.getElementById("myMonth").value = parseInt(prompt("Enter the month you were born:"));
  month = parseInt(document.getElementById("myMonth").value);
  return month;
}

function dDay() {
  document.getElementById("myDay").value = parseInt(prompt("Enter the month you were born:"));
  day = parseInt(document.getElementById("myDay").value);
  return day;
}





var male;
var female;

function myFunction() {
  male = document.getElementById("male");
  female = document.getElementById("female");

  year = document.getElementById("myYear").value;
  month = document.getElementById("myMonth").value;
  day = document.getElementById("myDay").value;

  var d = new Date(year, (month - 1), day);

  var dayofweek = d.getDay();
  alert(dayofweek);

  if (female.checked) {

    if (dayofweek == 0) {
      alert("Akosua");
    }

    if (dayofweek == 1) {
      alert("Adwoa");
    }

    if (dayofweek == 2) {
      alert("Abenaa");
    }

    if (dayofweek == 3) {
      alert("Akua");
    }

    if (dayofweek == 4) {
      alert("Yaa");
    }

    if (dayofweek == 5) {
      alert("Afua");
    }

    if (dayofweek == 6) {
      alert("Ama");
    }
  } else {
    if (dayofweek == 0) {
      alert("Kwasi");
    }

    if (dayofweek == 1) {
      alert("Kwadwo");
    }

    if (dayofweek == 2) {
      alert("Kwabena");
    }

    if (dayofweek == 3) {
      alert("Kwaku");
    }

    if (dayofweek == 4) {
      alert("Yaw");
    }

    if (dayofweek == 5) {
      alert("Kofi");
    }

    if (dayofweek == 6) {
      alert("Kwame");
    }
  }
}