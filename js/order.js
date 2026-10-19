/* ============================================================
   Center Star — صفحة الطلب (order.html)
   تعرض كل المنتجات مع أزرار الكمية (من كتالوج catalog.js).
   معطرات Velvet تُطلب «بالقطعة» أو «بالصندوق (16 قطعة)» —
   كل نوع سطر مستقل في السلة وفي رسالة واتساب.
   الدفع عند الاستلام وتوصيل حتى باب المنزل لكل الولايات.
   ============================================================ */
(function () {
  'use strict';

  // رقم الواتساب: من إعدادات الموقع إن توفرت
  var WA_NUMBER = '213540544327';
  try {
    if (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsapp) {
      var m = SITE_CONFIG.whatsapp.match(/wa\.me\/(\d+)/);
      if (m) WA_NUMBER = m[1];
    }
  } catch (e) {}

  var FAMILIES = window.SC_CATALOG;
  var BOX_UNITS = 16; // عدد القطع في صندوق معطرات Velvet

  /* ---------- الولايات الـ58 ---------- */
  var WILAYAS = ['أدرار', 'الشلف', 'الأغواط', 'أم البواقي', 'باتنة', 'بجاية', 'بسكرة', 'بشار', 'البليدة', 'البويرة', 'تمنراست', 'تبسة', 'تلمسان', 'تيارت', 'تيزي وزو', 'الجزائر', 'الجلفة', 'جيجل', 'سطيف', 'سعيدة', 'سكيكدة', 'سيدي بلعباس', 'عنابة', 'قالمة', 'قسنطينة', 'المدية', 'مستغانم', 'المسيلة', 'معسكر', 'ورقلة', 'وهران', 'البيض', 'إليزي', 'برج بوعريريج', 'بومرداس', 'الطارف', 'تندوف', 'تيسمسيلت', 'الوادي', 'خنشلة', 'سوق أهراس', 'تيبازة', 'ميلة', 'عين الدفلى', 'النعامة', 'عين تموشنت', 'غرداية', 'غليزان', 'تيميمون', 'برج باجي مختار', 'أولاد جلال', 'بني عباس', 'عين صالح', 'عين قزام', 'تقرت', 'جانت', 'المغير', 'المنيعة', 'أخرى'];

  /* ---------- الحالة ---------- */
  var cart = window.scCartLoad();
  var fields = {};
  try { fields = JSON.parse(localStorage.getItem(window.SC_FIELDS_KEY)) || {}; } catch (e) {}

  // الوحدة المختارة لكل منتج في الواجهة: Velvet افتراضيًا «صندوق»، وباقي المنتجات «قطعة»
  var unitSel = {};

  var itemsBox = document.getElementById('orderItems');
  var totalEl = document.getElementById('orderTotal');
  var checkoutBtn = document.getElementById('orderCheckout');
  var copyBtn = document.getElementById('orderCopy');
  var nameInput = document.getElementById('orderName');
  var wilayaSel = document.getElementById('orderWilaya');
  var notesInput = document.getElementById('orderNotes');
  var addressInput = document.getElementById('orderAddress');

  WILAYAS.forEach(function (w) {
    var o = document.createElement('option');
    o.value = w; o.textContent = w;
    wilayaSel.appendChild(o);
  });

  function save() { window.scCartSave(cart, { name: nameInput.value, wilaya: wilayaSel.value, address: addressInput.value, notes: notesInput.value }); }

  /* ---------- مفاتيح الأسطر: قطعة = المعرف، صندوق = المعرف::box ---------- */
  function lineKey(id, unit) { return unit === 'box' ? id + '::box' : id; }
  function lineName(item, unit) {
    return unit === 'box' ? item.name + ' — صندوق (' + BOX_UNITS + ' قطعة)' : item.name;
  }

  function stepperHTML(id, unit, qty) {
    if (!qty) {
      return '<button class="btn-cart" data-act="add" data-id="' + id + '" data-unit="' + unit + '">أضف إلى السلة</button>';
    }
    return '<div class="order-stepper" dir="ltr">' +
      '<button class="qty-btn" data-act="minus" data-id="' + id + '" data-unit="' + unit + '" aria-label="إنقاص">−</button>' +
      '<span class="qty-val">' + qty + '</span>' +
      '<button class="qty-btn" data-act="plus" data-id="' + id + '" data-unit="' + unit + '" aria-label="زيادة">+</button>' +
      '</div>';
  }

  function renderItems() {
    itemsBox.innerHTML = FAMILIES.map(function (fam) {
      var cards = fam.items.map(function (it) {
        var def = fam.family === 'velvet' ? 'box' : 'piece';
        var sel = unitSel[it.id] || def;
        var selLine = cart[lineKey(it.id, sel)];
        var qty = selLine ? selLine.qty : 0;
        var other = sel === 'box' ? 'piece' : 'box';
        var otherLine = cart[lineKey(it.id, other)];
        var otherQty = otherLine ? otherLine.qty : 0;
        var toggle = fam.family === 'velvet'
          ? '<div class="unit-toggle">' +
            '<button class="unit-opt' + (sel === 'piece' ? ' active' : '') + '" data-act="unit" data-id="' + it.id + '" data-unit="piece">قطعة</button>' +
            '<button class="unit-opt' + (sel === 'box' ? ' active' : '') + '" data-act="unit" data-id="' + it.id + '" data-unit="box">صندوق ×' + BOX_UNITS + '</button>' +
          '</div>'
          : '';
        var hint = otherQty
          ? '<span class="unit-hint">' + (other === 'box' ? 'صندوق' : 'قطعة') + ': ' + otherQty + ' في السلة</span>'
          : '';
        return '<div class="scent-card order-item">' +
          '<div class="scent-dot" style="background:' + it.color + '">' + it.emoji + '</div>' +
          '<div class="order-item-body">' +
            '<h3>' + it.name + ' <small>' + it.en + '</small></h3>' +
            '<p>' + it.desc + '</p>' +
          '</div>' +
          '<div class="order-item-ctrl">' +
            toggle +
            stepperHTML(it.id, sel, qty) +
            hint +
          '</div>' +
        '</div>';
      }).join('');
      return '<section class="order-family" id="cat-' + fam.family + '">' +
        '<h3 class="order-family-title">' + fam.title + '</h3>' +
        '<p class="order-family-note">' + fam.note + '</p>' +
        '<div class="order-grid">' + cards + '</div>' +
      '</section>';
    }).join('');
  }

  function renderSummary() {
    var n = window.scCartTotal(cart);
    totalEl.textContent = n ? ('المجموع: ' + n + ' منتج في طلبك') : 'لم تختر أي منتج بعد — اضغط «أضف إلى السلة» بجانب ما تحتاجه';
    checkoutBtn.disabled = n === 0;
    checkoutBtn.classList.toggle('is-disabled', n === 0);
  }

  function render() { renderItems(); renderSummary(); }

  /* ---------- رسالة الطلب ---------- */
  function lineLabel(key, entry) {
    if (key.indexOf('::box') > -1) return entry.name;             // يحوي «صندوق (16 قطعة)»
    if (key.indexOf('vs-') === 0 || key.indexOf('bsm-') === 0) return entry.name + ' — قطعة';
    return entry.name;                                             // الصناديق الجاهزة
  }

  function buildMessage() {
    var lines = ['السلام عليكم، أريد طلب المنتجات التالية من Velvet:', ''];
    var i = 1;
    Object.keys(cart).forEach(function (key) {
      lines.push(i + '. ' + lineLabel(key, cart[key]) + ' × ' + cart[key].qty);
      i++;
    });
    lines.push('—————————');
    lines.push('الاسم: ' + (nameInput.value.trim() || '—'));
    lines.push('الولاية: ' + (wilayaSel.value || '—'));
    if (addressInput.value.trim()) lines.push('العنوان: ' + addressInput.value.trim());
    if (notesInput.value.trim()) lines.push('ملاحظات: ' + notesInput.value.trim());
    lines.push('الدفع: عند الاستلام');
    return lines.join('\n');
  }

  function checkout() {
    if (window.scCartTotal(cart) === 0) return;
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(buildMessage()), '_blank', 'noopener');
  }

  function copyOrder() {
    if (window.scCartTotal(cart) === 0) return;
    var msg = buildMessage();
    function done() {
      var t = copyBtn.textContent;
      copyBtn.textContent = 'تم النسخ ✓';
      setTimeout(function () { copyBtn.textContent = t; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(msg).then(done, function () { fallbackCopy(msg, done); });
    } else {
      fallbackCopy(msg, done);
    }
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---------- الأحداث ---------- */
  itemsBox.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var act = btn.getAttribute('data-act');
    var id = btn.getAttribute('data-id');
    if (act === 'unit') {
      unitSel[id] = btn.getAttribute('data-unit');
      render();
      return;
    }
    var unit = btn.getAttribute('data-unit') || 'piece';
    var key = lineKey(id, unit);
    if (act === 'add' || act === 'plus') {
      var name = null;
      FAMILIES.forEach(function (f) { f.items.forEach(function (it) { if (it.id === id) name = it.name; }); });
      var line = cart[key] || (cart[key] = { name: lineName({ name: name }, unit), qty: 0 });
      line.qty++;
    } else if (act === 'minus') {
      if (!cart[key]) return;
      cart[key].qty--;
      if (cart[key].qty <= 0) delete cart[key];
    } else return;
    save();
    render();
  });

  checkoutBtn.addEventListener('click', checkout);
  copyBtn.addEventListener('click', copyOrder);

  [nameInput, wilayaSel, addressInput, notesInput].forEach(function (el) {
    el.addEventListener('input', save);
  });

  nameInput.value = fields.name || '';
  wilayaSel.value = fields.wilaya || '';
  notesInput.value = fields.notes || '';
  addressInput.value = fields.address || '';

  render();
})();
