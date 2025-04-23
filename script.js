function calculate() {
    const capital = parseFloat(document.getElementById('capital').value);
    const riskPercent = parseFloat(document.getElementById('riskPercent').value);
    const entry = parseFloat(document.getElementById('entry').value);
    const stopLoss = parseFloat(document.getElementById('stopLoss').value);
  
    if (isNaN(capital) || isNaN(riskPercent) || isNaN(entry) || isNaN(stopLoss)) {
      document.getElementById('result').innerText = '⚠️ Please fill all fields correctly.';
      return;
    }
  
    const riskAmount = (capital * riskPercent) / 100;
    const riskPerShare = Math.abs(entry - stopLoss);
    const positionSize = Math.floor(riskAmount / riskPerShare);
    const totalInvestment = positionSize * entry;
  
    document.getElementById('result').innerHTML = `
      ✅ <strong>Position Size:</strong> ${positionSize} shares<br>
      💰 <strong>Total Investment:</strong> ₹${totalInvestment.toFixed(2)}<br>
      🛡️ <strong>Risk Amount:</strong> ₹${riskAmount.toFixed(2)}
    `;
  }
  
  // Automatically run calculate on input
  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculate);
  });
  