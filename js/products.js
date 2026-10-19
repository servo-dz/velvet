/* ============================================================
   Center Star — صفحة المنتجات (products.html)
   تعرض الكتالوج كاملاً بأقسامها مع أزرار «أضف إلى السلة»،
   وتقرأ نفس سلة localStorage المستخدمة في بقية الموقع.
   ============================================================ */
(function () {
  'use strict';

  var FAMILIES = window.SC_CATALOG;
  var cart = window.scCartLoad();
  var root = document.getElementById('productsRoot');

  function save() { window.scCartSave(cart); }

  function render() {
    root.innerHTML = FAMILIES.map(function (fam) {
      var cards = fam.items.map(function (it) {
        var qty = cart[it.id] ? cart[it.id].qty : 0;
        return '<div class="scent-card order-item" id="p-' + it.id + '">' +
          '<div class="scent-dot" style="background:' + it.color + '">' + it.emoji + '</div>' +
          '<div class="order-item-body">' +
            '<h3>' + it.name + ' <small>' + it.en + '</small></h3>' +
            '<p>' + it.desc + '</p>' +
          '</div>' +
          '<div class="order-item-ctrl">' + (qty
            ? '<span class="in-cart-badge">في السلة × ' + qty + '</span>'
            : '<button class="btn-cart" data-act="add" data-id="' + it.id + '">أضف إلى السلة</button>') +
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

  root.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-act="add"]');
    if (!btn) return;
    var id = btn.getAttribute('data-id');
    if (cart[id]) cart[id].qty++;
    else cart[id] = { name: window.scItemName(id), qty: 1 };
    save();
    render();
  });

  render();
})();
