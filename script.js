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
  if (month < 1 || month > 12) {
    document.getElementById("myMonth").value = parseInt(prompt("Enter valid month between 1 and 12:"));
    month = parseInt(document.getElementById("myMonth").value);
  }
  return month;
}

function dDay() {
  document.getElementById("myDay").value = parseInt(prompt("Enter the month you were born:"));
  day = parseInt(document.getElementById("myDay").value);
  if (day < 1 || day > 31) {
    document.getElementById("myDay").value = parseInt(prompt("Enter a valid day between 1 and 31:"));
    day = parseInt(document.getElementById("myDay").value);
  }
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


  var man = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var woman = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

  if (female.checked) {

    if (dayofweek == 0) {
      alert("Akan name is " + woman[0]);
    }

    if (dayofweek == 1) {
      alert("Akan name is " + woman[1]);
    }

    if (dayofweek == 2) {
      alert("Akan name is " + woman[2]);
    }

    if (dayofweek == 3) {
      alert("Akan name is " + woman[3]);
    }

    if (dayofweek == 4) {
      alert("Akan name is " + woman[4]);
    }

    if (dayofweek == 5) {
      alert("Akan name is " + woman[5]);
    }

    if (dayofweek == 6) {
      alert("Akan name is " + woman[6]);
    }
  } else {
    if (dayofweek == 0) {
      alert("Akan name is " + man[0]);
    }

    if (dayofweek == 1) {
      alert("Akan name is " + man[1]);
    }

    if (dayofweek == 2) {
      alert("Akan name is " + man[2]);
    }

    if (dayofweek == 3) {
      alert("Akan name is " + man[3]);
    }

    if (dayofweek == 4) {
      alert("Akan name is " + man[4]);
    }

    if (dayofweek == 5) {
      alert("Akan name is " + man[5]);
    }

    if (dayofweek == 6) {
      alert("Akan name is " + man[6]);
    }
  }
}