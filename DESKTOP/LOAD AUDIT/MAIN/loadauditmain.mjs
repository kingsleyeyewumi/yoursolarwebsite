// Getting all variables start here
let loadEventriesContainer = document.querySelector(".loadEventriesContainer");
let LoadMore = document.querySelector(".LoadMore");
let getTotalWH = document.querySelector(".getTotalWH");
let totalPowerNumberHolder = document.querySelector(".totalPowerNumberHolder");
let totalWHNumberHolder = document.querySelector(".totalWHNumberHolder");
// This Total WH container is from "Battery Audit"
// Getting all variables ends here

// LoadMore Btn workings start
function loadMoreWorking() {
  // Successful & Unsuccessful Submit Tag start
  let successful = document.createElement("div");
  let unsuccessful = document.createElement("div");

  successful.setAttribute("class", "successful hideSuccessfulDiv");
  unsuccessful.setAttribute("class", "unsuccessful hideUnsuccessful");

  successful.innerHTML = "Eventries submition is successful ✅";
  unsuccessful.innerHTML = "Eventries submition is unsuccessful ❌";

  loadEventriesContainer.appendChild(successful);
  loadEventriesContainer.appendChild(unsuccessful);
  // Successful & Unsuccessful Submit Tag end

  let loadInvertriesHolder = document.createElement("div");
  loadInvertriesHolder.setAttribute("class", "loadInventriesHolder");
  loadEventriesContainer.appendChild(loadInvertriesHolder);
  // loadEventriesContainer.appendChild(closeBtn);

  if (loadEventriesContainer.innerHTML == "") {
    LoadMore.innerHTML = "Load Fields";
  } else {
    LoadMore.innerHTML = "Load More Fields";
  }

  // Creating the children of loadInventriesHolder start
  // Description start
  let description = document.createElement("div");
  description.setAttribute("class", "description");
  loadInvertriesHolder.appendChild(description);

  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("class", "descriptionInput");
  descriptionInput.setAttribute("placeholder", "");
  description.appendChild(descriptionInput);

  let descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("class", "descriptionLabel");
  descriptionLabel.innerHTML = "Description";
  description.appendChild(descriptionLabel);
  // Description end

  // QTY start
  let qty = document.createElement("div");
  qty.setAttribute("class", "qty");
  loadInvertriesHolder.appendChild(qty);

  let qtyInput = document.createElement("input");
  qtyInput.setAttribute("class", "qtyInput");
  qtyInput.setAttribute("placeholder", "");
  qty.appendChild(qtyInput);

  let qtyLabel = document.createElement("label");
  qtyLabel.setAttribute("class", "qtyLabel");
  qtyLabel.innerHTML = "Quantity";
  qty.appendChild(qtyLabel);
  // QTY end

  // Power(w) start
  let powerW = document.createElement("div");
  powerW.setAttribute("class", "powerW");
  loadInvertriesHolder.appendChild(powerW);

  let powerWInput = document.createElement("input");
  powerWInput.setAttribute("class", "powerWInput");
  powerWInput.setAttribute("placeholder", "");
  powerW.appendChild(powerWInput);

  let powerWLabel = document.createElement("label");
  powerWLabel.setAttribute("class", "powerWLabel");
  powerWLabel.innerHTML = "Power(W)";
  powerW.appendChild(powerWLabel);
  // Power(w) end

  //Surge Start
  let surgeW = document.createElement("div");
  surgeW.setAttribute("class", "surgeW");
  loadInvertriesHolder.appendChild(surgeW);

  let surgeWInput = document.createElement("input");
  surgeWInput.setAttribute("class", "surgeWInput");
  surgeWInput.setAttribute("placeholder", "");
  surgeW.appendChild(surgeWInput);

  let surgeWLabel = document.createElement("label");
  surgeWLabel.setAttribute("class", "surgeWLabel");
  surgeWLabel.innerHTML = "Surge (W)";
  surgeW.appendChild(surgeWLabel);
  // Surge End

  // Surge Balance Start
  let surgeBalanceW = document.createElement("div");
  surgeBalanceW.setAttribute("class", "surgeBalanceW");
  loadInvertriesHolder.appendChild(surgeBalanceW);

  let surgeBalanceValue = document.createElement("div");
  surgeBalanceValue.setAttribute("class", "surgeBalanceValue");
  surgeBalanceW.appendChild(surgeBalanceValue);

  let surgeBalanceWTitle = document.createElement("p");
  surgeBalanceWTitle.setAttribute("class", "surgeBalanceWTitle");
  surgeBalanceWTitle.innerHTML = "Surge Balance (W)";
  surgeBalanceW.appendChild(surgeBalanceWTitle);
  // Surge Balance End

  // TotalPower(w) start
  let totalPowerW = document.createElement("div");
  totalPowerW.setAttribute("class", "totalPowerW");
  totalPowerW.setAttribute("title", "Can't input data");
  loadInvertriesHolder.appendChild(totalPowerW);

  let totalPowerWValue = document.createElement("div");
  totalPowerWValue.setAttribute("class", "totalPowerWValue");
  totalPowerW.appendChild(totalPowerWValue);

  let totalPowerWLabel = document.createElement("label");
  totalPowerWLabel.setAttribute("class", "totalPowerWLabel");
  totalPowerWLabel.innerHTML = "Total Power(W)";
  totalPowerW.appendChild(totalPowerWLabel);
  // TotalPower(w) end

  // Run Time (HRS) start
  let runTime = document.createElement("div");
  runTime.setAttribute("class", "runTime");
  loadInvertriesHolder.appendChild(runTime);

  let runTimeInput = document.createElement("input");
  runTimeInput.setAttribute("class", "runTimeInput");
  runTimeInput.setAttribute("placeholder", "");
  runTime.appendChild(runTimeInput);

  let runTimeLabel = document.createElement("label");
  runTimeLabel.setAttribute("class", "runTimeLabel");
  runTimeLabel.innerHTML = "Run Time (HRS)";
  runTime.appendChild(runTimeLabel);
  // Run Time (HRS) end

  // Total Energy Consumption(WH) start
  let totalEnergyConsumption = document.createElement("div");
  totalEnergyConsumption.setAttribute("class", "totalEnergyConsumption");
  totalEnergyConsumption.setAttribute("title", "Can't input data");
  loadInvertriesHolder.appendChild(totalEnergyConsumption);

  let totalEnergyConsumptionValue = document.createElement("div");
  totalEnergyConsumptionValue.setAttribute(
    "class",
    "totalEnergyConsumptionValue"
  );
  totalEnergyConsumption.appendChild(totalEnergyConsumptionValue);

  let totalEnergyConsumptionLabel = document.createElement("label");
  totalEnergyConsumptionLabel.setAttribute(
    "class",
    "totalEnergyConsumptionLabel"
  );
  totalEnergyConsumptionLabel.innerHTML = "Total Energy (WH)";
  totalEnergyConsumption.appendChild(totalEnergyConsumptionLabel);
  // Total Energy Consumption(WH) end

  // Close Row Btn start
  let closeRowBtn = document.createElement("button");
  closeRowBtn.setAttribute("class", "closeRowBtn");
  closeRowBtn.innerHTML = "x";
  loadInvertriesHolder.appendChild(closeRowBtn);

  function closeRowBtnWorkings() {
    loadInvertriesHolder.style.display = "none";
  }
  closeRowBtn.addEventListener("click", closeRowBtnWorkings);
  // Close Row Btn end
  // Creating the children of loadInventriesHolder end

  // Pushing of totalEnergyConsumption values into an Array start
  function totalWHCalculation() {
    // Surge Start
    let toGetPowerW = qtyInput.value * powerWInput.value;

    surgeBalanceValue.innerHTML = surgeWInput.value * toGetPowerW - toGetPowerW;
    // Surge End

    totalPowerWValue.innerHTML = qtyInput.value * powerWInput.value;

    if (runTimeInput.value == "") {
      totalEnergyConsumptionValue.innerHTML = 0;
    } else {
      totalEnergyConsumptionValue.innerHTML =
        totalPowerWValue.innerHTML * runTimeInput.value;
    }

    getTotalWH.style.display = "none";
    result.style.display = "block";

    if (
      descriptionInput.value == "" ||
      qtyInput.value == "" ||
      powerWInput.value == "" ||
      runTimeInput.value == ""
    ) {
      unsuccessful.classList.toggle("hideUnsuccessful");
    } else {
      totalPowerHolder.push(totalPowerWValue.innerHTML);
      totalPowerConsumeHolder.push(totalEnergyConsumptionValue.innerHTML);
      surgeValuesHolder.push(surgeBalanceValue.innerHTML);
      successful.classList.toggle("hideSuccessfulDiv");
    }

    setTimeout(() => {
      successful.style.display = "none";
      unsuccessful.style.display = "none";
    }, 3000);
  }
  getTotalWH.addEventListener("click", totalWHCalculation);
  // Pushing of totalEnergyConsumption values into an Array end

  // Display of getTotalWH start
  getTotalWH.style.display = "block";
  // Display of getTotalWH end
}

LoadMore.addEventListener("click", loadMoreWorking);
// LoadMore Btn workings end

// Total WH (TWH) & Total Power (W) Calculation start here
// Total Power (W)
let totalPowerHolder = [];
let totalPW = 0;
// Total Power (W)

// Total WH (TWH)
let result = document.querySelector(".result");
let totalPowerConsumeHolder = [];
let total = 0;
// Total WH (TWH)

// Total Surge (W)
let surgeNumberHolder = document.querySelector(".surgeNumberHolder");
let surgeValuesHolder = [];
let totalSurge = 0;
// Total Surge (W)

function totalWHandTotalPowerCalculation() {
  // Total Watt Start
  totalPW = totalPowerHolder.reduce((left, right) => {
    return Number(left) + Number(right);
  }, 0);
  totalPowerNumberHolder.innerHTML = totalPW;
  // Total Watt End

  // Total Watt Hour Start
  total = totalPowerConsumeHolder.reduce((leftSide, rightSide) => {
    return Number(leftSide) + Number(rightSide);
  });
  totalWHNumberHolder.innerHTML = total;
  result.style.display = "none";
  // Total Watt Hour End

  // Total Surge Start
  totalSurge = surgeValuesHolder.reduce((leftSurge, rightSurge) => {
    return Number(leftSurge) + Number(rightSurge);
  }, 0);
  surgeNumberHolder.innerHTML = totalSurge;
  // Total Surge End

  // Total WH Value sent to Localstorage start
  localStorage.setItem("totalWH", total);
  // Total WH Value sent to Localstorage end

  // Total Watt Value sent to Localstorage start
  localStorage.setItem("totalWatt", totalPW);
  // Total Watt Value sent to Localstorage end

  // Total Surge Value sent to Localstorage start
  localStorage.setItem("totalSurgeVal", totalSurge);
  // Total Surge Value sent to Localstorage end
}
result.addEventListener("click", totalWHandTotalPowerCalculation);
// Total WH (TWH) & Total Power (W) Calculation ends here
