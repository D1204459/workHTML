// 獲取到貨付款按鈕的參考
var cashOnDeliveryButton = document.getElementById('cash-on-delivery');
cashOnDeliveryButton.addEventListener('click', function() {
    // 彈出小視窗
    var popup = window.open('', '_blank', 'width=400,height=300');

    // 創建表單元素
    var form = document.createElement('form');
    popup.document.body.appendChild(form);

    // 添加收件人姓名輸入框
    var nameLabel = document.createElement('label');
    nameLabel.textContent = '收件人姓名:';
    form.appendChild(nameLabel);
    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));

    // 添加收件人地址輸入框
    var addressLabel = document.createElement('label');
    addressLabel.textContent = '收件人地址:';
    form.appendChild(addressLabel);
    var addressInput = document.createElement('input');
    addressInput.setAttribute('type', 'text');
    form.appendChild(addressInput);
    form.appendChild(document.createElement("br"));

    // 添加收件人手機號碼輸入框
    var phoneLabel = document.createElement('label');
    phoneLabel.textContent = '手機號碼:';
    form.appendChild(phoneLabel);
    var phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'text');
    form.appendChild(phoneInput);
    form.appendChild(document.createElement("br"));

    // 添加確認送出按鈕
    var submitButton = document.createElement('button');
    submitButton.textContent = '確認送出';
    submitButton.style.display = 'block';
    submitButton.style.margin = '20px auto';
    submitButton.addEventListener('click', function() {
        // 在此處添加確認送出的相應操作
        alert('訂單已送出');
        popup.close(); // 關閉小視窗
    });
    form.appendChild(submitButton);
});
// 類似地，您可以為信用卡付款和銀行轉帳按鈕添加類似的代碼。

// 獲取信用卡付款按鈕的參考
var creditCardButton = document.getElementById('credit-card');
creditCardButton.addEventListener('click', function() {
    // 彈出小視窗
    var popup = window.open('', '_blank', 'width=400,height=300');

    // 創建表單元素
    var form = document.createElement('form');
    popup.document.body.appendChild(form);

    // 添加信用卡號碼輸入框
    var cardNumberLabel = document.createElement('label');
    cardNumberLabel.textContent = '信用卡號碼:';
    form.appendChild(cardNumberLabel);
    var cardNumberInput = document.createElement('input');
    cardNumberInput.setAttribute('type', 'text');
    form.appendChild(cardNumberInput);
    form.appendChild(document.createElement("br"));

    // 添加信用卡日期輸入框
    var expirationLabel = document.createElement('label');
    expirationLabel.textContent = '有效期:';
    form.appendChild(expirationLabel);
    var expirationInput = document.createElement('input');
    expirationInput.setAttribute('type', 'text');
    form.appendChild(expirationInput);
    form.appendChild(document.createElement("br"));

    // 添加信用卡交易密碼輸入框
    var passwordLabel = document.createElement('label');
    passwordLabel.textContent = '交易密碼:';
    form.appendChild(passwordLabel);
    var passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    form.appendChild(passwordInput);
    form.appendChild(document.createElement("br"));

    // 添加確認送出按鈕
    var submitButton = document.createElement('button');
    submitButton.textContent = '確認送出';
    submitButton.style.display = 'block';
    submitButton.style.margin = '20px auto';
    submitButton.addEventListener('click', function() {
        // 在此處添加確認送出的相應操作
        alert('訂單已送出');
        popup.close(); // 關閉小視窗
    });
    form.appendChild(submitButton);
});

// 獲取銀行轉帳按鈕的參考
var bankTransferButton = document.getElementById('bank-transfer');
bankTransferButton.addEventListener('click', function() {
    // 彈出小視窗
    var popup = window.open('', '_blank', 'width=400,height=300');

    // 創建表單元素
    var form = document.createElement('form');
    popup.document.body.appendChild(form);

    // 添加收件人姓名輸入框
    var nameLabel = document.createElement('label');
    nameLabel.textContent = '收件人姓名:';
    form.appendChild(nameLabel);
    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));

    // 添加銀行帳號輸入框
    var accountLabel = document.createElement('label');
    accountLabel.textContent = '銀行帳號:';
    form.appendChild(accountLabel);
    var accountInput = document.createElement('input');
    accountInput.setAttribute('type', 'text');
    accountInput.value = '822 005665872471'; // 銀行帳號預設值
    form.appendChild(accountInput);
    form.appendChild(document.createElement("br"));

    // 添加收件人地址輸入框
    var addressLabel = document.createElement('label');
    addressLabel.textContent = '收件人地址:';
    form.appendChild(addressLabel);
    var addressInput = document.createElement('input');
    addressInput.setAttribute('type', 'text');
    form.appendChild(addressInput);
    form.appendChild(document.createElement("br"));

    // 添加收件人手機號碼輸入框
    var phoneLabel = document.createElement('label');
    phoneLabel.textContent = '手機號碼:';
    form.appendChild(phoneLabel);
    var phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'text');
    form.appendChild(phoneInput);
    form.appendChild(document.createElement("br"));

    // 添加確認送出按鈕
    var submitButton = document.createElement('button');
    submitButton.textContent = '確認送出';
    submitButton.style.display = 'block';
    submitButton.style.margin = '20px auto';
    submitButton.addEventListener('click', function() {
        // 在此處添加確認送出的相應操作
        alert('訂單已送出');
        popup.close(); // 關閉小視窗
    });
    form.appendChild(submitButton);
});
