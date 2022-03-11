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
                a[k].style.color='black';
                b[k-1].style.color='rgb(146, 146, 146)';
            })     
        }
        else {
            item[j].addEventListener('mouseover',()=>{
                a[k-1].style.color='#00c758';
                b[k-2].style.color='#00c758';
            })    
            item[j].addEventListener('mouseout',()=>{
                a[k-1].style.color='black';
                b[k-2].style.color='rgb(146, 146, 146)';
            })                 
        }
             
    }

}

{//编辑推荐
    let bigbox = document.querySelector('.main3contenter');
    console.log(bigbox.offsetLeft)
    let left = document.querySelector('.beforemain3')
    let right = document.querySelector('.aftermain3')
    left.addEventListener('click',()=>{
        if(bigbox.offsetLeft <= -1220){
            let timer1 = setInterval(()=>{
                if(bigbox.offsetLeft >= -20){
                    clearInterval(timer1);
                }
                bigbox.style.left = bigbox.offsetLeft + 20 + 'px'
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
        menubtntext.style.color = 'black';
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






