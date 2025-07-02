const timelineItems = [
  {
    date: "1",
    title: "سياسة الدفع والحجز",
    description: "عربون لتثبيت الحجز وتصقية المبلغ قبل المناسبه بيوم او فور الوصول",
    dateColor: "#ffffff",
    titleColor: "#ffffff",
    descColor: "#fff"
  },
  {
    date: "2",
    title: "مدة الارشيف",
    description: "نحتفظ بالمواد لمدة اسبوع الى اسبوعين من بعد المناسبة",
    dateColor: "#fff",
    titleColor: "#ffffff",
    descColor: "#fff"
  },
  {
    date: "3",
    title: "مدة التسليم",
    description: "من شهر الى شهر ونصف بعد المناسبه",
    dateColor: "#fff",
    titleColor: "#ffffff",
    descColor: "#ffffff"
  },
  {
    date: "4",
    title: "My birthday",
    description: "2026. 2. 8",
    dateColor: "#ffffff",
    titleColor: "#ffffff",
    descColor: "#fff"
  }
];






const timeline = document.getElementById("timeline");

timelineItems.forEach((item) => {
  const li = document.createElement("li");
  li.className = "mb-4 ml-3 flex flex-col";
  li.innerHTML = `
    <div class="absolute rounded-lg" style="width: .75rem; height: .75rem; right: -0.45rem; background: #fff;"></div>
    <time class="mb-1 small" style="color: ${item.dateColor};">${item.date}</time>
    <span class="text-white font-bold" >${item.title}</span>
    <p class="text-white/90">${item.description}</p>
  `;
  timeline.appendChild(li);
});



