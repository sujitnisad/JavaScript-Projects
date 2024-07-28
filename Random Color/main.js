const hex_btn = document.querySelector(".hex-btn");
const change_hex_value = document.querySelector(".hex-color-value");
const change_hex_background = document.querySelector(".hex-color");
hex_btn.addEventListener("click", () => {
  let charset = "0123456789ABCDEF";
  let charlen = charset.length;
  let hexcoloroutput = "";
  for (let i = 0; i < 6; ++i) {
    let random = Math.floor(Math.random() * charlen);
    hexcoloroutput += charset.charAt(random);
  }
  change_hex_value.innerText = `#${hexcoloroutput}`;
  change_hex_background.style.backgroundColor = `#${hexcoloroutput}`;
  hex_btn.style.color = `#${hexcoloroutput}`;
  console.log(hexcoloroutput);
});

//rgb implementation
const rgbColorChange = document.querySelector(".rgb-color");
const rgbbtn = document.querySelector(".rgb-btn");
const rgbbtn1 = document.querySelector(".rgb-btn1");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const diss = document.querySelector(".rgb-display");
rgbbtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  const finalColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  console.log(finalColor);
  rgbColorChange.style.backgroundColor = finalColor;
  rgbbtn.style.color = finalColor;
  diss.innerHTML = `${finalColor}`;
});

const hexcopybtn = document.querySelector(".hex-copy-color");
rgbbtn1.addEventListener("click", () => {
  let extractRedValue = Math.floor(Math.random() * 255);
  let extractGreenValue = Math.floor(Math.random() * 255);
  let extractBlueValue = Math.floor(Math.random() * 255);
  const finalColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  console.log(finalColor);
  rgbColorChange.style.backgroundColor = finalColor;
  rgbbtn1.style.color = finalColor;
});

hexcopybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(change_hex_value.innerText);
  alert("hex color is copied");
});
