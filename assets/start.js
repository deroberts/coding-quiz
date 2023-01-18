// save user initials to local storage on hitting enter key
function saveUser() {
    var userName = document.getElementById("user-name").value;
    localStorage.setItem("user", (userName));
}
//add event listener to save user to local storage
document.getElementById("user-name").addEventListener("keyup", saveUser);

