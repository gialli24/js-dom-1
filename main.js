/* Elements */
const button = document.getElementById("switch_btn");
const bulb = document.getElementById("bulb_image");

console.log(bulb, button);

/* Listener with anonymus function */
button.addEventListener("click", function() {
    bulb.src = "./img/yellow_lamp.png";
})