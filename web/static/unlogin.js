{//login
  let loginClose = document.querySelector('.loginClose');
  let loginPage = document.querySelector('.loginPage');
  let LoginBtn = document.querySelector('.right1LoginBtn');
  let navLoginBtn = document.querySelector('.navLoginBtn');
  loginClose.addEventListener('click', () => {
      loginPage.style.display = 'none';
  })
  LoginBtn.addEventListener('click', () => {
      loginPage.style.display = 'flex';        
  })
  navLoginBtn.addEventListener('click', () => {
      loginPage.style.display = 'flex';        
  })    

  let toLogin = document.querySelector('.toLogin');
  let toRegister = document.querySelector('.toRegister');
  let loginForm = document.querySelector('.loginForm');
  let registerForm = document.querySelector('.registerForm');
  toLogin.addEventListener('click', () => {
      toLogin.style.color = 'rgb(6, 199, 6)';
      toLogin.style.borderBottom = '2px solid rgb(6, 199, 6)';
      toRegister.style.color = 'rgb(136, 136, 136)';
      toRegister.style.borderBottom = '2px solid rgb(136, 136, 136)';
      registerForm.style.display = 'none';        
      loginForm.style.display = 'flex';
  })

  toRegister.addEventListener('click', () => {
      toRegister.style.color = 'rgb(6, 199, 6)';
      toRegister.style.borderBottom = '2px solid rgb(6, 199, 6)';
      toLogin.style.color = 'rgb(136, 136, 136)';
      toLogin.style.borderBottom = '2px solid rgb(136, 136, 136)';
      loginForm.style.display = 'none';        
      registerForm.style.display = 'flex';
  })    
}



{//注册
  let registerId = document.querySelector('.registerId');
  let registerPw = document.querySelector('.registerPw');
  let registerSubmit = document.querySelector('.registerSubmit');
  let registerAlert = document.querySelector('.registerAlert');
  registerSubmit.addEventListener('click', () => {
      if ( !registerId.value  ) {
          registerAlert.innerHTML = '请输入要注册的用户名';
          return;
      }
      else if (!registerPw.value) {
          registerAlert.innerHTML = '请输入密码';     
          return;
      }

      if ( registerId.value  ) {
          registerAlert.innerHTML = '';
      }
      else if (registerPw.value) {
          registerAlert.innerHTML = '';            
      }        
      const username = registerId.value;
      const password = registerPw.value;
      const xhr = new XMLHttpRequest();
      // xhr.responseType = 'json';
      xhr.open('POST', "http://127.0.0.1/register?username="+username+"&password="+password);
      xhr.send();
      xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status < 300) {
                  registerAlert.innerHTML = xhr.response;
                  setTimeout(() => {
                      registerAlert.innerHTML = "";
                  },3000)

              }
          }
      }   
  })


}


var token;
{//登录
  let loginId = document.querySelector('.loginId');
  let loginPw = document.querySelector('.loginPw');
  let loginSubmit = document.querySelector('.loginSubmit');
  let loginAlert = document.querySelector('.loginAlert');
  loginSubmit.addEventListener('click', () => {
      if ( !loginId.value  ) {
          loginAlert.innerHTML = '请输入用户名';
          return;
      }
      else if (!loginPw.value) {
          loginAlert.innerHTML = '请输入密码';     
          return;
      }

      if ( loginId.value  ) {
          loginAlert.innerHTML = '';
      }
      else if (loginPw.value) {
          loginAlert.innerHTML = '';            
      }        
      const username = loginId.value;
      const password = loginPw.value;
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', "http://127.0.0.1/login?username="+username+"&password="+password);
      xhr.send();
      xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status < 300) {
                  loginAlert.innerHTML = xhr.response.message;
                  if (xhr.response.message == "登录成功") {
                      token = xhr.response.token;
                      console.log(token);
                      setTimeout(() => {
                          loginAlert.innerHTML = "";

                          const xhr2 = new XMLHttpRequest();
                          xhr2.open('GET', "http://127.0.0.1/loginjump");
                          xhr2.setRequestHeader('Authorization', 'Bearer '+ token);
                          xhr2.send();
                          xhr2.onreadystatechange = () => {
                              if (xhr2.readyState === 4) {
                                  if (xhr2.status >= 200 && xhr2.status < 300) {
                                      location.href = xhr2.response;
                                  }
                              }
                          }
                      }, 1500)                        
                  }
                  else {
                      setTimeout(() => {
                          loginAlert.innerHTML = "";

                      }, 1500)                          
                  }

                  

              }
          }
      }   
  })


}




{//换肤
  let changeSikn = document.querySelector('.changeskin');
  let flag = 0;
  window.onload = function () {
      changeSikn.addEventListener('click', () => {
          let root = document.documentElement;
          let hzd = document.querySelectorAll('.main2 img');
          let logo = document.querySelector('.header .logo');

          if (flag == 0) {
              root.style.setProperty('--title', 'white');      
              root.style.setProperty('--text1', 'rgb(190, 190, 190)');      
              root.style.setProperty('--text2', 'rgb(122, 122, 122)');      
              root.style.setProperty('--subtitle', 'rgb(228, 156, 63)');      
              root.style.setProperty('--subtext', 'rgb(73, 73, 73)');      
              root.style.setProperty('--background', 'rgb(0, 0, 0)');      
              root.style.setProperty('--box', 'rgb(31, 31, 31)');     
              root.style.setProperty('--subyellow', 'rgb(39, 31, 13)');     
              root.style.setProperty('--menuitem', 'rgba(65, 64, 64, 0.58)');     
              root.style.setProperty('--shadow', 'rgb(40, 40, 40)');     
              root.style.setProperty('--tenboxshadow', 'rgb(22, 22, 22)');     
              for (let i = 0; i < hzd.length; i++){
                  hzd[i].src = "images/hzd3.png";
              }
              logo.src = 'images/logo2.png';

              flag = 1;
          }
          else if (flag == 1) {
              root.style.setProperty('--title', 'black');      
              root.style.setProperty('--text1', 'rgb(126, 126, 126)');      
              root.style.setProperty('--text2', 'rgb(172, 172, 172)');      
              root.style.setProperty('--subtitle', 'rgb(228, 156, 63)');      
              root.style.setProperty('--subtext', 'rgb(228, 228, 228)');      
              root.style.setProperty('--subyellow', 'rgb(255, 243, 211)');      
              root.style.setProperty('--background', 'rgb(245, 245, 245)');      
              root.style.setProperty('--box', 'white');    
              root.style.setProperty('--shadow', 'rgba(179, 179, 179, 0.349)');     
              root.style.setProperty('--tenboxshadow', 'rgb(226, 225, 225)');     
              root.style.setProperty('--menuitem', 'rgba(235, 235, 235, 0.58)');    
              for (let i = 0; i < hzd.length; i++){
                  hzd[i].src = "images/hzd.png";
              }
              logo.src = 'images/logo.png';

              flag = 0;            
          }

      })        
  }


}