var name = "chips";

var alert1 = document.getElementById("alarm");
alert1.addEventListener("click", myalarm);

function myalarm() {
    if (name == "keds") {
        alert("hello " + name);
    } else {
        alert("hello stranger");
    }

}