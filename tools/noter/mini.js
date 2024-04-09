function getUsername() {
    let un = localStorage.getItem("username");
    if (un == null || un == "") {
        document.getElementById("username").innerHTML = "user";
    } else {
        document.getElementById("username").innerHTML = un;
    }
}

function clearNotesTxt() {
    let noteTitle = document.getElementById("noteTitle").value;
    let noteText = document.getElementById("noteText").value;
    let bgcol = document.getElementById("noteBgColor").value;
    let fgcol = document.getElementById("notefFgColor").value;
    noteTitle = "";
    noteText = "";
    bgcol = "#000000";
    fgcol = "#FFFFFF";
}

function logOutOption() {
    let un = localStorage.getItem("username");
    if (un == null || un == "" || un == "user") {
        document.getElementById("logoutbtn").setAttribute("disabled", "disabled")
        document.getElementById("notesbtn").setAttribute("disabled", "disabled")
    } else {
        document.getElementById("logoutbtn").removeAttribute("disabled")
        document.getElementById("notesbtn").removeAttribute("disabled")
    }
}

function logout() {
    localStorage.clear();
    alert("Logged out successfully!")
    location.reload();
}