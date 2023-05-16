const image = ['MeolloStudio01.svg', 'MeolloStudio02.svg']
const colors = ['#e72424', '#e2dfde']; // Add more colors here if needed
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
const randomImage = image[randomIndex];
document.body.style.backgroundColor = randomColor;
document.getElementById('logo').src = randomImage;