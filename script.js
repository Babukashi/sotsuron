// サイズ換算表の画像ファイル名（必要に応じて変更してください）
const SOCKS_CHART_IMAGE = 'socks_size_table.jpg';
const APPAREL_CHART_IMAGE = 'apparel_size_table.jpg';

const uiLabels = {
  en: { yes: 'YES', no: 'NO', home: 'Home' },
  zh: { yes: '是 (Yes)', no: '否 (No)', home: '回到主页' },
  ko: { yes: '예 (Yes)', no: '아니요 (No)', home: '홈으로' },
  es: { yes: 'SÍ (Yes)', no: 'NO', home: 'Inicio' },
  fr: { yes: 'OUI (Yes)', no: 'NON (No)', home: 'Accueil' }
};

const appData = {
  sizing: {
    icon: '👕',
    title: 'サイズ確認',
    isStaffInputRequired: true,
    startNode: 'q1',
    nodes: {
      q1: {
        ja: 'こちらのサイズは [SIZE] でございます。こちらをご購入でよろしいですか？\n（別のサイズをお求めでしたらNOを押してください。）',
        en: 'This size is [SIZE]. Is it okay to purchase this one?\n(If you would like a different size, please press NO.)',
        zh: '这个尺寸是 [SIZE]。购买这个可以吗？\n（如果您需要其他尺寸、请按“否”。）',
        ko: '이 사이즈는 [SIZE] 입니다. 이것으로 구매하시겠습니까?\n(다른 사이즈를 원하시면 NO를 눌러주세요.)',
        es: 'Esta talla es [SIZE]. ¿Está bien comprar esta?\n(Si desea una talla diferente, presione NO.)',
        fr: "Cette taille est [SIZE]. Êtes-vous d'accord pour l'acheter ?\n(Si vous souhaitez une autre taille, appuyez sur NON.)",
        yes: 'end_confirm',
        no: 'q2'
      },
      q2: {
        ja: 'どのサイズをお求めですか？',
        en: 'Which size are you looking for?',
        zh: '您需要什么尺寸？',
        ko: '어떤 사이즈를 원하십니까?',
        es: '¿Qué talla busca?',
        fr: 'Quelle taille recherchez-vous ?',
        customButtons: true,
        options: [
          {
            label: {
              en: 'Larger size',
              zh: '更大尺寸',
              ko: '더 큰 사이즈',
              es: 'Talla más grande',
              fr: 'Taille plus grande'
            },
            next: 'end_large',
            class: 'btn-yes'
          },
          {
            label: {
              en: 'Smaller size',
              zh: '更小尺寸',
              ko: '더 작은 사이즈',
              es: 'Talla más pequeña',
              fr: 'Taille plus petite'
            },
            next: 'end_small',
            class: 'btn-no'
          }
        ]
      },
      end_confirm: {
        ja: '確認ありがとうございます。',
        en: 'Thank you for confirming.',
        zh: '谢谢您的确认。',
        ko: '확인해 주셔서 감사합니다.',
        es: 'Gracias por confirmar.',
        fr: 'Merci pour votre confirmation.',
        isEnd: true
      },
      end_large: {
        ja: '大きいサイズの在庫があるか確認してきます。少々お待ちください。',
        en: 'I will check if we have a larger size in stock. Please wait a moment.',
        zh: '我去确认一下是否有大号的库存。请稍等。',
        ko: '큰 사이즈의 재고가 있는지 확인하고 오겠습니다. 잠시만 기다려 주십시오.',
        es: 'Comprobaré si tenemos una talla más grande. Por favor, espere un momento.',
        fr: 'Je vais vérifier si nous avons une taille plus grande en stock. Veuillez patienter un moment.',
        isEnd: true
      },
      end_small: {
        ja: '小さいサイズの在庫があるか確認してきます。少々お待ちください。',
        en: 'I will check if we have a smaller size in stock. Please wait a moment.',
        zh: '我去确认一下是否有小号的库存。请稍等。',
        ko: '작은 사이즈의 재고가 있는지 확인하고 오겠습니다. 잠시만 기다려 주십시오.',
        es: 'Comprobaré si tenemos una talla más pequeña. Por favor, espere un momento.',
        fr: 'Je vais vérifier si nous avons une taille plus petite en stock. Veuillez patienter un moment.',
        isEnd: true
      }
    }
  },
  tax_free: {
    icon: '🛍️',
    title: '免税手続き',
    startNode: 'q1',
    nodes: {
      q1: {
        ja: '免税をご希望ですか？',
        en: 'Would you like to use tax-free shopping?',
        zh: '您需要办理免税吗？',
        ko: '면세를 원하십니까?',
        es: '¿Le gustaría utilizar el servicio libre de impuestos?',
        fr: 'Souhaitez-vous utiliser le service détaxe ?',
        yes: 'q2',
        no: 'end_no_tax_free'
      },
      q2: {
        ja: 'パスポートの原本は今手元にありますでしょうか？\n（画像・QRコードは使用できません。）',
        en: 'Do you have your physical passport with you?\n(Images or QR codes cannot be used.)',
        zh: '您带有护照原件吗？\n（不能使用照片或二维码。）',
        ko: '실물 여권을 지금 가지고 계십니까?\n(사진이나 QR 코드는 사용할 수 없습니다.)',
        es: '¿Tiene su pasaporte físico con usted?\n(No se pueden utilizar imágenes ni códigos QR.)',
        fr: 'Avez-vous votre passeport physique avec vous ?\n(Les images ou les codes QR ne peuvent pas être utilisés.)',
        yes: 'end_present',
        no: 'q3'
      },
      q3: {
        ja: '5分ほどでここに持ってこれますか？',
        en: 'Can you bring it here in about 5 minutes?',
        zh: '您能在5分钟左右把它带过来吗？',
        ko: '5분 정도 이내에 가져오실 수 있습니까?',
        es: '¿Puede traerlo aquí en unos 5 minutos?',
        fr: "Pouvez-vous l'apporter ici dans environ 5 minutes ?",
        yes: 'end_wait',
        no: 'end_revisit'
      },
      end_present: {
        ja: 'スキャンの必要があるためご提示お願い致します。',
        en: 'Please present it as it needs to be scanned.',
        zh: '请出示护照，我们需要进行扫描。',
        ko: '스캔이 필요하오니 제시해 주시기 바랍니다.',
        es: 'Por favor, preséntelo ya que necesita ser escaneado.',
        fr: 'Veuillez le présenter car il doit être scanné.',
        isEnd: true
      },
      end_wait: {
        ja: 'お待ちしておりますのでパスポートの原本を持ってきてください。',
        en: 'I will be waiting, so please bring your physical passport.',
        zh: '我会在这里等您，请把护照原件带过来。',
        ko: '기다리고 있겠으니 실물 여권을 가져와 주십시오.',
        es: 'Le estaré esperando, así que por favor traiga su pasaporte físico.',
        fr: 'Je vous attendrai, veuillez donc apporter votre passeport physique.',
        isEnd: true
      },
      end_revisit: {
        ja: '今回は免税せずに会計いたします。\nもし免税ご希望でしたら今日中にパスポートの原本とレシート（クレジットカードやQRでお支払いの場合はご利用控えも合わせて2枚）、購入されたお品物全部を持って再来店してください。',
        en: 'We will proceed with the payment without tax exemption this time.\nIf you wish to receive a tax refund, please return today with your physical passport, receipts (if paying by credit card or QR, please bring both the receipt and the customer copy), and all purchased items.',
        zh: '这次将不办理免税直接结账。\n如果您希望办理免税，请在今天内带上护照原件、收据（如果用信用卡或QR支付，请同时带上存根）、以及购买的所有商品再次光临。',
        ko: '이번에는 면세 없이 결제하겠습니다.\n면세를 원하신다면 오늘 중으로 실물 여권과 영수증(신용카드나 QR 결제 시 이용대기표 포함 2장), 구매하신 물건 전체를 지참하여 다시訪問해 주십시오.',
        es: 'Procederemos con el pago sin exención de impuestos esta vez.\nSi desea recibir un reembolso de impuestos, regrese hoy con su pasaporte físico, los recibos (si paga con tarjeta de crédito o QR, traiga el recibo y la copia del cliente) y todos los artículos comprados.',
        fr: "Nous procéderons au paiement sans exonération de taxes cette fois-ci.\nSi vous souhaitez bénéficier d'une détaxe, veuillez revenir aujourd'hui avec votre passeport physique, les reçus (si vous payez par carte de crédit ou QR, veuillez apporter le reçu et la copie client) et tous les articles achetés.",
        isEnd: true
      },
      end_no_tax_free: {
        ja: '免税せずに会計を進めさせて頂きます。',
        en: 'We will proceed with the checkout without tax exemption.',
        zh: '我们将不办理免税，直接进行结账。',
        ko: '면세 없이 계산을 진행하겠습니다.',
        es: 'Procederemos con el cobro sin exención de impuestos.',
        fr: "Nous allons procéder à l'encaissement sans exonération de taxes.",
        isEnd: true
      }
    }
  },
  posa: {
    icon: '💳',
    title: 'POSAカード',
    startNode: 'q1',
    nodes: {
      q1: {
        ja: 'この商品はダウンロード版ですがよろしいですか？',
        en: 'This is a digital download version. Is that okay?',
        zh: '这是下载版（数字版），可以吗？',
        ko: '이 상품은 다운로드 버전입니다. 괜찮으십니까?',
        es: 'Esta es una versión de descarga digital. ¿Está bien?',
        fr: 'Ceci est une version de téléchargement numérique. Est-ce que ça va ?',
        yes: 'q2',
        no: 'end_bring_package'
      },
      q2: {
        ja: '日本のニンテンドーアカウントを持っていますか？',
        en: 'Do you have a Japanese Nintendo account?',
        zh: '您有日本的任天堂账号吗？',
        ko: '일본 닌텐도 계정을 가지고 계십니까?',
        es: '¿Tiene una cuenta de Nintendo japonesa?',
        fr: 'Avez-vous un compte Nintendo japonais ?',
        yes: 'end_checkout',
        no: 'q3'
      },
      q3: {
        ja: 'こちらのダウンロードカードは日本のニンテンドーアカウントを所持していないと利用することができません。パッケージ版でしたら海外でも利用できますがそちらを購入されますか？',
        en: 'This download card cannot be used without a Japanese Nintendo account. Physical packages can be used abroad; would you like to buy that instead?',
        zh: '此下载卡必须拥有日本任天堂账号才能使用。实体版可以在海外使用，您要购买实体版吗？',
        ko: '이 다운로드 카드는 일본 닌텐도 계정이 있어야 사용할 수 있습니다. 패키지 버전은 해외에서도 이용 가능합니다. 그쪽을 구매하시겠습니까?',
        es: 'Esta tarjeta de descarga no se puede usar sin una cuenta de Nintendo japonesa. Las versiones físicas se pueden usar en el extranjero; ¿le gustaría comprar esa en su lugar?',
        fr: "Cette carte de téléchargement ne peut pas être utilisée sans un compte Nintendo japonais. Les versions physiques peuvent être utilisées à l'étranger ; souhaitez-vous acheter celle-ci à la place ?",
        yes: 'end_bring_package',
        no: 'end_cancel'
      },
      end_bring_package: {
        ja: 'ではパッケージ版をお持ちしますので少々お待ちください。',
        en: 'Then I will bring the physical package version. Please wait a moment.',
        zh: '那么我去为您取实体版，请稍等。',
        ko: '그럼 패키지 버전을 가져다 드릴 테니 잠시만 기다려 주십시오.',
        es: 'Entonces traeré la versión física. Por favor, espere un momento.',
        fr: 'Je vais donc apporter la version physique. Veuillez patienter un moment.',
        isEnd: true
      },
      end_checkout: {
        ja: 'このままお会計させて頂きます。購入した後に返品することはできませんのでご了承ください。',
        en: 'I will proceed with the checkout. Please note that returns are not possible after purchase.',
        zh: '准备为您结账。请注意，购买后无法退货。',
        ko: '이대로 결제를 진행하겠습니다. 구매 후에는 반품이 불가능하오니 양해 부탁드립니다.',
        es: 'Procederé con el cobro. Tenga en cuenta que no es posible realizar devoluciones después de la compra.',
        fr: "Je vais procéder à l'encaissement. Veuillez noter que les retours ne sont pas possibles après l'achat.",
        isEnd: true
      },
      end_cancel: {
        ja: 'ではキャンセルさせていただきます。',
        en: 'Then I will cancel the transaction.',
        zh: '那么为您取消交易。',
        ko: '그럼 취소해 드리겠습니다.',
        es: 'Entonces cancelaré la transacción.',
        fr: 'Je vais donc annuler la transaction.',
        isEnd: true
      }
    }
  },
  j_tax_refund: {
    icon: '🧾',
    title: 'J-TaxRefundについて',
    startNode: 'end_info',
    nodes: {
      end_info: {
        ja: 'レシートに記載されているQRコードを読み取って案内に沿ってお客様の情報を入力してください。この作業は今すぐではなく、出国するまでに行っていただければ問題ありません。',
        en: 'Please scan the QR code printed on your receipt and follow the instructions to enter your information. You do not need to do this right now; it is fine as long as you complete it before departing the country.',
        zh: '请扫描小票上的二维码，并按照指引输入您的个人信息。此操作无需立即完成，只要在您出境前办理即可。',
        ko: '영수증에 기재된 QR 코드를 스캔하여 안내에 따라 고객님의 정보를 입력해 주십시오. 이 작업은 지금 당장이 아니라 출국하시기 전까지만 진행해 주시면 문제없습니다.',
        es: 'Por favor, escanee el código QR impreso en su recibo y siga las instrucciones para ingresar su información. No es necesario hacerlo ahora mismo; no hay problema siempre que lo complete antes de salir del país.',
        fr: "Veuillez scanner le code QR imprimé sur votre reçu et suivre les instructions pour saisir vos informations. Il n'est pas nécessaire de le faire tout de suite ; cela ne pose aucun problème tant que vous le faites avant de quitter le pays.",
        isEnd: true
      }
    }
  }
};

const langSelect = document.getElementById('lang-select');
const menuView = document.getElementById('menu-view');
const flowView = document.getElementById('flow-view');
const menuGrid = document.getElementById('menu-grid');
const questionContainer = document.getElementById('question-container');
const categoryTitle = document.getElementById('category-title');
const backBtn = document.getElementById('back-btn');

let currentLang = 'en';
let currentCategoryKey = null;
let currentNodeId = null;
let inputtedSize = '';
let selectedSizeType = 'socks'; // 'socks' または 'apparel'

function initApp() {
  menuGrid.innerHTML = '';
  Object.keys(appData).forEach((key) => {
    const category = appData[key];
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `<div class="menu-icon">${category.icon}</div><div class="menu-title">${category.title}</div>`;

    card.addEventListener('click', () => startFlow(key));

    menuGrid.appendChild(card);
  });
}

function startFlow(categoryKey) {
  currentCategoryKey = categoryKey;
  categoryTitle.textContent = appData[categoryKey].title;
  menuView.classList.remove('active');
  flowView.classList.add('active');
  if (appData[categoryKey].isStaffInputRequired) {
    renderStaffInputScreen();
  } else {
    renderNode(appData[categoryKey].startNode);
  }
}

function renderStaffInputScreen() {
  questionContainer.innerHTML = `
        <div class="staff-input-box">
            <p>【スタッフ用設定画面】<br>商品区分を選択し、確認するサイズを入力してください</p>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="size-category" value="socks" checked>
                <span>靴下</span>
              </label>
              <label class="radio-label">
                <input type="radio" name="size-category" value="apparel">
                <span>アパレル</span>
              </label>
            </div>
            <input type="text" id="size-field" class="size-input" placeholder="サイズを入力（例: 25cm, M, L）">
            <button class="btn-staff-submit" onclick="submitStaffSize()">お客様に画面を渡す</button>
        </div>
    `;
}

function submitStaffSize() {
  const selectedRadio = document.querySelector('input[name="size-category"]:checked');
  selectedSizeType = selectedRadio ? selectedRadio.value : 'apparel';

  const field = document.getElementById('size-field');
  inputtedSize = field.value.trim() || 'ーー';
  renderNode(appData[currentCategoryKey].startNode);
}

function handleNextAction(nextNodeId, actionLabel) {
  const currentNode = appData[currentCategoryKey].nodes[currentNodeId];
  const questionJa = currentNode.ja.replace(/\[SIZE\]/g, inputtedSize);
  const questionTarget = currentNode[currentLang].replace(/\[SIZE\]/g, inputtedSize);

  recordHistory(appData[currentCategoryKey].title, questionJa, questionTarget, actionLabel);
  renderNode(nextNodeId);
}

function handleEndAction(actionLabel) {
  const currentNode = appData[currentCategoryKey].nodes[currentNodeId];
  const questionJa = currentNode.ja.replace(/\[SIZE\]/g, inputtedSize);
  const questionTarget = currentNode[currentLang].replace(/\[SIZE\]/g, inputtedSize);

  recordHistory(appData[currentCategoryKey].title, questionJa, questionTarget, actionLabel);
  returnToMenu();
}

function renderNode(nodeId) {
  currentNodeId = nodeId;
  const node = appData[currentCategoryKey].nodes[nodeId];
  const labels = uiLabels[currentLang];
  let jaText = node.ja.replace(/\[SIZE\]/g, inputtedSize);
  let targetText = node[currentLang].replace(/\[SIZE\]/g, inputtedSize);
  let html = `<div class="question-card"><div class="phrase-ja">${jaText}</div><div class="phrase-target">${targetText}</div></div>`;

  // 「サイズ確認」の最初の確認画面（q1）で選択された区分に応じた換算表を表示
  if (currentCategoryKey === 'sizing' && nodeId === 'q1') {
    const chartImg = selectedSizeType === 'socks' ? SOCKS_CHART_IMAGE : APPAREL_CHART_IMAGE;
    const chartAlt = selectedSizeType === 'socks' ? '靴下サイズ換算表' : '子供服・大人服サイズ換算表';
    html += `
      <div class="size-chart-wrapper" onclick="openImageModal('${chartImg}', '${chartAlt}')">
        <img src="${chartImg}" alt="${chartAlt}" />
        <div class="zoom-hint">🔍 タップで拡大 / Tap to zoom</div>
      </div>
    `;
  }

  const safeYes = labels.yes.replace(/'/g, "\\'");
  const safeNo = labels.no.replace(/'/g, "\\'");
  const safeHome = labels.home.replace(/'/g, "\\'");

  if (node.isEnd) {
    html += `<div class="action-buttons"><button class="btn-end" onclick="handleEndAction('${safeHome}')">${labels.home}</button></div>`;
  } else if (node.customButtons) {
    html += `<div class="action-buttons">`;
    node.options.forEach((opt) => {
      const safeLabel = opt.label[currentLang].replace(/'/g, "\\'");
      html += `<button class="${opt.class}" onclick="handleNextAction('${opt.next}', '${safeLabel}')">${opt.label[currentLang]}</button>`;
    });
    html += `</div>`;
  } else {
    html += `<div class="action-buttons">
      <button class="btn-yes" onclick="handleNextAction('${node.yes}', '${safeYes}')">${labels.yes}</button>
      <button class="btn-no" onclick="handleNextAction('${node.no}', '${safeNo}')">${labels.no}</button>
    </div>`;
  }
  questionContainer.innerHTML = html;
}

function returnToMenu() {
  flowView.classList.remove('active');
  menuView.classList.add('active');
  currentCategoryKey = currentNodeId = null;
  inputtedSize = '';
  selectedSizeType = 'socks';
}

function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab) => tab.classList.remove('active'));
  contents.forEach((content) => content.classList.remove('active'));

  if (tabId === 'home') {
    tabs[0].classList.add('active');
    document.getElementById('tab-home').classList.add('active');
  } else if (tabId === 'history') {
    tabs[1].classList.add('active');
    document.getElementById('tab-history').classList.add('active');
    displayHistory();
  }
}

function recordHistory(category, questionJa, questionTarget, choice) {
  const now = new Date();
  const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
  const dateString = now.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric' });
  const fullTime = `${dateString} ${timeString}`;

  const newEntry = {
    time: fullTime,
    category: category,
    questionJa: questionJa,
    questionTarget: questionTarget,
    choice: choice
  };

  let historyData = JSON.parse(localStorage.getItem('omotenashiHistory')) || [];

  historyData.unshift(newEntry);
  if (historyData.length > 50) historyData.pop();

  localStorage.setItem('omotenashiHistory', JSON.stringify(historyData));
}

function displayHistory() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = '';
  let historyData = JSON.parse(localStorage.getItem('omotenashiHistory')) || [];

  if (historyData.length === 0) {
    historyList.innerHTML = '<tr><td colspan="4" style="text-align:center;">履歴がありません</td></tr>';
    return;
  }

  historyData.forEach((entry) => {
    historyList.innerHTML += `
      <tr>
        <td>${entry.time}</td>
        <td>${entry.category}</td>
        <td>
          <div class="history-q-target">${entry.questionTarget}</div>
          <div class="history-q-ja">${entry.questionJa}</div>
        </td>
        <td>${entry.choice}</td>
      </tr>
    `;
  });
}

function clearHistory() {
  if (confirm('履歴をすべて消去しますか？')) {
    localStorage.removeItem('omotenashiHistory');
    displayHistory();
  }
}

backBtn.onclick = returnToMenu;
langSelect.onchange = (e) => {
  currentLang = e.target.value;
  if (currentNodeId && appData[currentCategoryKey]) {
    renderNode(currentNodeId);
  }
};

/* ==========================================
   スマホ対応 画像拡大＆ピンチズーム制御
   ========================================== */
const imageModal = document.getElementById('image-modal');
const modalZoomArea = document.getElementById('modal-zoom-area');
const modalZoomImg = document.getElementById('modal-zoom-img');

let imgScale = 1;
let imgTranslateX = 0;
let imgTranslateY = 0;

let initialPinchDistance = 0;
let initialScale = 1;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let lastTapTime = 0;

function updateImageTransform() {
  modalZoomImg.style.transform = `translate(${imgTranslateX}px, ${imgTranslateY}px) scale(${imgScale})`;
}

function openImageModal(src, alt = 'サイズ換算表') {
  modalZoomImg.src = src;
  modalZoomImg.alt = alt;
  resetImageZoom();
  imageModal.classList.add('active');
}

function closeImageModal() {
  imageModal.classList.remove('active');
  resetImageZoom();
}

function zoomImage(delta) {
  imgScale = Math.min(Math.max(1, imgScale + delta), 5);
  if (imgScale === 1) {
    imgTranslateX = 0;
    imgTranslateY = 0;
  }
  updateImageTransform();
}

function resetImageZoom() {
  imgScale = 1;
  imgTranslateX = 0;
  imgTranslateY = 0;
  updateImageTransform();
}

function getTouchDistance(touches) {
  return Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
}

modalZoomArea.addEventListener(
  'touchstart',
  (e) => {
    if (e.touches.length === 2) {
      isDragging = false;
      initialPinchDistance = getTouchDistance(e.touches);
      initialScale = imgScale;
    } else if (e.touches.length === 1) {
      // ダブルタップによるズーム切り替え
      const now = Date.now();
      if (now - lastTapTime < 300) {
        if (imgScale > 1) {
          resetImageZoom();
        } else {
          imgScale = 2.5;
          updateImageTransform();
        }
        lastTapTime = 0;
        return;
      }
      lastTapTime = now;

      isDragging = true;
      dragStartX = e.touches[0].clientX - imgTranslateX;
      dragStartY = e.touches[0].clientY - imgTranslateY;
    }
  },
  { passive: false }
);

modalZoomArea.addEventListener(
  'touchmove',
  (e) => {
    e.preventDefault();
    if (e.touches.length === 2 && initialPinchDistance > 0) {
      const currentDistance = getTouchDistance(e.touches);
      const scaleFactor = currentDistance / initialPinchDistance;
      imgScale = Math.min(Math.max(1, initialScale * scaleFactor), 5);
      if (imgScale === 1) {
        imgTranslateX = 0;
        imgTranslateY = 0;
      }
      updateImageTransform();
    } else if (e.touches.length === 1 && isDragging && imgScale > 1) {
      imgTranslateX = e.touches[0].clientX - dragStartX;
      imgTranslateY = e.touches[0].clientY - dragStartY;
      updateImageTransform();
    }
  },
  { passive: false }
);

modalZoomArea.addEventListener('touchend', (e) => {
  if (e.touches.length < 2) {
    initialPinchDistance = 0;
  }
  if (e.touches.length === 0) {
    isDragging = false;
  }
});

initApp();
