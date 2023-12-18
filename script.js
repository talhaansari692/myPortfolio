
  function myDisplay(x) {
    var sideBarOne = document.getElementById("aside");
    if (x.matches) { // If media query matches
      sideBarOne.style.display = "block";
    } else {
      sideBarOne.style.display = "none";
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 1040px)")

  // Call listener function at run time
  myDisplay(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myDisplay(x);
  });


  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("aside");
    var hamBtn = document.getElementById("checkbtn");
    text.style.display = "block";
    hamBtn.style.display = "none";



  }
  function myFunctionn() {
    var checkBox = document.getElementById("myChecks");
    var text = document.getElementById("aside");
    var hamBtn = document.getElementById("checkbtn");
    text.style.display = "none";
    hamBtn.style.display = "block";
  }


  function darkTheme() {
    var themeBtn = document.getElementById("checkbox");
    var asideTheme = document.getElementById("aside");
    var mainTheme = document.getElementById("main");
    var headerTheme = document.getElementById("header");
   
    if (themeBtn.checked == true) {
      asideTheme.style.backgroundColor = "black";
      asideTheme.style.color = "white";

      mainTheme.style.backgroundColor = "black";
      mainTheme.style.color = "white";

      headerTheme.style.backgroundColor = "black";
      headerTheme.style.color = "white";

      

    } else {
      asideTheme.style.backgroundColor = "darkcyan";
      asideTheme.style.color = "white";

      mainTheme.style.backgroundColor = "darkcyan";
      mainTheme.style.color = "white";

      headerTheme.style.backgroundColor = "darkcyan";
      headerTheme.style.color = "white";



    }
  }
