const INSURAE_REF_CODE = "INSURAE_DEMO_001";
const DEFAULT_AFFILIATE_RATE = 0.05;

// IMPORTANT:
// Replace "affiliateUrl" with official insurer affiliate/tracking links after signing contracts.
// Until then, links are demo external URLs with UTM tracking parameters.

const providers = [
  {
    id: "salama",
    name: "Salama Islamic Arab Insurance",
    types: ["health", "car"],
    logo: "SA",
    summary: {
      en: "Islamic insurance / takaful provider. Suitable for customers seeking Sharia-compliant options.",
      ar: "شركة تأمين تكافلي إسلامي مناسبة للعملاء الباحثين عن خيارات متوافقة مع الشريعة.",
      fa: "ارائه‌دهنده بیمه اسلامی/تکافل، مناسب مشتریانی که گزینه‌های سازگار با شریعت می‌خواهند."
    },
    website: "https://www.salama.ae/",
    tags: ["Takaful", "Health", "Car"]
  },
  {
    id: "methaq",
    name: "Methaq Takaful Insurance",
    types: ["health", "car"],
    logo: "ME",
    summary: {
      en: "Takaful insurance provider. Add official affiliate URL after partnership approval.",
      ar: "شركة تأمين تكافلي. يتم إضافة رابط التتبع الرسمي بعد اعتماد الشراكة.",
      fa: "شرکت بیمه تکافل. لینک رسمی همکاری پس از قرارداد اضافه می‌شود."
    },
    website: "https://www.methaq.ae/",
    tags: ["Takaful", "UAE", "Partner-ready"]
  },
  {
    id: "union",
    name: "Union Insurance",
    types: ["health", "car"],
    logo: "UI",
    summary: {
      en: "UAE insurer offering multiple insurance products. Ready for referral tracking setup.",
      ar: "شركة تأمين إماراتية تقدم منتجات تأمينية متعددة وجاهزة لإعداد تتبع الإحالات.",
      fa: "شرکت بیمه اماراتی با محصولات متنوع و آماده برای ردیابی معرفی مشتری."
    },
    website: "https://www.unioninsurance.ae/",
    tags: ["Health", "Car", "UAE"]
  },
  {
    id: "gig",
    name: "GIG Gulf",
    types: ["health", "car"],
    logo: "GG",
    summary: {
      en: "Well-known regional insurer for health, motor and other products.",
      ar: "شركة تأمين إقليمية معروفة للتأمين الصحي والسيارات ومنتجات أخرى.",
      fa: "شرکت بیمه شناخته‌شده منطقه‌ای برای بیمه سلامت، خودرو و سایر محصولات."
    },
    website: "https://www.giggulf.ae/",
    tags: ["Health", "Car", "Popular"]
  },
  {
    id: "orient",
    name: "Orient Insurance",
    types: ["health", "car"],
    logo: "OR",
    summary: {
      en: "Major UAE insurance provider with health and motor insurance solutions.",
      ar: "شركة تأمين رئيسية في الإمارات تقدم حلول التأمين الصحي والسيارات.",
      fa: "یکی از شرکت‌های مهم بیمه در امارات با خدمات سلامت و خودرو."
    },
    website: "https://www.orientinsurance.com/",
    tags: ["Health", "Car", "Corporate"]
  },
  {
    id: "sukoon",
    name: "Sukoon Insurance",
    types: ["health", "car"],
    logo: "SU",
    summary: {
      en: "Established UAE insurer for health, motor, travel and commercial insurance.",
      ar: "شركة تأمين راسخة في الإمارات للتأمين الصحي والسيارات والسفر والتجاري.",
      fa: "شرکت بیمه باسابقه در امارات برای سلامت، خودرو، سفر و تجاری."
    },
    website: "https://www.sukoon.com/",
    tags: ["Health", "Car", "Established"]
  },
  {
    id: "adnic",
    name: "ADNIC",
    types: ["health", "car"],
    logo: "AD",
    summary: {
      en: "Large UAE insurer serving individuals and businesses.",
      ar: "شركة تأمين كبيرة في الإمارات تخدم الأفراد والشركات.",
      fa: "شرکت بزرگ بیمه امارات برای افراد و کسب‌وکارها."
    },
    website: "https://www.adnic.ae/",
    tags: ["Health", "Car", "Business"]
  },
  {
    id: "dubai-insurance",
    name: "Dubai Insurance",
    types: ["health", "car"],
    logo: "DI",
    summary: {
      en: "UAE insurance company with multiple personal and business products.",
      ar: "شركة تأمين إماراتية تقدم منتجات متعددة للأفراد والشركات.",
      fa: "شرکت بیمه اماراتی با محصولات متنوع فردی و شرکتی."
    },
    website: "https://www.dubins.ae/",
    tags: ["Car", "Health", "UAE"]
  }
];

const translations = {
  en: {
    tagline:"Compare and connect with UAE insurance providers",
    badge:"UAE Insurance Marketplace",
    heroTitle:"Find the right insurance provider, then buy directly from them.",
    heroText:"Insurae does not sell insurance. We connect customers to licensed insurers and track referrals for partner commissions.",
    chooseType:"Choose insurance type", allTypes:"All types", health:"Health Insurance", car:"Car Insurance",
    searchProvider:"Search provider", showProviders:"Show providers", providers:" Providers",
    affiliateRate:" affiliate commission ready", directPayment:"Direct payment", toInsurer:" to insurer",
    providersTitle:"Insurance providers", providersSubtitle:"Customer clicks are tracked before redirecting to the official insurer website.",
    exportClicks:"Export click log", howTrackingWorks:"How commission tracking works",
    trackStep1:"Each partner/affiliate gets a unique referral code.",
    trackStep2:"Every insurer button includes Insurae UTM parameters and partner code.",
    trackStep3:"The insurer confirms completed sales using monthly reports, affiliate panel, or API/webhook.",
    trackStep4:"Insurae calculates 5% commission for approved sales.",
    visit:"Visit official website", home:"Home", compare:"Compare", partners:"Partners", contact:"Contact",
    leavingTitle:"You are leaving Insurae", leavingText:"You will be redirected to the official insurance provider website. Purchase and payment happen directly there.",
    cancel:"Cancel", continue:"Continue"
  },
  ar: {
    tagline:"قارن وتواصل مع مزودي التأمين في الإمارات",
    badge:"سوق التأمين في الإمارات",
    heroTitle:"اختر مزود التأمين المناسب ثم اشترِ مباشرة من موقعه الرسمي.",
    heroText:"إنشوري لا تبيع التأمين. نحن نربط العملاء بشركات التأمين المرخصة ونتتبع الإحالات للعمولات.",
    chooseType:"اختر نوع التأمين", allTypes:"كل الأنواع", health:"التأمين الصحي", car:"تأمين السيارات",
    searchProvider:"ابحث عن شركة", showProviders:"عرض الشركات", providers:" شركة",
    affiliateRate:" عمولة إحالة جاهزة", directPayment:"دفع مباشر", toInsurer:" لشركة التأمين",
    providersTitle:"شركات التأمين", providersSubtitle:"يتم تتبع نقرات العملاء قبل تحويلهم إلى الموقع الرسمي لشركة التأمين.",
    exportClicks:"تصدير سجل النقرات", howTrackingWorks:"كيف يعمل تتبع العمولة",
    trackStep1:"يحصل كل شريك على رمز إحالة خاص.",
    trackStep2:"كل رابط يحتوي على معاملات UTM ورمز شريك Insurae.",
    trackStep3:"تؤكد شركة التأمين المبيعات من خلال تقارير شهرية أو لوحة تحكم أو API/Webhook.",
    trackStep4:"تقوم Insurae بحساب عمولة 5٪ للمبيعات المعتمدة.",
    visit:"زيارة الموقع الرسمي", home:"الرئيسية", compare:"قارن", partners:"الشركاء", contact:"تواصل",
    leavingTitle:"أنت تغادر Insurae", leavingText:"سيتم تحويلك إلى موقع شركة التأمين الرسمي. الشراء والدفع يتمان مباشرة هناك.",
    cancel:"إلغاء", continue:"متابعة"
  },
  fa: {
    tagline:"مقایسه و اتصال به شرکت‌های بیمه در امارات",
    badge:"مارکت‌پلیس بیمه امارات",
    heroTitle:"شرکت بیمه مناسب را پیدا کن، سپس مستقیم از سایت خودش خرید کن.",
    heroText:"Insurae خودش بیمه نمی‌فروشد. ما مشتری را به شرکت‌های بیمه دارای مجوز وصل می‌کنیم و معرفی‌ها را برای کمیسیون ردیابی می‌کنیم.",
    chooseType:"نوع بیمه را انتخاب کنید", allTypes:"همه بیمه‌ها", health:"بیمه سلامت", car:"بیمه خودرو",
    searchProvider:"جستجوی شرکت بیمه", showProviders:"نمایش شرکت‌ها", providers:" شرکت",
    affiliateRate:" کمیسیون همکاری آماده", directPayment:"پرداخت مستقیم", toInsurer:" به شرکت بیمه",
    providersTitle:"شرکت‌های بیمه", providersSubtitle:"کلیک مشتری قبل از انتقال به سایت رسمی شرکت بیمه ثبت می‌شود.",
    exportClicks:"خروجی گزارش کلیک‌ها", howTrackingWorks:"ردیابی کمیسیون چطور کار می‌کند",
    trackStep1:"هر همکار فروش یک کد معرفی اختصاصی می‌گیرد.",
    trackStep2:"هر دکمه شرکت بیمه شامل UTM و کد معرفی Insurae است.",
    trackStep3:"شرکت بیمه فروش‌های انجام‌شده را با گزارش ماهانه، پنل همکاری یا API/Webhook تأیید می‌کند.",
    trackStep4:"Insurae برای فروش‌های تأییدشده، کمیسیون ۵٪ محاسبه می‌کند.",
    visit:"ورود به سایت رسمی", home:"خانه", compare:"مقایسه", partners:"همکاران", contact:"تماس",
    leavingTitle:"در حال خروج از Insurae هستید", leavingText:"به سایت رسمی شرکت بیمه منتقل می‌شوید. خرید و پرداخت مستقیماً در همان سایت انجام می‌شود.",
    cancel:"لغو", continue:"ادامه"
  }
};

let currentLang = localStorage.getItem("insurae_lang") || "en";

const grid = document.getElementById("providersGrid");
const typeFilter = document.getElementById("typeFilter");
const searchInput = document.getElementById("searchInput");
const providersCount = document.getElementById("providersCount");
const dialog = document.getElementById("redirectDialog");
const confirmRedirect = document.getElementById("confirmRedirect");

function t(key){ return translations[currentLang][key] || translations.en[key] || key; }

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem("insurae_lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" || lang === "fa") ? "rtl" : "ltr";
  document.body.dir = document.documentElement.dir;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.getElementById("languageSelect").value = lang;
  renderProviders();
}

function buildTrackedUrl(provider){
  const url = new URL(provider.website);
  url.searchParams.set("utm_source","insurae");
  url.searchParams.set("utm_medium","referral");
  url.searchParams.set("utm_campaign","insurance_marketplace");
  url.searchParams.set("insurae_ref", INSURAE_REF_CODE);
  return url.toString();
}

function saveClick(provider){
  const log = JSON.parse(localStorage.getItem("insurae_click_log") || "[]");
  log.push({
    providerId: provider.id,
    providerName: provider.name,
    refCode: INSURAE_REF_CODE,
    affiliateRate: DEFAULT_AFFILIATE_RATE,
    clickedAt: new Date().toISOString(),
    targetUrl: buildTrackedUrl(provider)
  });
  localStorage.setItem("insurae_click_log", JSON.stringify(log));

  // Future production option:
  // fetch("https://your-backend.com/api/clicks", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(log[log.length-1]) });
}

function renderProviders(){
  const selectedType = typeFilter.value;
  const query = searchInput.value.trim().toLowerCase();
  const filtered = providers.filter(p => {
    const typeOk = selectedType === "all" || p.types.includes(selectedType);
    const queryOk = !query || p.name.toLowerCase().includes(query) || p.tags.join(" ").toLowerCase().includes(query);
    return typeOk && queryOk;
  });
  providersCount.textContent = filtered.length;
  grid.innerHTML = filtered.map(p => `
    <article class="provider-card">
      <div class="provider-top">
        <div class="provider-logo">${p.logo}</div>
        <div>
          <h4>${p.name}</h4>
          <small>${p.types.map(x => x === "health" ? t("health") : t("car")).join(" • ")}</small>
        </div>
      </div>
      <div class="tags">${p.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      <p>${p.summary[currentLang] || p.summary.en}</p>
      <button class="primary-btn visit-btn" data-provider="${p.id}">${t("visit")}</button>
    </article>
  `).join("");

  document.querySelectorAll(".visit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const provider = providers.find(p => p.id === btn.dataset.provider);
      const trackedUrl = buildTrackedUrl(provider);
      saveClick(provider);
      confirmRedirect.href = trackedUrl;
      if(typeof dialog.showModal === "function") dialog.showModal();
      else window.open(trackedUrl, "_blank", "noopener");
    });
  });
}

function exportClickLog(){
  const log = localStorage.getItem("insurae_click_log") || "[]";
  const blob = new Blob([log], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `insurae-click-log-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById("languageSelect").addEventListener("change", e => applyLanguage(e.target.value));
document.getElementById("showProvidersBtn").addEventListener("click", renderProviders);
typeFilter.addEventListener("change", renderProviders);
searchInput.addEventListener("input", renderProviders);
document.getElementById("exportClicksBtn").addEventListener("click", exportClickLog);
document.getElementById("cancelRedirect").addEventListener("click", () => dialog.close());

if("serviceWorker" in navigator){
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}

applyLanguage(currentLang);
