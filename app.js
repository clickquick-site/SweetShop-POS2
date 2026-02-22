/* ================================================
   TRANSLATIONS — نظام الترجمة
================================================ */
const TRANSLATIONS = {
  ar: {
    login_title:"تسجيل الدخول", login_btn:"دخول", logout:"خروج",
    pin_placeholder:"رمز PIN",
    menu_sale:"واجهة البيع", menu_stock:"📦 المخزون",
    menu_customers:"👥 الزبائن", menu_users:"👤 إدارة المستخدمين",
    menu_reports:"📊 إدارة الأعمال", menu_settings:"⚙️ الإعدادات",
    back:"الرجوع",
    sale_title:"واجهة البيع",
    search_placeholder:"اسم أو باركود",
    add_btn:"➕ إضافة",
    col_item:"سلعة", col_qty:"كمية", col_price:"سعر",
    col_total:"مجموع", col_options:"خيارات",
    col_name:"الاسم", col_role:"الدور",
    paid_placeholder:"المبلغ المدفوع",
    pay_btn:"✅ تسديد", partial_btn:"💰 جزئي", debt_btn:"📋 دين",
    tab_families:"العائلات", tab_brands:"الماركات", tab_all_stock:"كل السلع",
    families_title:"📁 العائلات — نوع المنتج",
    brands_title:"🏷️ الماركات — عائلة المنتج",
    add_product_title:"➕ إضافة منتج جديد",
    all_products:"📋 كل المنتجات",
    family_ph:"أدخل اسم العائلة...",
    brand_ph:"أدخل اسم الماركة...",
    add_family:"➕ إضافة", add_brand:"➕ إضافة",
    family_label:"العائلة", brand_label:"الماركة",
    size_label:"الحجم / المقاس", barcode_label:"باركود",
    price_label:"سعر البيع", cost_label:"سعر الشراء",
    qty_label:"الكمية", exp_label:"تاريخ الصلاحية",
    save_item:"💾 حفظ المنتج",
    stock_search_ph:"🔍 بحث في المخزون...",
    edit_btn:"تعديل", del_btn:"مسح",
    tab_day:"اليوم", tab_week:"الأسبوع", tab_month:"الشهر",
    tab_year:"السنة", tab_all:"الكل",
    r_sales:"عمليات البيع", r_revenue:"المداخيل",
    r_cost:"تكلفة الشراء", r_profit:"صافي الربح",
    debts_title:"📋 تتبع الديون",
    total_debts:"إجمالي الديون", debtors_count:"عدد المدينين",
    sales_log:"📜 سجل العمليات",
    settle_btn:"تسوية",
    no_debts:"لا توجد ديون 🎉", no_sales:"لا توجد عمليات",
    stab_app:"🖥️ البرنامج", stab_store:"🏪 المتجر",
    stab_print:"🖨️ الطباعة", stab_system:"🔧 النظام",
    date_format:"صيغة التاريخ", time_format:"صيغة الوقت",
    currency_label:"رمز العملة", lang_label:"لغة البرنامج",
    save_app:"💾 حفظ إعدادات البرنامج",
    logo_label:"شعار المتجر",
    upload_logo:"📷 تحميل الشعار", remove_logo:"🗑️ حذف",
    shop_name:"اسم المتجر", phone_label:"رقم الهاتف",
    address_label:"العنوان", welcome_label:"رسالة ترحيب للفاتورة",
    save_store:"💾 حفظ بيانات المتجر",
    invoice_num:"رقم الفاتورة الحالي (قابل للتعديل)",
    printer_label:"اختيار الطابعة", paper_size:"مقاس الورق",
    copies_label:"عدد النسخ",
    print_logo:"طباعة شعار المتجر", print_name:"طباعة اسم المتجر",
    print_phone:"طباعة رقم الهاتف", print_welcome:"طباعة رسالة الترحيب",
    print_barcode:"طباعة باركود المنتجات",
    print_cust_barcode:"طباعة باركود على ورقة الزبون",
    save_print:"💾 حفظ إعدادات الطباعة",
    auto_backup_title:"💾 سجل العمليات والنسخ التلقائي",
    auto_backup_desc:"تفعيل النسخ اليومي التلقائي لبيانات التطبيق وسجل العمليات.",
    auto_backup_toggle:"تفعيل النسخ اليومي التلقائي",
    manual_backup:"📥 نسخ احتياطي الآن",
    reset_btn:"🔴 إعادة ضبط النظام",
    reset_warning:"⚠️ تحذير: هذا الجزء سيقوم بحذف جميع البيانات (المنتجات، الفواتير، الزبائن، التقارير) وإعادة البرنامج لحالته الأصلية من البداية.",
    customer_ph:"اسم الزبون",
    username_ph:"اسم المستخدم",
    role_seller:"بائع", role_manager:"مدير",
    add_user:"➕ إضافة",
    lang_preview:"سيتم تطبيق اللغة بعد الحفظ.",
    msg_select_user:"اختر المستخدم أولاً",
    msg_wrong_pin:"اسم المستخدم أو الرمز خاطئ",
    msg_saved:"✅ تم الحفظ بنجاح!",
    msg_family_exists:"هذه العائلة موجودة مسبقاً",
    msg_brand_exists:"هذه الماركة موجودة مسبقاً",
    msg_select_family:"اختر العائلة أولاً",
    msg_barcode_exists:"هذا الباركود موجود مسبقاً",
    msg_item_updated:"المنتج موجود — تم تحديث الكمية!",
    msg_item_saved:"✅ تم إضافة المنتج بنجاح!",
    msg_fill_all:"الرجاء إدخال كل البيانات بشكل صحيح!",
    msg_no_cart:"لا يوجد منتجات في العربة!",
    msg_low_balance:"المبلغ المدفوع أقل من الإجمالي",
    msg_sold:"✅ تم تسجيل البيع بنجاح!",
    msg_change:"✅ تم البيع!\nالباقي للزبون: ",
    msg_partial_ok:"✅ دفع جزئي!\nمدفوع: ",
    msg_partial_rem:"\nمتبقي: ",
    msg_need_amount:"أدخل المبلغ المدفوع جزئياً",
    msg_covers_all:"المبلغ يغطي الكل، استخدم 'تسديد'",
    msg_select_customer:"اختر زبوناً لتسجيل الدين عليه",
    msg_debt_ok:"✅ تم تسجيل الدين على ",
    msg_debt_amount:"\nالمبلغ: ",
    msg_out_of_stock:"هذا المنتج نفذ من المخزون!",
    msg_not_enough:"لا يوجد مخزون كافٍ!",
    msg_not_found:"المنتج غير موجود في المخزون",
    msg_enter_search:"أدخل اسم السلعة أو الباركود",
    msg_customer_exists:"الزبون موجود مسبقاً",
    msg_enter_customer:"أدخل اسم الزبون",
    msg_user_exists:"اسم المستخدم موجود مسبقًا",
    msg_pin_format:"الرجاء إدخال اسم صحيح وPIN من 4 أرقام",
    msg_pin_4:"PIN يجب أن يكون 4 أرقام",
    msg_cant_delete:"لا يمكن حذف هذا المستخدم",
    msg_confirm_delete_user:"هل أنت متأكد من حذف هذا المستخدم؟",
    msg_confirm_delete:"حذف المنتج؟",
    msg_confirm_delete_customer:"هل أنت متأكد من حذف هذا الزبون؟",
    msg_confirm_delete_family:"حذف هذه العائلة؟ سيتم حذف ماركاتها أيضاً.",
    msg_confirm_delete_brand:"حذف هذه الماركة؟",
    msg_backup_done:"✅ تم تنزيل النسخة الاحتياطية!",
    msg_backup_auto_on:"✅ تم تفعيل النسخ التلقائي اليومي.",
    msg_backup_auto_off:"تم إيقاف النسخ التلقائي.",
    msg_reset_confirm:"اكتب 'نعم' للتأكيد:",
    msg_reset_done:"✅ تم إعادة ضبط النظام.",
    msg_reset_cancel:"تم إلغاء العملية.",
    settle_prompt:"أدخل المبلغ المدفوع:",
    settle_ok:"✅ تم تسجيل دفع ",
    settle_from:" من ",
    no_stock:"المخزون فارغ",
    no_families:"لا توجد عائلات بعد",
    no_brands:"لا توجد ماركات بعد",
    no_customers:"لا يوجد زبائن بعد",
    msg_clear_month_confirm:"هل تريد مسح جميع بيانات المبيعات لهذا الشهر؟ لا يمكن التراجع.",
    msg_clear_year_confirm:"هل تريد مسح جميع بيانات المبيعات لهذه السنة؟ لا يمكن التراجع.",
    msg_clear_done:"✅ تم مسح البيانات بنجاح.",
    msg_clear_cancel:"تم إلغاء العملية.",
  },
};

/* ================================================
   APP STATE — حالة التطبيق
================================================ */
let appData = {
  users: [],
  families: [],
  brands: [],
  products: [],
  customers: [],
  sales: [],
  debts: [],
  config: {
    shopName: 'متجري',
    shopPhone: '',
    shopAddress: '',
    currency: 'دج',
    lang: 'ar',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
    nextInvoiceNum: 1,
    printSettings: {
      paperSize: '58mm',
      copies: 1,
      printLogo: false,
      printShopName: true,
      printPhone: true,
      printWelcome: true,
      printBarcode: false,
      printCustBarcode: true,
    },
    autoBackup: false,
  }
};

let currentUser = null;
let currentCart = [];
let searchQuery = '';

/* ================================================
   INITIALIZATION — التهيئة
================================================ */
function initApp() {
  loadData();
  setupEventListeners();
  updateClock();
  setInterval(updateClock, 1000);
  checkAutoBackup();
}

function setupEventListeners() {
  document.getElementById('userSelect').addEventListener('change', () => {
    document.getElementById('pin').value = '';
  });
  document.getElementById('pin').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') login();
  });
  document.getElementById('search').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
  });
}

/* ================================================
   LOGIN SYSTEM — نظام تسجيل الدخول
================================================ */
function login() {
  const userIdx = document.getElementById('userSelect').selectedIndex;
  const pin = document.getElementById('pin').value;
  const msg = document.getElementById('loginMsg');

  if (!appData.users.length) {
    initializeDefaultUser();
  }

  if (userIdx < 0) {
    msg.textContent = t('msg_select_user');
    return;
  }

  const user = appData.users[userIdx];
  if (user.pin !== pin) {
    msg.textContent = t('msg_wrong_pin');
    return;
  }

  currentUser = user;
  msg.textContent = '';
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('mainApp').style.display = 'flex';
  
  loadUserSelect();
  show('sale');
}

function logout() {
  currentUser = null;
  currentCart = [];
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('mainApp').style.display = 'none';
  document.getElementById('pin').value = '';
  loadUserSelect();
}

function initializeDefaultUser() {
  appData.users.push({ name: 'مدير', pin: '0000', role: 'manager' });
  saveData();
}

function loadUserSelect() {
  const select = document.getElementById('userSelect');
  select.innerHTML = '';
  appData.users.forEach((user, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = user.name;
    select.appendChild(opt);
  });
}

/* ================================================
   SEARCH & SUGGESTIONS — البحث والاقتراحات
   ✅ تحسين: البحث الشامل عن الماركات والعائلات
================================================ */
function searchSuggestions() {
  const search = document.getElementById('search').value.trim();
  const container = document.getElementById('searchSuggestions');

  if (!search) {
    container.classList.add('hidden');
    return;
  }

  const query = search.toLowerCase();
  const matches = [];

  // البحث في المنتجات
  appData.products.forEach(product => {
    const productName = product.name.toLowerCase();
    const brandName = product.brand.toLowerCase();
    const familyName = product.family.toLowerCase();
    const barcode = product.barcode.toLowerCase();

    // البحث الشامل: يبحث عن النص في الاسم أو الماركة أو العائلة أو الباركود
    if (productName.includes(query) || brandName.includes(query) || 
        familyName.includes(query) || barcode.includes(query)) {
      if (!matches.find(m => m.id === product.id)) {
        matches.push(product);
      }
    }
  });

  // عرض الاقتراحات
  if (matches.length === 0) {
    container.innerHTML = '<div style="padding:8px;color:var(--text3)">لا توجد نتائج</div>';
    container.classList.remove('hidden');
  } else {
    container.innerHTML = matches.map(p => `
      <div class="suggestion-item" onclick="selectSuggestion('${p.id}')">
        <div style="font-weight:700;color:var(--text)">${p.name}</div>
        <div style="font-size:12px;color:var(--text3)">
          الماركة: ${p.brand} | العائلة: ${p.family} | المخزون: ${p.qty}
        </div>
      </div>
    `).join('');
    container.classList.remove('hidden');
  }
}

function selectSuggestion(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (product) {
    document.getElementById('search').value = product.name;
    document.getElementById('searchSuggestions').classList.add('hidden');
    addItem();
  }
}

/* ================================================
   SALE INTERFACE — واجهة البيع
================================================ */
function addItem() {
  const searchVal = document.getElementById('search').value.trim();
  const qty = parseInt(document.getElementById('searchQty').value) || 1;

  if (!searchVal) {
    showToast(t('msg_enter_search'));
    return;
  }

  const query = searchVal.toLowerCase();
  let product = null;

  // البحث عن المنتج بـ: الاسم أو الباركود أو الماركة أو العائلة
  product = appData.products.find(p => 
    p.name.toLowerCase() === query || 
    p.barcode.toLowerCase() === query ||
    p.brand.toLowerCase() === query ||
    p.family.toLowerCase() === query
  );

  // إذا لم يجد تطابق دقيق، ابحث عن تطابق جزئي
  if (!product) {
    product = appData.products.find(p =>
      p.name.toLowerCase().includes(query) ||
      p.barcode.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.family.toLowerCase().includes(query)
    );
  }

  if (!product) {
    showToast(t('msg_not_found'));
    return;
  }

  if (product.qty < qty) {
    showToast(t('msg_not_enough'));
    return;
  }

  const existingItem = currentCart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    currentCart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      cost: product.cost,
      qty: qty,
      brand: product.brand,
      family: product.family,
    });
  }

  document.getElementById('search').value = '';
  document.getElementById('searchQty').value = '1';
  document.getElementById('searchSuggestions').classList.add('hidden');
  updateCart();
}

function updateCart() {
  const tbody = document.getElementById('cart');
  tbody.innerHTML = '';

  currentCart.forEach((item, idx) => {
    const row = document.createElement('tr');
    const total = (item.price * item.qty).toFixed(2);
    row.innerHTML = `
      <td>${item.name} <span style="color:var(--text3);font-size:12px">(${item.brand})</span></td>
      <td><input type="number" value="${item.qty}" min="1" onchange="updateItemQty(${idx}, this.value)"></td>
      <td>${item.price}</td>
      <td>${total}</td>
      <td><button onclick="removeItem(${idx})" style="background:#fee2e2;color:#ef4444;padding:4px 8px;border:none;border-radius:4px;cursor:pointer">❌</button></td>
    `;
    tbody.appendChild(row);
  });

  const clearBtn = document.getElementById('clearCartBtn');
  if (currentCart.length > 0) {
    clearBtn.style.display = 'inline-block';
  } else {
    clearBtn.style.display = 'none';
  }

  updateTotal();
}

function updateItemQty(idx, newQty) {
  const qty = parseInt(newQty);
  if (qty > 0) {
    currentCart[idx].qty = qty;
  }
  updateCart();
}

function removeItem(idx) {
  currentCart.splice(idx, 1);
  updateCart();
}

function clearCart() {
  if (confirm('هل تريد تفريغ السلة؟')) {
    currentCart = [];
    updateCart();
  }
}

function updateTotal() {
  let subtotal = 0;
  currentCart.forEach(item => {
    subtotal += item.price * item.qty;
  });

  const discountVal = parseFloat(document.getElementById('discountVal').value) || 0;
  const discountType = document.getElementById('discountType').value;
  
  let discount = 0;
  if (discountType === 'fixed') {
    discount = discountVal;
  } else {
    discount = (subtotal * discountVal) / 100;
  }

  const total = Math.max(0, subtotal - discount);
  document.getElementById('total').textContent = total.toFixed(2);
  document.getElementById('afterDiscount').textContent = total.toFixed(2) + ' ' + appData.config.currency;
}

function processSale(paymentType) {
  if (currentCart.length === 0) {
    showToast(t('msg_no_cart'));
    return;
  }

  const total = parseFloat(document.getElementById('total').textContent);

  if (paymentType === 'full') {
    const paid = parseFloat(document.getElementById('paid').value);
    if (isNaN(paid) || paid < total) {
      showToast(t('msg_low_balance'));
      return;
    }
    completeSale(total, paid, 'full');
  } else if (paymentType === 'partial') {
    const paid = parseFloat(document.getElementById('paid').value);
    if (isNaN(paid) || paid <= 0) {
      showToast(t('msg_need_amount'));
      return;
    }
    if (paid >= total) {
      showToast(t('msg_covers_all'));
      return;
    }
    completeSale(total, paid, 'partial');
  } else if (paymentType === 'debt') {
    const customerIdx = document.getElementById('customerSelect').selectedIndex;
    if (customerIdx < 0) {
      showToast(t('msg_select_customer'));
      return;
    }
    const customer = appData.customers[customerIdx];
    completeSale(total, 0, 'debt', customer);
  }
}

function completeSale(total, paid, type, customer = null) {
  const sale = {
    id: Date.now(),
    date: new Date(),
    items: JSON.parse(JSON.stringify(currentCart)),
    total: total,
    paid: paid,
    type: type,
    customer: customer ? customer.name : null,
    user: currentUser.name,
  };

  currentCart.forEach(item => {
    const product = appData.products.find(p => p.id === item.id);
    if (product) {
      product.qty -= item.qty;
    }
  });

  appData.sales.push(sale);

  if (type === 'debt' && customer) {
    const debt = appData.debts.find(d => d.customer === customer.name);
    if (debt) {
      debt.amount += total;
    } else {
      appData.debts.push({ customer: customer.name, amount: total, date: new Date() });
    }
  }

  saveData();
  currentCart = [];
  document.getElementById('search').value = '';
  document.getElementById('paid').value = '';
  document.getElementById('discountVal').value = '0';
  updateCart();

  if (type === 'full') {
    const change = paid - total;
    showToast(t('msg_change') + change.toFixed(2) + ' ' + appData.config.currency);
    printInvoice(sale);
  } else if (type === 'partial') {
    const remaining = total - paid;
    showToast(t('msg_partial_ok') + paid.toFixed(2) + t('msg_partial_rem') + remaining.toFixed(2));
    printInvoice(sale);
  } else {
    showToast(t('msg_debt_ok') + customer.name + t('msg_debt_amount') + total.toFixed(2));
    printInvoice(sale);
  }
}

/* ================================================
   STOCK MANAGEMENT — إدارة المخزون
   ✅ تحسين: خانة الماركة مفتوحة للإدخال اليدوي
================================================ */
function showStockTab(tabName) {
  document.querySelectorAll('.stock-tab-content').forEach(el => {
    el.classList.add('hidden');
  });
  document.getElementById('stockTab-' + tabName).classList.remove('hidden');

  if (tabName === 'families') {
    loadFamilies();
  } else if (tabName === 'brands') {
    loadBrands();
  } else if (tabName === 'all') {
    loadAllProducts();
  }
}

function loadFamilies() {
  const container = document.getElementById('familiesList');
  if (appData.families.length === 0) {
    container.innerHTML = '<p>' + t('no_families') + '</p>';
    return;
  }

  container.innerHTML = appData.families.map((fam, idx) => `
    <div class="family-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:700;font-size:16px">${fam.name}</div>
          <div style="font-size:13px;color:var(--text3)">الماركات: ${(appData.brands.filter(b => b.family === fam.name).length)}</div>
        </div>
        <button onclick="deleteFamily(${idx})" style="background:#fee2e2;color:#ef4444;padding:4px 8px;border:none;border-radius:4px;cursor:pointer">🗑️</button>
      </div>
    </div>
  `).join('');
}

function addFamily() {
  const name = prompt(t('family_ph'));
  if (!name) return;

  if (appData.families.find(f => f.name === name)) {
    showToast(t('msg_family_exists'));
    return;
  }

  appData.families.push({ name: name });
  saveData();
  loadFamilies();
  showToast(t('msg_saved'));
}

function deleteFamily(idx) {
  if (!confirm(t('msg_confirm_delete_family'))) return;
  
  const familyName = appData.families[idx].name;
  appData.brands = appData.brands.filter(b => b.family !== familyName);
  appData.products = appData.products.filter(p => p.family !== familyName);
  appData.families.splice(idx, 1);
  saveData();
  loadFamilies();
}

function loadBrands() {
  const familySelect = document.getElementById('brandFamilySelect');
  const container = document.getElementById('brandsList');

  familySelect.innerHTML = '<option value="">-- اختر عائلة --</option>' + 
    appData.families.map((fam, idx) => `
      <option value="${idx}">${fam.name}</option>
    `).join('');

  const selectedIdx = familySelect.value;
  let brands = appData.brands;

  if (selectedIdx !== '') {
    const selectedFamily = appData.families[selectedIdx].name;
    brands = appData.brands.filter(b => b.family === selectedFamily);
  }

  if (brands.length === 0) {
    container.innerHTML = '<p>' + t('no_brands') + '</p>';
    return;
  }

  container.innerHTML = brands.map((brand, idx) => `
    <div class="brand-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:700;font-size:16px">${brand.name}</div>
          <div style="font-size:13px;color:var(--text3)">العائلة: ${brand.family}</div>
          <div style="font-size:13px;color:var(--text3)">المنتجات: ${appData.products.filter(p => p.brand === brand.name).length}</div>
        </div>
        <button onclick="deleteBrand('${brand.name}')" style="background:#fee2e2;color:#ef4444;padding:4px 8px;border:none;border-radius:4px;cursor:pointer">🗑️</button>
      </div>
    </div>
  `).join('');
}

function addBrand() {
  const familySelect = document.getElementById('brandFamilySelect');
  const selectedIdx = familySelect.value;

  if (selectedIdx === '') {
    showToast(t('msg_select_family'));
    return;
  }

  const family = appData.families[selectedIdx].name;
  const name = prompt(t('brand_ph'));
  if (!name) return;

  if (appData.brands.find(b => b.name === name && b.family === family)) {
    showToast(t('msg_brand_exists'));
    return;
  }

  appData.brands.push({ name: name, family: family });
  saveData();
  loadBrands();
  showToast(t('msg_saved'));
}

function deleteBrand(brandName) {
  if (!confirm(t('msg_confirm_delete_brand'))) return;
  
  appData.products = appData.products.filter(p => p.brand !== brandName);
  appData.brands = appData.brands.filter(b => b.name !== brandName);
  saveData();
  loadBrands();
}

function loadAllProducts() {
  const searchVal = document.getElementById('stockSearch').value.toLowerCase();
  let products = appData.products;

  // البحث الشامل عن المنتجات
  if (searchVal) {
    products = products.filter(p =>
      p.name.toLowerCase().includes(searchVal) ||
      p.barcode.toLowerCase().includes(searchVal) ||
      p.brand.toLowerCase().includes(searchVal) ||
      p.family.toLowerCase().includes(searchVal)
    );
  }

  const container = document.getElementById('allProductsList');
  if (products.length === 0) {
    container.innerHTML = '<p>' + (searchVal ? 'لا توجد نتائج' : t('no_stock')) + '</p>';
    return;
  }

  container.innerHTML = products.map(p => `
    <div class="product-card">
      <div style="display:flex;justify-content:space-between;align-items:start">
        <div>
          <div style="font-weight:700;font-size:15px">${p.name}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:4px">
            <div>الماركة: ${p.brand}</div>
            <div>العائلة: ${p.family}</div>
            <div>الباركود: ${p.barcode}</div>
            <div>المخزون: <span style="color:${p.qty < 5 ? '#ef4444' : '#10b981'};font-weight:700">${p.qty}</span></div>
            <div>السعر: ${p.price} ${appData.config.currency}</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px">
          <button onclick="editProduct('${p.id}')" style="background:var(--primary);color:white;padding:4px 8px;border:none;border-radius:4px;cursor:pointer;font-size:12px">تعديل</button>
          <button onclick="deleteProduct('${p.id}')" style="background:#fee2e2;color:#ef4444;padding:4px 8px;border:none;border-radius:4px;cursor:pointer;font-size:12px">حذف</button>
        </div>
      </div>
    </div>
  `).join('');
}

function showAddProductModal() {
  document.getElementById('addProductModal').style.display = 'flex';
  loadAddProductForm();
}

function loadAddProductForm() {
  const familySelect = document.getElementById('pFamily');
  familySelect.innerHTML = '<option value="">-- اختر العائلة --</option>' + 
    appData.families.map(fam => `<option value="${fam.name}">${fam.name}</option>`).join('');

  document.getElementById('pName').value = '';
  document.getElementById('pBrand').value = '';
  document.getElementById('pSize').value = '';
  document.getElementById('pBarcode').value = '';
  document.getElementById('pPrice').value = '';
  document.getElementById('pCost').value = '';
  document.getElementById('pQty').value = '';
  document.getElementById('pExp').value = '';
  document.getElementById('productEditId').value = '';
}

function saveProduct() {
  const family = document.getElementById('pFamily').value;
  const brand = document.getElementById('pBrand').value.trim();
  const name = document.getElementById('pName').value.trim();
  const size = document.getElementById('pSize').value.trim();
  const barcode = document.getElementById('pBarcode').value.trim();
  const price = parseFloat(document.getElementById('pPrice').value);
  const cost = parseFloat(document.getElementById('pCost').value);
  const qty = parseInt(document.getElementById('pQty').value);
  const exp = document.getElementById('pExp').value;
  const editId = document.getElementById('productEditId').value;

  if (!family || !brand || !name || !barcode || isNaN(price) || isNaN(qty)) {
    showToast(t('msg_fill_all'));
    return;
  }

  if (!appData.brands.find(b => b.name === brand && b.family === family)) {
    showToast('الماركة ' + brand + ' غير موجودة تحت العائلة ' + family);
    return;
  }

  if (editId) {
    const product = appData.products.find(p => p.id === editId);
    if (product) {
      product.family = family;
      product.brand = brand;
      product.name = name;
      product.size = size;
      product.barcode = barcode;
      product.price = price;
      product.cost = cost;
      product.qty = qty;
      product.exp = exp;
    }
  } else {
    if (appData.products.find(p => p.barcode === barcode)) {
      showToast(t('msg_barcode_exists'));
      return;
    }
    appData.products.push({
      id: 'prod_' + Date.now(),
      family: family,
      brand: brand,
      name: name,
      size: size,
      barcode: barcode,
      price: price,
      cost: cost,
      qty: qty,
      exp: exp,
      created: new Date(),
    });
  }

  saveData();
  document.getElementById('addProductModal').style.display = 'none';
  loadAllProducts();
  showToast(t('msg_item_saved'));
}

function editProduct(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('pName').value = product.name;
  document.getElementById('pBrand').value = product.brand;
  document.getElementById('pSize').value = product.size || '';
  document.getElementById('pBarcode').value = product.barcode;
  document.getElementById('pPrice').value = product.price;
  document.getElementById('pCost').value = product.cost || '';
  document.getElementById('pQty').value = product.qty;
  document.getElementById('pExp').value = product.exp || '';
  document.getElementById('pFamily').value = product.family;
  document.getElementById('productEditId').value = productId;

  const modal = document.getElementById('addProductModal');
  modal.style.display = 'flex';
  modal.scrollIntoView({ behavior: 'smooth' });
}

function deleteProduct(productId) {
  if (!confirm(t('msg_confirm_delete'))) return;
  
  appData.products = appData.products.filter(p => p.id !== productId);
  saveData();
  loadAllProducts();
}

/* ================================================
   POINTS OF SALE — نقاط البيع
   ✅ تحسين: البحث الشامل عن نقاط البيع
================================================ */
function loadSalesPoints() {
  const searchVal = document.getElementById('salePointSearch').value.toLowerCase();
  let sales = appData.sales;

  // البحث الشامل عن نقاط البيع
  if (searchVal) {
    sales = sales.filter(s => 
      s.customer.toLowerCase().includes(searchVal) ||
      s.user.toLowerCase().includes(searchVal) ||
      s.items.some(i => i.name.toLowerCase().includes(searchVal)) ||
      s.items.some(i => i.brand.toLowerCase().includes(searchVal)) ||
      s.items.some(i => i.family.toLowerCase().includes(searchVal)) ||
      new Date(s.date).toLocaleDateString('ar-DZ').includes(searchVal)
    );
  }

  const container = document.getElementById('salesPointsList');
  if (sales.length === 0) {
    container.innerHTML = '<p>لا توجد عمليات بيع</p>';
    return;
  }

  container.innerHTML = sales.map(sale => `
    <div class="sale-card">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
        <div>
          <div style="font-weight:700">#${sale.id}</div>
          <div style="font-size:12px;color:var(--text3)">${new Date(sale.date).toLocaleString('ar-DZ')}</div>
        </div>
        <div style="text-align:left">
          <div style="font-weight:700;color:var(--primary);font-size:16px">${sale.total.toFixed(2)} ${appData.config.currency}</div>
          <div style="font-size:12px;color:var(--text3)">${sale.type === 'full' ? 'كامل' : sale.type === 'partial' ? 'جزئي' : 'دين'}</div>
        </div>
      </div>
      <div style="border-top:1px solid var(--border);padding-top:8px;font-size:12px">
        <div>👤 ${sale.user} ${sale.customer ? '| 🛍️ ' + sale.customer : ''}</div>
        <div style="margin-top:4px;color:var(--text3)">
          ${sale.items.map(i => `${i.name} (${i.brand}) x${i.qty}`).join(' | ')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ================================================
   CUSTOMERS — الزبائن
================================================ */
function loadCustomers() {
  const container = document.getElementById('customersList');
  if (appData.customers.length === 0) {
    container.innerHTML = '<p>' + t('no_customers') + '</p>';
    return;
  }

  container.innerHTML = appData.customers.map((cust, idx) => `
    <div class="customer-card">
      <div style="display:flex;justify-content:space-between;align-items:start">
        <div>
          <div style="font-weight:700;font-size:15px">${cust.name}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:4px">
            <div>الهاتف: ${cust.phone || 'N/A'}</div>
            <div>العنوان: ${cust.address || 'N/A'}</div>
          </div>
        </div>
        <button onclick="deleteCustomer(${idx})" style="background:#fee2e2;color:#ef4444;padding:4px 8px;border:none;border-radius:4px;cursor:pointer">🗑️</button>
      </div>
    </div>
  `).join('');
}

function addCustomer() {
  const name = prompt(t('customer_ph'));
  if (!name) return;

  if (appData.customers.find(c => c.name === name)) {
    showToast(t('msg_customer_exists'));
    return;
  }

  appData.customers.push({
    id: 'cust_' + Date.now(),
    name: name,
    phone: '',
    address: '',
  });

  saveData();
  loadCustomers();
  loadCustomerSelect();
  showToast(t('msg_saved'));
}

function deleteCustomer(idx) {
  if (!confirm(t('msg_confirm_delete_customer'))) return;
  
  appData.customers.splice(idx, 1);
  saveData();
  loadCustomers();
  loadCustomerSelect();
}

function loadCustomerSelect() {
  const select = document.getElementById('customerSelect');
  select.innerHTML = '<option value="">-- اختر زبون --</option>' +
    appData.customers.map((cust, idx) => `
      <option value="${idx}">${cust.name}</option>
    `).join('');
}

/* ================================================
   USERS & ALERTS — المستخدمون والتنبيهات
================================================ */
function openUsersModal() {
  document.getElementById('usersModal').style.display = 'flex';
  loadUsers();
}

function closeUsersModal() {
  document.getElementById('usersModal').style.display = 'none';
}

function loadUsers() {
  const tbody = document.querySelector('#usersTable tbody');
  tbody.innerHTML = appData.users.map((user, idx) => `
    <tr>
      <td>${user.name}</td>
      <td>${user.pin}</td>
      <td>${user.role === 'manager' ? t('role_manager') : t('role_seller')}</td>
      <td>
        <button onclick="deleteUser(${idx})" style="background:#fee2e2;color:#ef4444;padding:4px 8px;border:none;border-radius:4px;cursor:pointer;font-size:12px">🗑️ حذف</button>
      </td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('addUserForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addUser();
    });
  }
});

function addUser() {
  const name = document.getElementById('newUserName').value.trim();
  const pin = document.getElementById('newUserPin').value.trim();
  const role = document.getElementById('newUserRole').value;

  if (!name || !pin || pin.length !== 4 || isNaN(pin)) {
    showToast(t('msg_pin_format'));
    return;
  }

  if (appData.users.find(u => u.name === name)) {
    showToast(t('msg_user_exists'));
    return;
  }

  appData.users.push({ name: name, pin: pin, role: role });
  saveData();
  loadUsers();
  loadUserSelect();

  document.getElementById('newUserName').value = '';
  document.getElementById('newUserPin').value = '';
  showToast(t('msg_saved'));
}

function deleteUser(idx) {
  if (appData.users.length === 1) {
    showToast(t('msg_cant_delete'));
    return;
  }

  if (!confirm(t('msg_confirm_delete_user'))) return;

  appData.users.splice(idx, 1);
  saveData();
  loadUsers();
  loadUserSelect();
}

/* ================================================
   REPORTS — التقارير
================================================ */
function loadReports() {
  renderSalesReport('day');
}

function renderSalesReport(period) {
  const now = new Date();
  let startDate = new Date();

  if (period === 'day') {
    startDate.setHours(0, 0, 0, 0);
  } else if (period === 'week') {
    const day = now.getDay();
    startDate.setDate(now.getDate() - (day === 0 ? 6 : day - 1));
    startDate.setHours(0, 0, 0, 0);
  } else if (period === 'month') {
    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);
  } else if (period === 'year') {
    startDate.setMonth(0, 1);
    startDate.setHours(0, 0, 0, 0);
  }

  const filtered = appData.sales.filter(s => new Date(s.date) >= startDate && s.type === 'full');

  let sales = 0;
  let revenue = 0;
  let cost = 0;

  filtered.forEach(sale => {
    sales++;
    revenue += sale.total;
    sale.items.forEach(item => {
      cost += item.cost * item.qty;
    });
  });

  const profit = revenue - cost;

  document.getElementById('reportSales').textContent = sales;
  document.getElementById('reportRevenue').textContent = revenue.toFixed(2);
  document.getElementById('reportCost').textContent = cost.toFixed(2);
  document.getElementById('reportProfit').textContent = profit.toFixed(2);
}

/* ================================================
   DEBTS — الديون
================================================ */
function loadDebts() {
  const container = document.getElementById('debtsList');
  if (appData.debts.length === 0) {
    container.innerHTML = '<p>' + t('no_debts') + '</p>';
    return;
  }

  const totalDebts = appData.debts.reduce((sum, d) => sum + d.amount, 0);
  document.getElementById('totalDebts').textContent = totalDebts.toFixed(2);
  document.getElementById('debtorsCount').textContent = appData.debts.length;

  container.innerHTML = appData.debts.map((debt, idx) => `
    <div class="debt-card">
      <div style="display:flex;justify-content:space-between;align-items:start">
        <div>
          <div style="font-weight:700;font-size:15px">${debt.customer}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:4px">
            <div>المبلغ: ${debt.amount.toFixed(2)} ${appData.config.currency}</div>
            <div>التاريخ: ${new Date(debt.date).toLocaleDateString('ar-DZ')}</div>
          </div>
        </div>
        <button onclick="settleDebt(${idx})" style="background:var(--success);color:white;padding:4px 8px;border:none;border-radius:4px;cursor:pointer">تسوية</button>
      </div>
    </div>
  `).join('');
}

function settleDebt(idx) {
  const debt = appData.debts[idx];
  const paid = parseFloat(prompt(t('settle_prompt')));

  if (isNaN(paid) || paid <= 0) return;

  if (paid >= debt.amount) {
    appData.debts.splice(idx, 1);
    showToast(t('settle_ok') + paid.toFixed(2) + t('settle_from') + debt.customer);
  } else {
    debt.amount -= paid;
    showToast(t('settle_ok') + paid.toFixed(2) + t('settle_from') + debt.customer);
  }

  saveData();
  loadDebts();
}

/* ================================================
   SETTINGS — الإعدادات
================================================ */
function saveAppSettings() {
  appData.config.shopName = document.getElementById('sShopName').value || 'متجري';
  appData.config.currency = document.getElementById('sCurrency').value || 'دج';
  appData.config.lang = document.getElementById('sLang').value || 'ar';
  appData.config.dateFormat = document.getElementById('sDateFormat').value || 'DD/MM/YYYY';
  appData.config.timeFormat = document.getElementById('sTimeFormat').value || '24h';

  saveData();
  document.getElementById('shopName').textContent = appData.config.shopName;
  showToast(t('msg_saved'));
}

function saveStoreSettings() {
  appData.config.shopName = document.getElementById('sShopNameStore').value || 'متجري';
  appData.config.shopPhone = document.getElementById('sShopPhone').value || '';
  appData.config.shopAddress = document.getElementById('sShopAddress').value || '';

  saveData();
  document.getElementById('shopName').textContent = appData.config.shopName;
  showToast(t('msg_saved'));
}

function saveSettingsPrint() {
  appData.config.printSettings.paperSize = document.getElementById('sPaperSize').value;
  appData.config.printSettings.copies = parseInt(document.getElementById('sCopies').value) || 1;
  appData.config.printSettings.printLogo = document.getElementById('sPrintLogo').checked;
  appData.config.printSettings.printShopName = document.getElementById('sPrintShopName').checked;
  appData.config.printSettings.printPhone = document.getElementById('sPrintPhone').checked;
  appData.config.printSettings.printWelcome = document.getElementById('sPrintWelcome').checked;
  appData.config.printSettings.printBarcode = document.getElementById('sPrintBarcode').checked;
  appData.config.printSettings.printCustBarcode = document.getElementById('sPrintCustBarcode').checked;

  saveData();
  showToast(t('msg_saved'));
}

function manualBackup() {
  const backup = {
    version: '1.0.2',
    date: new Date().toISOString(),
    data: appData,
  };

  const dataStr = JSON.stringify(backup, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `pos-backup-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);

  showToast(t('msg_backup_done'));
}

function importBackup(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const backup = JSON.parse(e.target.result);
      appData = backup.data;
      saveData();
      showToast(t('msg_saved'));
      location.reload();
    } catch (error) {
      showToast('خطأ في استيراد النسخة');
    }
  };
  reader.readAsText(file);
}

function toggleAutoBackup(checked) {
  appData.config.autoBackup = checked;
  saveData();
  showToast(checked ? t('msg_backup_auto_on') : t('msg_backup_auto_off'));
}

function checkAutoBackup() {
  if (!appData.config.autoBackup) return;

  const lastBackup = localStorage.getItem('lastBackup');
  const today = new Date().toDateString();

  if (lastBackup !== today) {
    manualBackup();
    localStorage.setItem('lastBackup', today);
  }
}

function confirmPartialReset() {
  const input = prompt(t('msg_reset_confirm'));
  if (input !== 'نعم') {
    showToast(t('msg_reset_cancel'));
    return;
  }

  appData.sales = [];
  appData.debts = [];
  saveData();
  showToast(t('msg_reset_done'));
}

function confirmReset() {
  const input = prompt(t('msg_reset_confirm'));
  if (input !== 'نعم') {
    showToast(t('msg_reset_cancel'));
    return;
  }

  appData = {
    users: [{ name: 'مدير', pin: '0000', role: 'manager' }],
    families: [],
    brands: [],
    products: [],
    customers: [],
    sales: [],
    debts: [],
    config: appData.config,
  };

  saveData();
  logout();
  showToast(t('msg_reset_done'));
}

/* ================================================
   UTILITIES — الأدوات
================================================ */
function show(page) {
  document.querySelectorAll('[id*="Menu"]').forEach(menu => menu.classList.add('hidden'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  if (page === 'sale') {
    document.getElementById('sale').classList.add('active');
    loadCustomerSelect();
  } else if (page === 'stock') {
    document.getElementById('stock').classList.add('active');
    showStockTab('families');
  } else if (page === 'suppliers') {
    // Supplier management logic here
  } else if (page === 'customers') {
    document.getElementById('customers').classList.add('active');
    loadCustomers();
  } else if (page === 'alerts') {
    openUsersModal();
  } else if (page === 'reports') {
    document.getElementById('reports').classList.add('active');
    loadReports();
    loadDebts();
  } else if (page === 'settings') {
    document.getElementById('settings').classList.add('active');
    loadSettings();
  }

  document.getElementById('menuBtn').click();
}

function loadSettings() {
  document.getElementById('sShopName').value = appData.config.shopName || '';
  document.getElementById('sShopNameStore').value = appData.config.shopName || '';
  document.getElementById('sShopPhone').value = appData.config.shopPhone || '';
  document.getElementById('sShopAddress').value = appData.config.shopAddress || '';
  document.getElementById('sCurrency').value = appData.config.currency || 'دج';
  document.getElementById('sLang').value = appData.config.lang || 'ar';
  document.getElementById('sDateFormat').value = appData.config.dateFormat || 'DD/MM/YYYY';
  document.getElementById('sTimeFormat').value = appData.config.timeFormat || '24h';
  document.getElementById('sPaperSize').value = appData.config.printSettings.paperSize;
  document.getElementById('sCopies').value = appData.config.printSettings.copies;
  document.getElementById('sPrintLogo').checked = appData.config.printSettings.printLogo;
  document.getElementById('sPrintShopName').checked = appData.config.printSettings.printShopName;
  document.getElementById('sPrintPhone').checked = appData.config.printSettings.printPhone;
  document.getElementById('sPrintWelcome').checked = appData.config.printSettings.printWelcome;
  document.getElementById('sPrintBarcode').checked = appData.config.printSettings.printBarcode;
  document.getElementById('sPrintCustBarcode').checked = appData.config.printSettings.printCustBarcode;
  document.getElementById('sAutoBackup').checked = appData.config.autoBackup;
}

function updateClock() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('ar-DZ');
  const timeStr = now.toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const dateEl = document.getElementById('currentDate');
  const timeEl = document.getElementById('currentTime');

  if (dateEl) dateEl.textContent = dateStr;
  if (timeEl) timeEl.textContent = timeStr;
}

function printInvoice(sale) {
  let html = `
    <div style="text-align:center;font-size:12px;font-family:monospace;max-width:350px">
      <div style="margin:10px 0;font-weight:bold;font-size:16px">تقرير المبيعات</div>
      <div style="border-bottom:1px solid #000;margin:5px 0;padding:5px 0">
        ${appData.config.shopName}<br>
        ${appData.config.shopPhone}<br>
        ${new Date().toLocaleDateString('ar-DZ')} ${new Date().toLocaleTimeString('ar-DZ')}
      </div>
  `;

  sale.items.forEach(item => {
    const itemTotal = (item.price * item.qty).toFixed(2);
    html += `
      <div style="margin:5px 0">
        ${item.name} (${item.brand})<br>
        x${item.qty} × ${item.price} = ${itemTotal}
      </div>
    `;
  });

  html += `
    <div style="border-top:1px solid #000;margin:10px 0;padding:5px 0;font-weight:bold">
      المجموع: ${sale.total.toFixed(2)} ${appData.config.currency}
    </div>
    <div style="margin:10px 0">شكراً لتعاملكم معنا</div>
  `;

  const printWindow = window.open('', '', 'width=400,height=600');
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.print();
}

function togglePinVisibility() {
  const pinInput = document.getElementById('pin');
  const eyeIcon = document.getElementById('eyeIcon');

  if (pinInput.type === 'password') {
    pinInput.type = 'text';
    eyeIcon.style.opacity = '1';
  } else {
    pinInput.type = 'password';
    eyeIcon.style.opacity = '0.5';
  }
}

function showToast(message) {
  const toast = document.getElementById('globalToast');
  toast.textContent = message;
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

function t(key) {
  const lang = appData.config.lang || 'ar';
  const strings = TRANSLATIONS[lang];
  return strings && strings[key] ? strings[key] : TRANSLATIONS.ar[key] || key;
}

/* ================================================
   DATA PERSISTENCE — حفظ البيانات
================================================ */
function saveData() {
  localStorage.setItem('posData', JSON.stringify(appData));
}

function loadData() {
  const saved = localStorage.getItem('posData');
  if (saved) {
    try {
      appData = JSON.parse(saved);
    } catch (e) {
      console.error('خطأ في تحميل البيانات:', e);
    }
  }
  initializeDefaultUser();
  loadUserSelect();
}

function emergencyReset() {
  if (confirm('هل تريد إعادة تعيين التطبيق؟')) {
    localStorage.removeItem('posData');
    location.reload();
  }
}

/* ================================================
   INITIALIZE — بدء التطبيق
================================================ */
document.addEventListener('DOMContentLoaded', initApp);
