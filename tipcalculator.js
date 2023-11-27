const calCi = () => {
  const amount = parseFloat(document.getElementById("billPrice").value);
  const tipPercent = parseInt(document.querySelector('input[name="stars"]:checked').value);
  const nOfP = document.getElementById("people").value;
  const tip = (amount * tipPercent) / 100;
  const totalBill = (amount + tip) / nOfP;
  const display = document.getElementById("display");
  display.value = `tip Amount: Rs ${tip}\n Each Person:Rs ${totalBill}`;

  const calculateButton = document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault()
  });
}