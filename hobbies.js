// JavaScript to create the raining flowers effect
const flowerCount = 30;
const container = document.querySelector(".rain");

for (let i = 0; i < flowerCount; i++) {
    const flower = document.createElement("span");
    flower.className = "flower";
    container.appendChild(flower);
}

// Adjust the falling speed and animation duration based on the number of flowers and the page height
const pageHeight = document.body.clientHeight;
const animationDuration = 15 + flowerCount * 2;

document.styleSheets[0].insertRule(`@keyframes falling {
    0% { transform: translateY(-30px); opacity: 0; }
    100% { transform: translateY(${pageHeight}px); opacity: 1; }
}`, 0);
