// const form = document.getElementById("form");
const fontsize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");

// Load saved cookie values if they exist
const savedFontSize = getCookie("fontsize");
const savedFontColor = getCookie("fontcolor");

// Apply saved values or defaults
const currentFontSize = savedFontSize ? savedFontSize : 16;
const currentFontColor = savedFontColor ? savedFontColor : "#000000";

// Set input values
fontsize.value = currentFontSize;
fontcolor.value = currentFontColor;

// ✅ Apply styles using CSS variables
document.documentElement.style.setProperty("--fontsize", currentFontSize + "px");
document.documentElement.style.setProperty("--fontcolor", currentFontColor);

// Save button functionality
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const sizeValue = fontsize.value;
  const colorValue = fontcolor.value;

  // Save cookies (for 2 days)
  setCookie("fontsize", sizeValue, 2);
  setCookie("fontcolor", colorValue, 2);

  // ✅ Apply updated styles immediately
  document.documentElement.style.setProperty("--fontsize", sizeValue + "px");
  document.documentElement.style.setProperty("--fontcolor", colorValue);
});

// Helper: set cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Helper: get cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
}
