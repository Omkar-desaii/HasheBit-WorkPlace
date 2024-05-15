const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
// Get elements
const textContainer = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorChangeBtn = document.getElementById("colorchange");
const fontSizeRange = document.getElementById("fontsize");
const styleButtons = document.querySelectorAll(".stylebt");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");

// Function to change text color
colorChangeBtn.addEventListener("click", () => {
  const color = colorBox.value;
  textContainer.style.color = color;
  updateCSSProps();
});

// Function to change font size
fontSizeRange.addEventListener("input", () => {
  const fontSize = fontSizeRange.value + "px";
  textContainer.style.fontSize = fontSize;
  updateCSSProps();
});

// Function to toggle styles
styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const style = button.id;
    if (style === "underline" || style === "italic" || style === "bold") {
      textContainer.style[style] =
        textContainer.style[style] === "none" ? style : "none";
    }
    updateCSSProps();
  });
});

// Function to change font family
fontList.addEventListener("change", () => {
  const font = fontList.value;
  textContainer.style.fontFamily = font;
  updateCSSProps();
});

// Function to update displayed CSS properties
function updateCSSProps() {
  let cssText = "";
  const styles = window.getComputedStyle(textContainer);
  const styleProperties = [
    "color",
    "font-size",
    "font-family",
    "text-decoration",
    "font-style",
    "font-weight",
  ];
  styleProperties.forEach((prop) => {
    cssText += `${prop}: ${styles[prop]}; `;
  });
  cssProps.textContent = cssText;
}

// Initial call to update CSS properties
updateCSSProps();
italicBtn.addEventListener("click", function () {
  textContainer.style.fontStyle =
    textContainer.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineBtn.addEventListener("click", function () {
  textContainer.style.textDecoration =
    textContainer.style.textDecoration === "underline" ? "none" : "underline";
});
