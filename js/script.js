const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

var sliderValue = document.getElementById("sliderValue");
var elementoMovido = document.getElementById("elementoMovido");

slider.addEventListener("input", function() {
  sliderValue.textContent = slider.value + "%";
  valorSlider = slider.value;

  sliderValue.style.transform = "translateX(" + valorSlider + "%)";
});