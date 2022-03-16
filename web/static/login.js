



{//获取用户名
  const xhr = new XMLHttpRequest();
  // xhr.responseType = 'json';  
  xhr.open('GET', "http://127.0.0.1/userinfo");
  xhr.send();
  xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.response);
            if (xhr.response) {
              document.title = xhr.response;
              let left1username = document.querySelector('.left1username');
              left1username.innerHTML = xhr.response;              
            }
          }
      }
  }   
  
}





