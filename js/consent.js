(function () {
  var GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // substituir pelo ID real do Google Analytics (Admin > Fluxos de dados)
  var STORAGE_KEY = "emart3d_cookie_consent";

  function loadAnalytics() {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.indexOf("XXXX") !== -1) return;
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function showBanner() {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML =
      '<p>Usamos cookies para perceber como o site é usado (Google Analytics). <a href="privacidade.html">Saber mais</a>.</p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn-cookie btn-cookie-reject">Recusar</button>' +
      '<button type="button" class="btn-cookie btn-cookie-accept">Aceitar</button>' +
      "</div>";
    document.body.appendChild(banner);

    banner.querySelector(".btn-cookie-accept").addEventListener("click", function () {
      localStorage.setItem(STORAGE_KEY, "accepted");
      loadAnalytics();
      banner.remove();
    });
    banner.querySelector(".btn-cookie-reject").addEventListener("click", function () {
      localStorage.setItem(STORAGE_KEY, "rejected");
      banner.remove();
    });
  }

  var consent = localStorage.getItem(STORAGE_KEY);
  if (consent === "accepted") {
    loadAnalytics();
  } else if (consent !== "rejected") {
    showBanner();
  }

  document.addEventListener("click", function (e) {
    var target = e.target.closest ? e.target.closest("[data-cookie-manage]") : null;
    if (target) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });
})();
