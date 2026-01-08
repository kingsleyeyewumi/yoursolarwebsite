// Getting Total WH Value from LOAD-AUDIT through Localstorage start
let totalEnergyConsumptionValue = document.querySelector(
  ".totalEnergyConsumptionValue"
);
totalEnergyConsumptionValue.innerHTML = localStorage.getItem("totalWH");
// Getting Total WH Value from LOAD-AUDIT through Localstorage end

// Getting Total KW start
let totalEnergyKWValue = document.querySelector(".totalEnergyKWValue");
let localStorageHolder = localStorage.getItem("totalWH");
totalEnergyKWValue.innerHTML = localStorageHolder / 1000;
// Getting Total KW end

// Getting All Output Values HoContainers start
let actualBatteryCapacityValue = document.querySelector(
  ".actualBatteryCapacityValue"
);
let actualBatteryKWHValue = document.querySelector(".actualBatteryKWHValue");
let adjustedBatteryAHValue = document.querySelector(".adjustedBatteryAHValue");
let adjustedBatteryKWHValue = document.querySelector(
  ".adjustedBatteryKWHValue"
);
let numberOfBatteryValue = document.querySelector(".numberOfBatteryValue");
let numberOfBatteryAdjustedValue = document.querySelector(
  ".numberOfBatteryAdjustedValue"
);
// Getting All Output Values HoContainers end

// All Input Fields Start Here
// Battery Volt start
let batteryVolt = document.querySelector("#batteryVolt");
let batteryVoltHolder = document.querySelector(".batteryVoltHolder");

batteryVolt.addEventListener("click", () => {
  batteryVoltHolder.style.border = "0.09rem solid rgba(247, 85, 26, 0.8)";
});
// Battery Volt end

// Days Of Autonomy start
let daysOfAutonomy = document.querySelector("#daysOfAutonomy");
let daysOfAutonomyHolder = document.querySelector(".daysOfAutonomyHolder");

daysOfAutonomy.addEventListener("click", () => {
  daysOfAutonomyHolder.style.border = "0.09rem solid rgba(247, 85, 26, 0.8)";
});
// Days Of Autonomy end

// Dept Of Discharge start
let deptOfDischarge = document.querySelector("#deptOfDischarge");
let deptOfDischargeHolder = document.querySelector(".deptOfDischargeHolder");

deptOfDischarge.addEventListener("click", () => {
  deptOfDischargeHolder.style.border = "0.09rem solid rgba(247, 85, 26, 0.8)";
});
// Dept Of Discharge end

// Marginal Safety start
let marginalSafety = document.querySelector("#marginalSafety");
let marginalSafetyHolder = document.querySelector(".marginalSafetyHolder");

marginalSafety.addEventListener("click", () => {
  marginalSafetyHolder.style.border = "0.09rem solid rgba(247, 85, 26, 0.8)";
});
// Marginal Safety end

// Battery Efficiency start
let batteryEfficiency = document.querySelector("#batteryEfficiency");
let batteryEfficiencyHolder = document.querySelector(
  ".batteryEfficiencyHolder"
);

batteryEfficiency.addEventListener("click", () => {
  batteryEfficiencyHolder.style.border = "0.09rem solid rgba(247, 85, 26, 0.8)";
});
// Battery Efficiency end

// Battery Size Choosen start
let batterySizeChoosen = document.querySelector("#batterySizeChoosen");
let batterySizeChoosenHolder = document.querySelector(
  ".batterySizeChoosenHolder"
);

batterySizeChoosen.addEventListener("click", () => {
  batterySizeChoosenHolder.style.border =
    "0.09rem solid rgba(247, 85, 26, 0.8)";
});
// Battery Size Choosen end
// All Input Fields Ends Here

// Calculation Part Start Here
function calculation() {
  // Actual Battery Capacity (AH) start
  let batEfficiency = 100 * batteryEfficiency.value;
  let batEffHolder = 100 - batEfficiency;
  let valuesHolder1 =
    (totalEnergyConsumptionValue.innerHTML * batEffHolder) / 100;
  let batEffEnergyCon =
    Number(totalEnergyConsumptionValue.innerHTML) + Number(valuesHolder1);

  let dod = 100 * deptOfDischarge.value;
  let dodValHolder = (batEffEnergyCon * dod) / 100;
  let dodEnergyCon = Number(batEffEnergyCon) + Number(dodValHolder);

  actualBatteryCapacityValue.innerHTML = dodEnergyCon / batteryVolt.value;

  localStorage.setItem(
    "actualBatteryCap",
    actualBatteryCapacityValue.innerHTML * batteryVolt.value
  );
  // Actual Battery Capacity (AH) end

  // Actual Battery Capacity (KWH) start
  actualBatteryKWHValue.innerHTML = actualBatteryCapacityValue.innerHTML / 1000;
  // Actual Battery Capacity (KWH) end

  // Adjusted Battery Capacity (AH) start
  adjustedBatteryAHValue.innerHTML =
    actualBatteryCapacityValue.innerHTML *
    marginalSafety.value *
    daysOfAutonomy.value;

  localStorage.setItem(
    "adjustedBatteryCap",
    adjustedBatteryAHValue.innerHTML * batteryVolt.value
  );
  // Adjusted Battery Capacity (AH) end

  // Adjusted Battery Capacity (KWH) start
  adjustedBatteryKWHValue.innerHTML = adjustedBatteryAHValue.innerHTML / 1000;
  // Adjusted Battery Capacity (KWH) end

  // Number Of Battery Required For Actual Battery Capacity Start
  numberOfBatteryValue.innerHTML =
    actualBatteryCapacityValue.innerHTML / batterySizeChoosen.value;
  // Number Of Battery Required For Actual Battery Capacity End

  // Number Of Battery Required For Adjusted Battery Capacity Start
  numberOfBatteryAdjustedValue.innerHTML =
    adjustedBatteryAHValue.innerHTML / batterySizeChoosen.value;
  // Number Of Battery Required For Adjusted Battery Capacity End
}

// Proceed Btn start
let proceedBtn = document.querySelector(".proceedBtn");
proceedBtn.addEventListener("click", calculation);
// Proceed Btn end
// Calculation Part Ends Here
