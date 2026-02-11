/* Elements */
const button = document.getElementById("switch_btn");
const bulb = document.getElementById("bulb_image");

console.log(bulb, button);

/* Listener with anonymus function */
button.addEventListener("click", function() {
    const buttonLabel = button.innerHTML;
    
    /* Check if turn on or off */
    if (buttonLabel.includes("Accendi")) {
        bulb.src = "./img/yellow_lamp.png";
        button.innerHTML = "Spegni";
    } else {
        bulb.src = "./img/white_lamp.png";
        button.innerHTML = "Accendi";
    }
})