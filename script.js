const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons);

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        // console.log(event);
        // console.log(event.target);
        if (event.target.id === "box1") {
            body.style.backgroundColor = "#313131";
            body.style.color="#fff"
        }
        if (event.target.id === "box2") {
            body.style.backgroundColor = "green";
            body.style.color="#fff"
        }
        if (event.target.id === "box3") {
            body.style.backgroundColor = "blue";
            body.style.color="#fff"
        }
        if (event.target.id === "box4") {
            body.style.backgroundColor = "skyblue";
            body.style.color="#fff"
        }
        if (event.target.id === "box5") {
            body.style.backgroundColor = "red";
            body.style.color="#fff"
        }
    })
})