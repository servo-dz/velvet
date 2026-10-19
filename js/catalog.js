/* ============================================================
   Center Star — كتالوج المنتجات المشترك
   يستخدمه order.html (صفحة الطلب) و products.html (التصفح)
   السلة محفوظة في localStorage بنفس مفتاح cart.js
   ============================================================ */

window.SC_CATALOG = [
  {
    family: 'velvet',
    title: 'معطرات الجو — Velvet',
    note: 'بخاخات 200 مل بانتعاش سريع للمنزل والسيارة والمكتب.',
    items: [
      { id: 'vs-coconut', name: 'معطر جو Velvet — جوز الهند', en: 'COCONUT', color: '#c9a26e', emoji: '🥥', desc: 'انتعاش كريمي بنعومة جوز الهند.' },
      { id: 'vs-caramel', name: 'معطر جو Velvet — كراميل', en: 'CARAMEL', color: '#c47a2e', emoji: '🍮', desc: 'دفء الكراميل الذهبي الحلو.' },
      { id: 'vs-musk', name: 'معطر جو Velvet — مسك عربي', en: 'ARABIC MUSK', color: '#3d332c', emoji: '🌙', desc: 'عمق المسك العربي الغامق والدافئ.' },
      { id: 'vs-strawberry', name: 'معطر جو Velvet — فراولة', en: 'STRAWBERRY', color: '#e0353f', emoji: '🍓', desc: 'حلاوة الفراولة الناضجة المنعشة.' },
      { id: 'vs-watermelon', name: 'معطر جو Velvet — بطيخ', en: 'WATER MELON', color: '#ef5d78', emoji: '🍉', desc: 'انتعاش البطيخ الأحمر الصيفي.' },
      { id: 'vs-icementhol', name: 'معطر جو Velvet — مثلج بالمنثول', en: 'ICE MENTHOL', color: '#35b6e8', emoji: '🧊', desc: 'برودة قوية ومنعشة تدوم.' },
      { id: 'vs-mango', name: 'معطر جو Velvet — مانجو', en: 'MANGO', color: '#f5a623', emoji: '🥭', desc: 'استوائية المانجو اللامعة.' },
      { id: 'vs-ocean', name: 'معطر جو Velvet — محيط', en: 'OCEAN', color: '#2f9de8', emoji: '🌊', desc: 'نسمة بحرية منعشة كالموج.' },
      { id: 'vs-lavender', name: 'معطر جو Velvet — خزامى', en: 'LAVENDER', color: '#b48cd9', emoji: '💜', desc: 'هدوء الحقول البنفسجية.' },
      { id: 'vs-babygirls', name: 'معطر جو Velvet — غرفة الأطفال بنات', en: 'BABY ROOM GIRLS', color: '#f08cb8', emoji: '🎀', desc: 'نعومة عطر لطيفة خاصة بغرف البنات.' },
      { id: 'vs-babyboys', name: 'معطر جو Velvet — غرفة الأطفال أولاد', en: 'BABY ROOM BOYS', color: '#7ec3ef', emoji: '🧸', desc: 'انتعاش هادئ خاص بغرف الأولاد.' },
      { id: 'vs-pomegranate', name: 'معطر جو Velvet — رمّان', en: 'POMEGRANATE', color: '#c8234a', emoji: '🍒', desc: 'انتعاش الرمّان الأحمر المنعش.' },
      { id: 'vs-ananas', name: 'معطر جو Velvet — أناناس', en: 'ANANAS', color: '#f0c020', emoji: '🍍', desc: 'حلاوة الأناناس الاستوائية المشرقة.' },
      { id: 'vs-aoud', name: 'معطر جو Velvet — عود', en: 'AOUD', color: '#4a2c14', emoji: '🪵', desc: 'فخامة العود الدافئ والعميق.' },
      { id: 'vs-ellile', name: 'معطر جو Velvet — مسك الليل', en: 'FLOWER OF MUSK ELLILE', color: '#ddbedb', emoji: '🤍', desc: 'مسك الليل الأبيض الناعم والهادئ.' },
      { id: 'vs-antitobacco', name: 'معطر جو Velvet — ضد التبغ', en: 'ANTI TOBACCO', color: '#26221e', emoji: '🚭', desc: 'يزيل روائح التبغ وينعش الجو.' },
      { id: 'vs-cotton', name: 'معطر جو Velvet — قطن', en: 'COTTON', color: '#a8cfe8', emoji: '☁️', desc: 'نقاء القطن الأبيض الناعم.' },
      { id: 'vs-tropical', name: 'معطر جو Velvet — استوائي', en: 'TROPICAL', color: '#e8557d', emoji: '🌴', desc: 'مزيج استوائي من الفواكه الملونة.' },
      { id: 'vs-lemon', name: 'معطر جو Velvet — ليمون', en: 'LEMON', color: '#f5d018', emoji: '🍋', desc: 'انتعاش الليمون الأصفر الحيوي.' },
      { id: 'vs-vanilla', name: 'معطر جو Velvet — فانيليا', en: 'VANILLA', color: '#e3cba4', emoji: '🌼', desc: 'دفء الفانيليا الذهبية الناعمة.' }
    ]
  },
  {
    family: 'maison',
    title: 'Velvet Premium — Parfum de Maison',
    note: 'بخاخات فاخرة للمنزل بتركيز عالٍ — رائحة تدوم حتى 24 ساعة.',
    items: [
      { id: 'pm-tobacosto', name: 'Velvet Premium — توباكوستو', en: 'TOBACOSTO', color: '#3d332c', emoji: '🌑', desc: 'دفء التباكوستو الكلاسيكي الغامق.' },
      { id: 'pm-golden', name: 'Velvet Premium — غولدن', en: 'GOLDEN', color: '#d4a017', emoji: '✨', desc: 'ذهب صافٍ بلمعة دافئة فاخرة.' },
      { id: 'pm-roselia', name: 'Velvet Premium — روزيليا', en: 'ROSELIA', color: '#d64d8a', emoji: '🌺', desc: 'زهرة وردية تملأ الغرفة رقيًا.' },
      { id: 'pm-azulina', name: 'Velvet Premium — أزولينا', en: 'AZULINA', color: '#3f6fd0', emoji: '💠', desc: 'أزرق عميق يبعث على الصفاء.' },
      { id: 'pm-velour', name: 'Velvet Premium — فيلور', en: 'VELOUR', color: '#7a3fa0', emoji: '🪶', desc: 'مخمل بنفسجي للأناقة الهادئة.' },
      { id: 'pm-amarosa', name: 'Velvet Premium — أماروسا', en: 'AMAROSA', color: '#c22a3d', emoji: '🌹', desc: 'أحمر عنابي بلمسة زهرية.' }
    ]
  }
];

/* ---------- مساعدات السلة المشتركة (نفس مفاتيح cart.js) ---------- */
window.SC_CART_KEY = 'vel_cart_v1';
window.SC_FIELDS_KEY = 'vel_cart_fields_v1';

window.scCartLoad = function () {
  try { return JSON.parse(localStorage.getItem(window.SC_CART_KEY)) || {}; }
  catch (e) { return {}; }
};
window.scCartSave = function (cart, fields) {
  localStorage.setItem(window.SC_CART_KEY, JSON.stringify(cart || {}));
  if (fields) localStorage.setItem(window.SC_FIELDS_KEY, JSON.stringify(fields));
};
window.scCartTotal = function (cart) {
  var n = 0;
  Object.keys(cart || {}).forEach(function (id) { n += cart[id].qty; });
  return n;
};
window.scItemName = function (id) {
  var found = null;
  window.SC_CATALOG.forEach(function (f) {
    f.items.forEach(function (it) { if (it.id === id) found = it.name; });
  });
  return found;
};
