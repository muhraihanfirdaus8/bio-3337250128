const btnToggle = document.querySelector("#btnToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
  btnToggle.textContent = "☀️ Light Mode";
}

btnToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  const isDark = body.classList.contains("dark");
  
  localStorage.setItem("darkMode", isDark);
  
  if (isDark) {
    btnToggle.textContent = "☀️ Light Mode";
  } else {
    btnToggle.textContent = "🌙 Dark Mode";
  }
});

// ===== FETCH API: FAKTA KUCING =====

const isiFakta   = document.querySelector("#isi-fakta");
const btnRefresh = document.querySelector("#btnRefresh");

async function ambilFakta() {
  // Tampilkan loading indicator
  isiFakta.textContent = "⏳ Memuat fakta...";

  try {
const response = await fetch("https://catfact.ninja/fact");

    // Cek apakah HTTP response OK (status 200-299)
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    const data = await response.json();

    // Tampilkan fakta ke DOM
    isiFakta.textContent = data.fact;

  } catch (error) {
    // Tampilkan pesan error yang ramah
    isiFakta.textContent = "⚠️ Gagal memuat fakta. Cek koneksi internet Anda.";
    console.error("Error:", error.message);
  }
}

// Jalankan saat halaman pertama kali dimuat
ambilFakta();

// Jalankan ulang saat tombol diklik
btnRefresh.addEventListener("click", ambilFakta);
