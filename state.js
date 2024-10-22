// POINTERS
const colorSelect = document.getElementById("colorSelect");

// STATE
let state = {
  colors: {
    bg: "#0000ff",
  },
};

// FUNCTIONS
function changeColor() {
  let selectedColor = colorSelect.value;
  bg = selectedColor;
}
