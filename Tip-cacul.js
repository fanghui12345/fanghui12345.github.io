const BillS = document.getElementById("BillTotal");
const TipPercentageInput = document.getElementById("Tipperssage");
const TipSlider = document.getElementById("TipSlider");

BillS.addEventListener("input", calculateTip);
TipSlider.addEventListener("input", calculateTip);

function calculateTip() {
  const BillTotal = Number(BillS.value);
  const TipPercentage = Number(TipSlider.value);

  if (!isNumeric(BillTotal)) {
    alert("Please enter a valid number for Bill 3Total.");
    clear();
    return;
  }
  const TipAmount = (BillTotal * TipPercentage) / 100;
  const TotalBill = BillTotal + TipAmount;

  TipPercentageInput.value = TipPercentage;
  document.getElementById("TipAmount").value = TipAmount.toFixed(2);
  document.getElementById("TotalBill").value = TotalBill.toFixed(2);
}

function clear() {
  BillS.value = '';
  TipPercentageInput.value = '';
  document.getElementById("TipAmount").value = '';
  document.getElementById("TotalBill").value = '';
}

function isNumeric(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
