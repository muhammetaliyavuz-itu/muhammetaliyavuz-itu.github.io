// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// ---------- Modals ----------
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.setAttribute("aria-hidden", "false");
}

function closeModal(el) {
  if (!el) return;
  el.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.open));
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal);
  });
  modal.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(modal));
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal[aria-hidden='false']").forEach((m) => closeModal(m));
  }
});

// ---------- Charts (replace with your real data) ----------
const speeds = [3, 4, 5, 6, 7, 8, 9]; // m/s (example)
let aff1 = [110, 160, 240, 340, 450, 560, 690]; // N (example)
let aff3 = [120, 175, 255, 360, 475, 595, 735];
let aff8 = [130, 190, 275, 390, 520, 650, 810];

const ctxR = document.getElementById("chartResistance");
const chartResistance = new Chart(ctxR, {
  type: "line",
  data: {
    labels: speeds,
    datasets: [
      { label: "AFF1", data: aff1, tension: 0.25, pointRadius: 2 },
      { label: "AFF3", data: aff3, tension: 0.25, pointRadius: 2, hidden: false },
      { label: "AFF8", data: aff8, tension: 0.25, pointRadius: 2 },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#eaf0ff" } },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Speed (m/s)", color: "#a9b4d0" }, ticks: { color: "#a9b4d0" } },
      y: { title: { display: true, text: "Total Resistance (N)", color: "#a9b4d0" }, ticks: { color: "#a9b4d0" } },
    },
  },
});

document.getElementById("toggleAff").addEventListener("click", () => {
  const ds = chartResistance.data.datasets.find((d) => d.label === "AFF3");
  ds.hidden = !ds.hidden;
  chartResistance.update();
});

document.getElementById("randomize").addEventListener("click", () => {
  // Demo only: small random perturbation
  function jitter(arr) {
    return arr.map((v) => Math.round(v * (0.96 + Math.random() * 0.08)));
  }
  chartResistance.data.datasets[0].data = jitter(aff1);
  chartResistance.data.datasets[1].data = jitter(aff3);
  chartResistance.data.datasets[2].data = jitter(aff8);
  chartResistance.update();
});

// Sensitivity chart (example: deviation %)
let metricMode = "Deviation";
const meshCases = ["Mesh01/0.04s", "Mesh01/0.016s", "Mesh02/0.016s", "Mesh03/0.016s"];
let deviation = [0.75, 3.59, 2.80, 0.95]; // %
let meanR = [84.48, 80.84, 81.50, 83.10]; // N (example)

const ctxS = document.getElementById("chartSensitivity");
const chartSensitivity = new Chart(ctxS, {
  type: "bar",
  data: {
    labels: meshCases,
    datasets: [{ label: metricMode, data: deviation }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#eaf0ff" } },
    },
    scales: {
      x: { ticks: { color: "#a9b4d0" } },
      y: { ticks: { color: "#a9b4d0" } },
    },
  },
});

document.getElementById("switchMetric").addEventListener("click", () => {
  if (metricMode === "Deviation") {
    metricMode = "Mean Resistance (N)";
    chartSensitivity.data.datasets[0].label = metricMode;
    chartSensitivity.data.datasets[0].data = meanR;
  } else {
    metricMode = "Deviation";
    chartSensitivity.data.datasets[0].label = metricMode;
    chartSensitivity.data.datasets[0].data = deviation;
  }
  chartSensitivity.update();
});
