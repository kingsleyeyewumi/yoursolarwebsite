// Getting Total Panel For Actual Battery Through Localstorage Start
let totalPanelForActualBatteryValue = document.querySelector(
  ".totalPanelForActualBatteryValue"
);
totalPanelForActualBatteryValue.innerHTML =
  localStorage.getItem("noOfPanelForActual");
// Getting Total Panel For Actual Battery Through Localstorage End

// Getting Total Panel For Adjusted Battery Through Localstorage Start
let totalPanelForAdjustedBatteryValue = document.querySelector(
  ".totalPanelForAdjustedBatteryValue"
);
totalPanelForAdjustedBatteryValue.innerHTML = localStorage.getItem(
  "noOfPanelForAdjustedBattery"
);
// Getting Total Panel For Adjusted Battery Through Localstorage End

// Getting All Output Values Containers start
let lengthOfCableForActualValue = document.querySelector(
  ".lengthOfCableForActualValue"
);
let lengthOfCableForAdjustedValue = document.querySelector(
  ".lengthOfCableForAdjustedValue"
);
// Getting All Output Values Containers end

// All Input Fields Start Here
// Panel Width Start
let panelWidth = document.querySelector("#panelWidth");
let panelWidthHolder = document.querySelector(".panelWidthHolder");

panelWidth.addEventListener("click", () => {
  panelWidthHolder.style.border = "0.09rem solid rgba(183, 144, 44, 0.8)";
});
// Panel Width End

// Panel Column Gap Start
let panelColumnGap = document.querySelector("#panelColumnGap");
let panelColumnGapHolder = document.querySelector(".panelColumnGapHolder");

panelColumnGap.addEventListener("click", () => {
  panelColumnGapHolder.style.border = "0.09rem solid rgba(183, 144, 44, 0.8)";
});
// Panel Column Gap End

// Panel Row Gap Start
let panelRowGap = document.querySelector("#panelRowGap");
let panelRowGapHolder = document.querySelector(".panelRowGapHolder");

panelRowGap.addEventListener("click", () => {
  panelRowGapHolder.style.border = "0.09rem solid rgba(183, 144, 44, 0.8)";
});
// Panel Row Gap End

// Panel Row Start
let panelRow = document.querySelector("#panelRow");
let panelRowHolder = document.querySelector(".panelRowHolder");

panelRow.addEventListener("click", () => {
  panelRowHolder.style.border = "0.09rem solid rgba(183, 144, 44, 0.8)";
});
// Panel Row End

// Gap Btw Panel & Charge Control Start
let gapBtwnPanelAndChargeControl = document.querySelector(
  "#gapBtwnPanelAndChargeControl"
);
let gapBtwnPanelAndChargeControlHolder = document.querySelector(
  ".gapBtwnPanelAndChargeControlHolder"
);

gapBtwnPanelAndChargeControl.addEventListener("click", () => {
  gapBtwnPanelAndChargeControlHolder.style.border =
    "0.09rem solid rgba(183, 144, 44, 0.8)";
});
// Gap Btw Panel & Charge Control End
// All Input Fields Ends Here

// Calculation Part Start Here
function calculation() {
  let panelWidthHolder = panelWidth.value;
  let panelColumnGapHolder = panelColumnGap.value;
  let panelRowGapHolder = panelRowGap.value;
  let panelRowHolder = panelRow.value;
  let gapBtwnPanelAndChargeControlHolder = gapBtwnPanelAndChargeControl.value;

  //Calculation For Length Of Cable For Actual Battery Start
  let totalPanelColumnGap =
    (Number(panelWidthHolder) + Number(panelColumnGapHolder)) *
    totalPanelForActualBatteryValue.innerHTML;

  let totalPanelRowGap = panelRowGapHolder * panelRowHolder;

  lengthOfCableForActualValue.innerHTML =
    Number(totalPanelColumnGap) +
    Number(totalPanelRowGap) +
    Number(gapBtwnPanelAndChargeControlHolder);
  //Calculation For Length Of Cable For Actual Battery End

  //Calculation For Length Of Cable For Adjusted Battery Start
  let totalPanelColumnGap2 =
    (Number(panelWidthHolder) + Number(panelColumnGapHolder)) *
    totalPanelForAdjustedBatteryValue.innerHTML;

  let totalPanelRowGap2 = panelRowGapHolder * panelRowHolder;

  lengthOfCableForAdjustedValue.innerHTML =
    Number(totalPanelColumnGap2) +
    Number(totalPanelRowGap2) +
    Number(gapBtwnPanelAndChargeControlHolder);
  //Calculation For Length Of Cable For Adjusted Battery End
}

// Proceed Btn start
let proceedBtn = document.querySelector(".proceedBtn");
proceedBtn.addEventListener("click", calculation);
// Proceed Btn end
// Calculation Part Ends Here
