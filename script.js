function updateLoanDetails() {
    var loanAmount = document.getElementById("loanSlider").value;
    
    // 自定義的計算邏輯
    var loanTerm, interestRate;

    // 設定金額區間的對應邏輯
    if (loanAmount <= 20000) {
        loanTerm = 12;  // 貸款金額 <= 20000 時，分期付款期限為 12 月
        interestRate = 5.0;  // 年利率為 5%
    } else if (loanAmount <= 40000) {
        loanTerm = 18;  // 貸款金額 20001-40000 時，分期付款期限為 18 月
        interestRate = 7.0;  // 年利率為 7%
    } else {
        loanTerm = 24;  // 貸款金額 > 40000 時，分期付款期限為 24 月
        interestRate = 9.0;  // 年利率為 9%
    }

    // 根據貸款金額和分期付款期限計算每月還款
    var monthlyRepayment = (loanAmount / loanTerm).toFixed(1);

    // 更新頁面上的數值
    document.getElementById("loanAmount").innerText = loanAmount;
    document.getElementById("loanTerm").innerText = loanTerm + " 月";
    document.getElementById("interestRate").innerText = interestRate + "%";
    document.getElementById("monthlyRepayment").innerText = monthlyRepayment;

    // 動態更新滑動條的背景
    var slider = document.getElementById("loanSlider");
    var value = (loanAmount - slider.min) / (slider.max - slider.min) * 100;  // 計算已滑過的百分比
    slider.style.background = `linear-gradient(to right, #4e79d4 ${value}%, #e0e0e0 ${value}%)`;
}
