// Add a greeting based on the time of day
document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingElement.textContent = greeting;
});