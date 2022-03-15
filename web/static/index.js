//推荐的渲染
{
    let main3contenter = document.querySelector('.main3contenter');
  
    //请求数据
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', "http://127.0.0.1/table1");
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              console.log(xhr.response);
              for (let i = 0; i < xhr.response.length; i++){
                var tenbox = document.createElement('div');
                var img = document.createElement('img');
                var tenboxtext = document.createElement('div');
                var th3 = document.createElement('h3');
                var tp1 = document.createElement('p');
                var tp2 = document.createElement('p');
                var tdiv = document.createElement('div');
                tenbox.className = 'tenbox';
                tenboxtext.className = 'tenboxtext';
                th3.className = 'th3';
                tp1.className = 'tp1';
                tp2.className = 'tp2';
                tdiv.className = 'tdiv';
                img.src = xhr.response[i].url;
                th3.innerHTML = xhr.response[i].title;
                tp1.innerHTML = xhr.response[i].text1;
                tp2.innerHTML = xhr.response[i].text2;
                tdiv.innerHTML = xhr.response[i].text3;
  
                main3contenter.appendChild(tenbox);
                tenbox.appendChild(img);
                tenbox.appendChild(tenboxtext);
                tenboxtext.appendChild(th3);
                tenboxtext.appendChild(tp1);
                tenboxtext.appendChild(tp2);
                tenboxtext.appendChild(tdiv);
  
                }
  
            }
        }
    }     
  
  }
  
  {//排行的渲染
    let contentSheet = document.querySelectorAll('.contentSheet');
    //请求数据
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', "http://127.0.0.1/table2");
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              console.log(xhr.response);
              for (let j = 0; j < contentSheet.length; j++){
                for (let i = 0; i < xhr.response.length; i++){
                  var contentItem = document.createElement('div');
                  var number = document.createElement('div');
                  var pic4 = document.createElement('img');
                  var itemtext4 = document.createElement('div');
                  var h3 = document.createElement('h3');
                  var p1 = document.createElement('p');
                  var p2 = document.createElement('p');
                  contentItem.className = 'contentItem';
                  number.className = 'number';
                  pic4.className = 'pic4';
                  itemtext4.className = 'itemtext4';
  
                  number.innerHTML = xhr.response[i].id;
                  let src = "/images/main4pic.png";
                  pic4.src = src;
                  h3.innerHTML = xhr.response[i].title;
                  p1.innerHTML = xhr.response[i].text1;
                  p2.innerHTML = xhr.response[i].text2;
  
                  contentSheet[j].appendChild(contentItem);
                  contentItem.appendChild(number);
                  contentItem.appendChild(pic4);
                  contentItem.appendChild(itemtext4);
                  itemtext4.appendChild(h3);
                  itemtext4.appendChild(p1);
                  itemtext4.appendChild(p2);
                }              
              }
  
  
            }
        }
    }     
  
  
  }
  
  




{//轮播图

let goLeft = document.querySelector('.goLeft')
let goRight = document.querySelector('.goRight')
let imgItem = document.querySelectorAll('.item')
let mid1 = document.querySelector('.mid1')
let dianbtn = document.querySelectorAll('.point');
let arrow1 = document.querySelector('.arrow1')
let arrow2 = document.querySelector('.arrow2')

let index =0;
let time=0;

function clearzindex(){
    for(let i=0;i<4;i++){
        imgItem[i].className='item';
        dianbtn[i].className = 'point';
    }
}

mid1.addEventListener('mouseover',function(){
    goLeft.style.display='block';
    goRight.style.display='block';
    arrow1.style.display='block';
    arrow2.style.display='block';

})
mid1.addEventListener('mouseout',function(){
    goLeft.style.display='none';
    goRight.style.display='none';
    arrow1.style.display='none';
    arrow2.style.display='none';
})


goRight.addEventListener('click', function(){
    clearzindex();
    if(index == 3){
        index = 0;
    }
    else {
        index++;        
    }
    dianbtn[index].className = 'point pointactive';
    imgItem[index].className = 'item itemontop';
    time=0;
})


goLeft.addEventListener('click', function(){
    clearzindex();
    if(index == 0){
        index = 3;
    }
    else {
        index--;        
    }
    dianbtn[index].className = 'point pointactive';
    imgItem[index].className = 'item itemontop';
    time=0;
})

for(let i=0;i<4;i++){
    dianbtn[i].addEventListener('click',function(){
        clearzindex();
        let datai = this.getAttribute('data-i');
        dianbtn[datai].className='point pointactive';
        imgItem[datai].className='item itemontop';
        time=0;
    })

}

function gonext(){
    clearzindex();
    if(index == 3){
        index = 0;
    }
    else {
        index++;        
    }
    imgItem[index].className = 'item itemontop';
    dianbtn[index].className = 'point pointactive';    
}

setInterval(function(){
    time++;
    if(time == 40){
        gonext();
        time=0;        
    }


},100)

}



{//left1
    let lookmore = document.querySelector('.lookmore');
    let more  = document.querySelector('.extend');
    let much = document.querySelector('.fullList');
    let left1 = document.querySelector('.left1');

    lookmore.addEventListener('mouseover',()=>{
        lookmore.style.display='none';
        more.style.display='block';

    })

    left1.addEventListener('mouseout',()=>{
        lookmore.style.display='block';            
        more.style.display='none';   

    })

    more.addEventListener('mouseover',()=>{
        lookmore.style.display='none';
        more.style.display='block';            

    })

    let item = document.querySelectorAll('.left1item');
    let a = document.querySelectorAll('.left1item .a1');
    let b = document.querySelectorAll('.left1item .a2');

    for(let j=0;j<item.length;j++){
        let k=j;
        if(j<10){
            item[j].addEventListener('mouseover',()=>{
                a[k].style.color = '#00c758';
                b[k-1].style.color = '#00c758';
                
            })    
            item[j].addEventListener('mouseout',()=>{
                a[k].style.color='var(--title, black)';
                b[k-1].style.color='var(--text1, rgb(133, 133, 133))';
            })     
        }
        else {
            item[j].addEventListener('mouseover',()=>{
                a[k-1].style.color='#00c758';
                b[k-2].style.color='#00c758';
            })    
            item[j].addEventListener('mouseout',()=>{
                a[k-1].style.color='var(--title, black)';
                b[k-2].style.color='var(--text1, rgb(133, 133, 133))';
            })                 
        }
             
    }

}

{//编辑推荐
    let bigbox = document.querySelector('.main3contenter');
    let left = document.querySelector('.beforemain3')
    let right = document.querySelector('.aftermain3')
    left.addEventListener('click',()=>{
        if(bigbox.offsetLeft <= -1220){
            let timer1 = setInterval(()=>{
                if(bigbox.offsetLeft >= -20){
                    clearInterval(timer1);
                }
                bigbox.style.left = bigbox.offsetLeft + 20 + 'px';
            },1)
            left.style.display='none';
            right.style.display='block';
        }
    })

    right.addEventListener('click',()=>{
        if(bigbox.offsetLeft >= 0){           
            let timer2 = setInterval(()=>{
                if(bigbox.offsetLeft<=-1200){
                    clearInterval(timer2);
                }
                bigbox.style.left = bigbox.offsetLeft + -20 + 'px';
                i--;
            },1)
            right.style.display='none';
            left.style.display='block';
        }
    })


}


{//nav menu
    let bannerbtn = document.querySelector('.bannerbtn');
    let banner = document.querySelector('.banner');
    let menu = document.querySelector('.menu');
    let menubtn = document.querySelector('.menubtn');
    let menubtntext = document.querySelector('.menubtn a');
    let menubtnIcon = document.querySelector('.menubtn div')
    bannerbtn.addEventListener('mouseover', () => {
        banner.style.display = 'block';
    })
    bannerbtn.addEventListener('mouseout', () => {
        banner.style.display = 'none';
    })    
    banner.addEventListener('mouseover', () => {
        banner.style.display = 'block';
    })
    banner.addEventListener('mouseout', () => {
        banner.style.display = 'none';
    })

    menubtn.addEventListener('mouseover', () => {
        menu.style.display = 'block';
        menubtnIcon.className = 'menubtnActive';
        menubtntext.style.color = '#00db63';
    })
    menubtn.addEventListener('mouseout', () => {
        menu.style.display = 'none';
        menubtnIcon.className = 'menubtnUnactive';    
        menubtntext.style.color = 'var(--title, black)';
    })    
    menu.addEventListener('mouseover', () => {
        menu.style.display = 'block';

    })
    menu.addEventListener('mouseout', () => {
        menu.style.display = 'none';
        menubtnIcon.className = 'menubtnUnactive';
    })
    menu.addEventListener('mouseover', () => {
        menu.style.display = 'block';
        menubtnIcon.className = 'menubtnActive';
    })
    menubtnIcon.addEventListener('mouseover', () => {
        menubtntext.style.color = '#00db63';
    })
    menubtnIcon.addEventListener('mouseout', () => {
        menubtntext.style.color = 'black';
    })
}

{//搜索
    let searchContent = document.querySelector('.search');
    let searchPop = document.querySelector('.searchpop');
    let searchPoplist = document.querySelector('.searchpop ul');
    let searchPopFirstItem = document.querySelector('.searchpopfirstitem');
    let searchPopFirstItemSpan = document.querySelector('.searchpopfirstitem span');

    searchContent.addEventListener('focus', () => {
        let timer = null;
        searchContent.oninput = () => {
            searchPop.style.display = 'block';
            let searchText = searchContent.value;
            searchPopFirstItemSpan.innerHTML = searchText;
            clearTimeout(timer);

            if (searchContent.value == '') {
                searchPop.style.display = 'none';
            }

            timer = setTimeout(() => {//延时发送 避免按得太快爆掉
                let deleteItem = document.querySelectorAll('.searchpopitem');
                for (let i = 0; i < deleteItem.length; i++){
                    if (deleteItem[i] != null) {
                        deleteItem[i].parentNode.removeChild(deleteItem[i]);
                    }
                }
                // ajax
                if (searchText != '') {
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'json';
                    xhr.open('GET', "http://127.0.0.1/search?value="+searchText);
                    xhr.send();
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                console.log(xhr.response.length);
                                for (let i = 0; i < xhr.response.length; i++){
                                    var item = document.createElement('li');
                                    item.className = 'searchpopitem';
                                    item.innerHTML = xhr.response[i].text;
                                    searchPoplist.appendChild(item);
                                }

                            }
                        }
                    }   
                    
                }                

            }, 400);

        }

    })

    searchContent.addEventListener('blur', () => {
        searchPop.style.display = 'none';
        let deleteItem = document.querySelectorAll('.searchpopitem');
        for (let i = 0; i < deleteItem.length; i++){
            if (deleteItem[i] != null) {
                deleteItem[i].parentNode.removeChild(deleteItem[i]);
            }
        }

    })  
    

}







{//回到顶部
    let toTopBtn = document.querySelector('.sb3');
    let sidebottomTop = document.querySelector('.sidebottomTop');
    let sbcontentTop = document.querySelector('.sbcontentTop');
    window.onscroll = () => {
        let scrollDis = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollDis > 10) {
            toTopBtn.style.display = 'block';
            sidebottomTop.className = 'sidebottom';
            sbcontentTop.className = 'sbcontent';

        }
        else {
            toTopBtn.style.display = 'none';   
            sidebottomTop.className = 'sidebottomTop';            
            sbcontentTop.className = 'sbcontentTop';      
        }
    }

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    })




}



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

{//本周课程安排
    let goLeft = document.querySelectorAll('.main4goLeft');
    let goRight = document.querySelectorAll('.main4goRight');
    let contentSheet = document.querySelectorAll('.contentSheet');
    let main4mid = document.querySelectorAll('.main4mid');
    for (let i = 0; i < 3; i++){

        main4mid[i].addEventListener('mouseover', () => {
            if (contentSheet[i].offsetLeft <= -387 && contentSheet[i].offsetLeft >=-1548) {
                goLeft[i].style.display = 'flex';
            }
            if (contentSheet[i].offsetLeft >= -1161 && contentSheet[i].offsetLeft <=0) {
                goRight[i].style.display = 'flex'; 
            }

        })        

        goRight[i].addEventListener('click', () => {
            let beforeCoord = contentSheet[i].offsetLeft;        

            if (contentSheet[i].offsetLeft <= -1161) {
                goRight[i].style.display = 'none';
            }
            if (contentSheet[i].offsetLeft <= 0) {
                goLeft[i].style.display = 'flex';            
            }
            let rightTimer = setInterval(() => {
                if (contentSheet[i].offsetLeft <= beforeCoord - 378) {
                    clearTimeout(rightTimer);
                }
                contentSheet[i].style.left = contentSheet[i].offsetLeft + -9 + 'px';
            }, 1)

            goRight[i].disabled = 'disabled';  //防止按太快了飞走  
            setTimeout(() => {
                goRight[i].disabled = ''; 
            },200)

        })

        goLeft[i].addEventListener('click', () => {
            let beforeCoord = contentSheet[i].offsetLeft;        

            if (contentSheet[i].offsetLeft >= -387) {
                goLeft[i].style.display = 'none';
            }
            if (contentSheet[i].offsetLeft <= -1161) {
                goRight[i].style.display = 'flex';            
            }
            let leftTimer = setInterval(() => {
                if (contentSheet[i].offsetLeft >= beforeCoord + 378) {
                    clearTimeout(leftTimer);
                }
                contentSheet[i].style.left = contentSheet[i].offsetLeft + 9 + 'px';
            }, 1)

            goLeft[i].disabled = 'disabled';    
            setTimeout(() => {
                goLeft[i].disabled = ''; 
            },200)
        })  

        main4mid[i].addEventListener('mouseout', () => {
            goLeft[i].style.display = 'none';
            goRight[i].style.display = 'none';
        })

    }

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
        // xhr.responseType = 'json';
        xhr.open('POST', "http://127.0.0.1/login?username="+username+"&password="+password);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    loginAlert.innerHTML = xhr.response;
                    if (xhr.response == "登录成功") {
                        setTimeout(() => {
                            loginAlert.innerHTML = "";
                            // 跳到新页面
                            location.href = 'userpage.html';
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
    changeSikn.addEventListener('click', () => {
        let root = document.documentElement;
        let hzd = document.querySelectorAll('.main2 img');
        let logo = document.querySelector('.header .logo');
        let sb1 = document.querySelector('.sb1 p img');
        let sb2 = document.querySelector('.sb2 p img');
        let sb3 = document.querySelector('.sb3 a img');

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
            flag = 1;
            for (let i = 0; i < hzd.length; i++){
                hzd[i].src = "images/hzd3.png";
            }
            logo.src = 'images/logo2.png';
            sb1.src = 'images/fankui2.png';
            sb2.src = 'images/xiazai2.png';
            sb3.src = 'images/dingbu2.png';
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
            flag = 0;
            for (let i = 0; i < hzd.length; i++){
                hzd[i].src = "images/hzd.png";
            }
            logo.src = 'images/logo.png';
            sb1.src = 'images/fankui.png';
            sb2.src = 'images/xiazai.png';
            sb3.src = 'images/dingbu.png';
        }

    })

}