// 取客服人員
const customerService = document.querySelector('.customerService');
// 取使用者設定
const userSettings = document.querySelector('.userSettings');
// 點擊按鈕顯示區塊事件
customerService.addEventListener('click', function(e){
    userSettings.classList.toggle('active');
});
// 點擊文檔其他地方隱藏區塊事件
document.addEventListener('click', function(event) {
    if (!customerService.contains(event.target) && !userSettings.contains(event.target)) {
    userSettings.classList.remove('active');
    }
});


// 取業務對話系統
const businessDialogueSystem = document.querySelector('.businessDialogueSystem');
// 取業務對話系統
const informationField = document.querySelector('.informationField');
// line按鈕事件（漢堡
const lineBtn = document.querySelector('.lineBtn');
lineBtn.addEventListener('click' ,(e) => {
    e.preventDefault();
    // console.log('測試123');
    businessDialogueSystem.classList.toggle('active');
    informationField.classList.toggle('zoomInOrOut');
});


// 取對話系統選項
const businessDialogueSystemBox = document.querySelector('.businessDialogueSystemBox');
// 業務對話系統按鈕事件
const businessDialogueSystemBtn = document.querySelector('.businessDialogueSystemBtn');
businessDialogueSystemBtn.addEventListener('click', function(e){
    e.preventDefault();
    // 取消聚焦
    businessDialogueSystemBtn.blur();

    businessDialogueSystemBtn.classList.toggle('active');
    businessDialogueSystemBox.classList.toggle('hide');
    // console.log('測試456');
});


// 方向感知 按鈕 波紋效果 搭配css
const direction = document.querySelectorAll('.direction');
direction.forEach((btn) => {
    btn.addEventListener('click', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.classList.add('spanBox');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
});


// 登出按鈕
const signOut = document.getElementById('signOut');
signOut.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('點擊後登出');
});