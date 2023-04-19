function showRegistrationForm() {
    var registrationForm = document.getElementById("registration-form");
    registrationForm.style.display = "block";
}

function myFunction(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

