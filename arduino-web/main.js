const ws = new WebSocket("ws://localhost:8081");
// Create a baseline temperature
let baseTemperature;
const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", resetBaseTemperature);

function resetBaseTemperature(event) {
  event.preventDefault();
  baseTemperature = undefined;
  document.body.style.backgroundColor = "#a0d911";
}

ws.onmessage = (event) => {
  // Init the base temperature from first reading
  if (baseTemperature === undefined) {
    console.log("Setting base temperature:", event.data);
    baseTemperature = parseFloat(event.data);
    return;
  }

  document.getElementById(
    "temperature"
  ).innerText = `Temperature: ${baseTemperature} °C`;

  const currentTemperature = parseFloat(event.data);

  if (currentTemperature > baseTemperature) {
    document.body.style.backgroundColor = "#f5222d";
  } else if (currentTemperature < baseTemperature) {
    document.body.style.backgroundColor = "#13c2c2";
  }

  baseTemperature = currentTemperature; //Update the base temperature
};

// ws.onmessage = (event) => {
//   // Init the base temperature from first reading

//   if (event.data === "triggerKeyEvent") {
//     document.body.style.backgroundColor = "#f52";
//   }
//   if (baseTemperature === undefined) {
//     console.log("Setting base temperature:", event.data);
//     baseTemperature = parseFloat(event.data);
//     return;
//   }

//   document.getElementById(
//     "temperature"
//   ).innerText = `Temperature: ${baseTemperature} °C`;

//   const currentTemperature = parseFloat(event.data);

//   if (currentTemperature > baseTemperature) {
//     document.body.style.backgroundColor = "#f5222d";
//   } else if (currentTemperature < baseTemperature) {
//     document.body.style.backgroundColor = "#13c2c2";
//   }

//   baseTemperature = currentTemperature; //Update the base temperature
// };
