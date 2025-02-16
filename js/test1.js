// 帳號
const emailaddress = document.getElementById('emailaddress');
// 密碼
const password = document.getElementById('password');
// 獲取勾選框元素
const checkbox = document.getElementById('remember-account');
// 送出按鈕
const BBtn = document.querySelector('.btn-text-custom-Purple');

// 檢查 localStorage 是否有記住帳號的標記和帳號資訊
const rememberAccount = localStorage.getItem('rememberAccount');//使用localStorage.getItem方法來獲取存儲的資料key ，(rememberAccount)是自己定義的key
const savedEmail = localStorage.getItem('savedEmail');

// 如果 'rememberAccount' 在 localStorage 中是 'true'，代表用戶之前勾選了「記住我」
if (rememberAccount === 'true') {
  // 將「記住我」勾選框設為選中狀態
  checkbox.checked = true;

  // 如果有保存的電子郵件（即 'savedEmail' 不為 null），則自動填入帳號欄位
  if (savedEmail) {
    emailaddress.value = savedEmail; // 將保存的帳號資訊填入帳號欄位
  }
}

// 點擊事件
BBtn.addEventListener('click', function(e){
  // 防止按下送出按鈕後表單的預設行為（例如頁面刷新）
  e.preventDefault();
  
  if(emailaddress.value.trim().replace(/\s*/g,'') === '' || password.value.trim().replace(/\s*/g,'') === ''){
    Swal.fire({
      title: "请输入帳號和密碼",// 提示信息
      icon: "error",// 顯示錯誤圖標
      // 確認
      showConfirmButton: false,// 不顯示確認按鈕
      confirmButtonColor:"#9ccee7",// 確認按鈕顏色
      confirmButtonText:"確定刪除",// 確認按鈕文本
      // 取消
      showCancelButton: false,// 不顯示取消按鈕
      cancelButtonColor:"#fe7f7f",// 取消按鈕顏色
      cancelButtonText:"取消",// 取消按鈕文本
      // 自動關閉
      timer: 1500,// 1.5秒後自動關閉提示框
    });        
  }

  // 如果勾選了「記住我」，則將標記和帳號信息保存到 localStorage
  if (checkbox.checked) {
    // 儲存「記住我」標記為 'true'
    localStorage.setItem('rememberAccount', 'true');
    // 儲存帳號資訊（去除多餘的空白字符）
    localStorage.setItem('savedEmail', emailaddress.value.trim().replace(/\s*/g,''));
  } else {
    // 如果沒勾選「記住我」，則清除 localStorage 中保存的帳號資訊
    localStorage.removeItem('rememberAccount');
    localStorage.removeItem('savedEmail');
  }

  // 清空帳號和密碼欄位
  emailaddress.value = '';
  password.value = '';
});
