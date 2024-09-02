// 帳號
const emailaddress = document.getElementById('emailaddress');
// 密碼
const password = document.getElementById('password');
// 獲取勾選框元素
const checkbox = document.getElementById('remember-account');
// 送出按鈕
const BBtn = document.querySelector('.btn-text-custom-Purple');

// 檢查 localStorage 是否有記住帳號的標記和帳號資訊
const rememberAccount = localStorage.getItem('rememberAccount');
const savedEmail = localStorage.getItem('savedEmail');

if (rememberAccount === 'true') {
  checkbox.checked = true;
  if (savedEmail) {
    emailaddress.value = savedEmail; // 將保存的帳號資訊填入帳號欄位
  }
}

// 點擊事件
BBtn.addEventListener('click', function(e){
  e.preventDefault();
  if(emailaddress.value.trim().replace(/\s*/g,'') === '' || password.value.trim().replace(/\s*/g,'') === ''){
    Swal.fire({
      title: "请输入帳號和密碼",
      icon: "error",
      // 確認
      showConfirmButton: false,
      confirmButtonColor:"#9ccee7",
      confirmButtonText:"確定刪除",
      // 取消
      showCancelButton: false,
      cancelButtonColor:"#fe7f7f",
      cancelButtonText:"取消",
      // 自動關閉
      timer: 1500,
    });        
  }

  // 如果勾選了「記住我」，則將標記和帳號信息保存到 localStorage
  if (checkbox.checked) {
    localStorage.setItem('rememberAccount', 'true');
    localStorage.setItem('savedEmail', emailaddress.value.trim().replace(/\s*/g,''));
  } else {
    localStorage.removeItem('rememberAccount');
    localStorage.removeItem('savedEmail');
  }
  
  emailaddress.value = '';
  password.value = '';
});
