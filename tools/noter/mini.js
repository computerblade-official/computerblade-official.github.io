function getUsername() {
    let un = localStorage.getItem("username");
    if (un == null || un == "") {
        document.getElementById("username").innerHTML = "user";
    } else {
        document.getElementById("username").innerHTML = un;
    }
}