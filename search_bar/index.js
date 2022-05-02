const text = document.querySelectorAll(".box");
const container = document.querySelector(".container");
const input = document.getElementById("input");
const warning = document.createElement("h3");
container.appendChild(warning);

input.addEventListener("input", () => {
 
  const value = input.value;
  let itemCount = 0;
  warning.innerText = `no items found for "${value}"`;

  for (let i = 0; i < text.length; i++) {
    if (text[i].innerText.includes(value)) {
      text[i].style.display = "block";
      itemCount++;
    }
    else {
      text[i].style.display = "none";
    }
  }
  if (itemCount !== 0) {
    warning.style.display = "none";
  } else {
    warning.style.display = "block";
  }
});