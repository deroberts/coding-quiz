// window.onload = function () {
// // save user initials to local storage on keyup

// function saveUser() {
//     var userName = document.getElementById("user-name").value;
//     localStorage.setItem("user", (userName));
// }
// //add event listener to save user to local storage
// document.getElementById("user-name").addEventListener("keyup", saveUser);
// }

window.onload = function () {
    var userName = document.getElementById("user-name");
    if(userName){
      userName.addEventListener("keyup", saveUser);
    }
    function saveUser() {
      var userName = document.getElementById("user-name").value;
      localStorage.setItem("user", (userName));
    }
  }
  
