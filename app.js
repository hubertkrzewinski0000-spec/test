/**
 * app.js — KYC Risk Analysis Dashboard
 * Business Logic: Handles risk scoring and AML visualization.
 */

// Filter functionality: Essential for Compliance Officers to quickly drill down 
// into specific high-risk entities during investigative workflows.
document.getElementById('client-search').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('#client-tbody tr');
  rows.forEach(row => {
    const name = row.children[1].textContent.toLowerCase();
    row.style.display = name.includes(term) ? '' : 'none';
  });
});

function renderCharts() {
  // Business Context: Doughnut chart provides an immediate snapshot of the 
  // current portfolio risk appetite, aiding in strategic AML resource allocation.
  const ctx = document.getElementById('risk-dist-chart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['High', 'Medium', 'Low'],
      datasets: [{
        data: [3, 3, 4], // Data points aligned with KYC risk assessment criteria
        backgroundColor: ['#E24B4A', '#EF9F27', '#639922']
      }]
    },
    options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderClients();
  renderCharts();
  // ... (pozostałe funkcje)
});