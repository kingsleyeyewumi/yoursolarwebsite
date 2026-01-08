// Getting Overall Actual Panel Watt Through Localstorage Start
let overallActualPanelWattValue = document.querySelector(
  ".overallActualPanelWattValue"
);

overallActualPanelWattValue.innerHTML = localStorage.getItem(
  "overallActualPanelWatt"
);
// Getting Overall Actual Panel Watt Through Localstorage End

// Getting Overall Adjusted Panel Watt Through Localstorage Start
let overallAdjustedPanelWattValue = document.querySelector(
  ".overallAdjustedPanelWattValue"
);

overallAdjustedPanelWattValue.innerHTML = localStorage.getItem(
  "overallAdjustedPanelWatt"
);
// Getting Overall Adjusted Panel Watt Through Localstorage End

// Getting All Output Values Containers start
let solarChargeControlAHValue = document.querySelector(
  ".solarChargeControlAHValue"
);
let solarChargeControlAdjustedAHValue = document.querySelector(
  ".solarChargeControlAdjustedAHValue"
);
let maxPvOfSolarPanelValue = document.querySelector(".maxPvOfSolarPanelValue");
// Getting All Output Values Containers end

// All Input Fields Start Here
// Charge Control Volt Start
let chargeControlVolt = document.querySelector("#chargeControlVolt");
let chargeControlVoltHolder = document.querySelector(
  ".chargeControlVoltHolder"
);

chargeControlVolt.addEventListener("click", () => {
  chargeControlVoltHolder.style.border =
    "0.09rem solid rgba(73, 186, 230, 0.8)";
});
// Charge Control Volt End

// Charge Control Efficiency Start
let chargeControlEfficiency = document.querySelector(
  "#chargeControlEfficiency"
);
let chargeControlEfficiencyHolder = document.querySelector(
  ".chargeControlEfficiencyHolder"
);

chargeControlEfficiency.addEventListener("click", () => {
  chargeControlEfficiencyHolder.style.border =
    "0.09rem solid rgba(73, 186, 230, 0.8)";
});
// Charge Control Efficiency End

// Charge Control Marginal Safety Start
let chargeControlMarginalSafety = document.querySelector(
  "#chargeControlMarginalSafety"
);
let chargeControlMarginalSafetyHolder = document.querySelector(
  ".chargeControlMarginalSafetyHolder"
);

chargeControlMarginalSafety.addEventListener("click", () => {
  chargeControlMarginalSafetyHolder.style.border =
    "0.09rem solid rgba(73, 186, 230, 0.8)";
});
// Charge Control Marginal Safety End

// Solar Panel PV Start
let solarPanelPv = document.querySelector("#solarPanelPv");
let solarPanelPvHolder = document.querySelector(".solarPanelPvHolder");

solarPanelPv.addEventListener("click", () => {
  solarPanelPvHolder.style.border = "0.09rem solid rgba(73, 186, 230, 0.8)";
});
// Solar Panel PV End
// All Input Fields Ends Here

// Calculation Part Start Here

function calculation() {
  let cCEffValHolder; //For Actual Panel
  let cCEffAdjValHolder; //For Adjusted Panel

  // Solar Charge Control For Actual Panel Calculation Start
  if (chargeControlEfficiency.value < 1) {
    let ccEConvert = 100 * chargeControlEfficiency.value;

    let ccEValHolder = 100 - ccEConvert;

    let ccEValue = (overallActualPanelWattValue.innerHTML * ccEValHolder) / 100;

    cCEffValHolder =
      Number(overallActualPanelWattValue.innerHTML) + Number(ccEValue);
  } else if (chargeControlEfficiency.value >= 1) {
    let ccEValHolder2 = 100 - chargeControlEfficiency.value;

    let ccEValue2 =
      (overallActualPanelWattValue.innerHTML * ccEValHolder2) / 100;

    cCEffValHolder =
      Number(overallActualPanelWattValue.innerHTML) + Number(ccEValue2);
  }

  solarChargeControlAHValue.innerHTML = `${
    (cCEffValHolder * chargeControlMarginalSafety.value) /
    chargeControlVolt.value
  } AMPS`;
  // Solar Charge Control For Actual Panel Calculation End

  // Solar Charge Control For Adjusted Panel Calculation Start
  if (chargeControlEfficiency.value < 1) {
    let ccEConvertAdj = 100 * chargeControlEfficiency.value;

    let ccEValHolderAdj = 100 - ccEConvertAdj;

    let ccEValueAdj =
      (overallAdjustedPanelWattValue.innerHTML * ccEValHolderAdj) / 100;

    cCEffAdjValHolder =
      Number(overallAdjustedPanelWattValue.innerHTML) + Number(ccEValueAdj);
  } else if (chargeControlEfficiency.value >= 1) {
    let ccEValHolderAdj2 = 100 - chargeControlEfficiency.value;

    let ccEValueAdj2 =
      (overallAdjustedPanelWattValue.innerHTML * ccEValHolderAdj2) / 100;

    cCEffAdjValHolder =
      Number(overallAdjustedPanelWattValue.innerHTML) + Number(ccEValueAdj2);
  }

  solarChargeControlAdjustedAHValue.innerHTML = `${
    (cCEffAdjValHolder * chargeControlMarginalSafety.value) /
    chargeControlVolt.value
  }  AMPS`;

  maxPvOfSolarPanelValue.innerHTML = `${solarPanelPv.value * 2} PV`;
  // Solar Charge Control For Adjusted Panel Calculation End
}

// Proceed Btn start
let proceedBtn = document.querySelector(".proceedBtn");
proceedBtn.addEventListener("click", calculation);
// Proceed Btn end
// Calculation Part Ends Here
