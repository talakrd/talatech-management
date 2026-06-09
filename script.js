// =========================
// 🌍 LANGUAGE SYSTEM (IMPROVED)
// =========================
function setLanguage(lang) {
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-en]").forEach(el => {
    const text = el.dataset[lang];
    if (text) {
      el.style.opacity = 0;
      setTimeout(() => {
        el.innerHTML = text;
        el.style.opacity = 1;
      }, 150);
    }
  });

  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("language") || "en");
});


// =========================
// ✨ SCROLL REVEAL (NEW PREMIUM FEEL)
// =========================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =========================
// 🔢 COUNTERS (SMOOTH + FIXED)
// =========================
document.querySelectorAll('.counter').forEach(counter => {
  function update() {
    const target = parseInt(counter.dataset.target || "0");
    let current = parseInt(counter.innerText || "0");

    const step = Math.ceil(target / 120);

    if (current < target) {
      counter.innerText = current + step;
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  }

  update();
});


// =========================
// ❓ FAQ (SMOOTHER TOGGLE)
// =========================
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');
  if (!btn) return;

  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


// =========================
// 📦 SERVICES EXPAND (IMPROVED UI)
// =========================
document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    if (!details) return;

    const open = details.style.maxHeight;

    if (open) {
      details.style.maxHeight = null;
      btn.innerText = "Learn More";
    } else {
      details.style.maxHeight = details.scrollHeight + "px";
      btn.innerText = "Show Less";
    }
  });
});


// =========================
// 💰 PRICE CALCULATOR (CLEANER)
// =========================
const websiteType = document.getElementById("websiteType");
const logoOption = document.getElementById("logoOption");
const seoOption = document.getElementById("seoOption");
const socialOption = document.getElementById("socialOption");
const totalPrice = document.getElementById("totalPrice");
const quoteButton = document.getElementById("quoteButton");

function updatePrice() {
  if (!websiteType || !totalPrice) return;

  let total = Number(websiteType.value || 0);

  if (logoOption?.checked) total += 15;
  if (seoOption?.checked) total += 50;
  if (socialOption?.checked) total += 75;

  totalPrice.innerText = "$" + total;

  // live WhatsApp preview
  if (quoteButton) {
    quoteButton.href =
      `https://wa.me/9647515847687?text=Hi Tala Management, I need a quote. Estimated package: $${total}`;
  }
}

[websiteType, logoOption, seoOption, socialOption].forEach(el => {
  el?.addEventListener("change", updatePrice);
});

updatePrice();


// =========================
// ⭐ TESTIMONIALS (SMOOTHER + SAFE)
// =========================
const testimonials = document.querySelectorAll(".testimonial");
let current = 0;

if (testimonials.length > 1) {
  setInterval(() => {
    testimonials[current].classList.remove("active");
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add("active");
  }, 4500);
}


// =========================
// 🔗 SMOOTH SCROLL (FIXED)
// =========================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const href = a.getAttribute("href");

    if (href && href.length > 1) {
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});


// =========================
// 📩 PROFESSIONAL QUOTE SYSTEM (UPGRADED)
// =========================
function sendQuote() {
  const name = document.getElementById("quoteName")?.value.trim();
  const email = document.getElementById("quoteEmail")?.value.trim();
  const phone = document.getElementById("quotePhone")?.value.trim();
  const service = document.getElementById("quoteService")?.value;
  const details = document.getElementById("quoteDetails")?.value.trim();

  // validation
  if (!name || !email || !phone) {
    alert("Please fill in all required fields.");
    return;
  }

  const message =
`🚀 New Quote Request - Tala Management

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
💼 Service: ${service}

📝 Details:
${details || "No extra details provided"}`;

  // success animation (optional UI hook)
  const btn = document.getElementById("sendQuoteBtn");
  if (btn) {
    btn.innerText = "Sending...";
    setTimeout(() => btn.innerText = "Send Quote", 1500);
  }

  window.open(
    `https://wa.me/9647515847687?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}


// =========================
// ✨ LOADED + POLISH LOG
// =========================
console.log("🚀 Tala Management Premium Build Loaded");
