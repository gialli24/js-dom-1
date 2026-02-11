/* Elements */
const button = document.getElementById("switch_btn");
const bulb = document.getElementById("bulb_image");

console.log(bulb, button);

/* Listener with anonymus function */
/* button.addEventListener("click", function() {
    const buttonLabel = button.innerHTML;
    if (buttonLabel.includes("Accendi")) {
        bulb.src = "./img/yellow_lamp.png";
        button.innerHTML = "Spegni";
    } else {
        bulb.src = "./img/white_lamp.png";
        button.innerHTML = "Accendi";
    }
}) */

function switchBulb(action) {
    if (action === "turn_on") {
        bulb.src = "./img/yellow_lamp.png";
        button.innerHTML = "Spegni";
    } else {
        bulb.src = "./img/white_lamp.png";
        button.innerHTML = "Accendi";
    }
}

button.addEventListener("click", function() {
    
    const buttonLabel = button.innerHTML;

    if (buttonLabel.includes("Accendi")) {
        switchBulb("turn_on"); 
    } else {
        switchBulb("turn_off"); 
    }
})