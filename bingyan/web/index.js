{//轮播图

let goleft = document.querySelector('.goleft')
let goright = document.querySelector('.goright')
let imgitem = document.querySelectorAll('.item')
let mid1 = document.querySelector('.mid1')
let dianbtn = document.querySelectorAll('.dian');

let index =0;
let time=0;

function clearzindex(){
    for(let i=0;i<4;i++){
        imgitem[i].className='item';
        dianbtn[i].className = 'dian';
    }
}

mid1.addEventListener('mouseover',function(){
    goleft.style.display='block';
    goright.style.display='block';
})
mid1.addEventListener('mouseout',function(){
    goleft.style.display='none';
    goright.style.display='none';
})


goright.addEventListener('click', function(){
    clearzindex();
    if(index == 3){
        index = 0;
    }
    else {
        index++;        
    }
    dianbtn[index].className = 'dian dianactive';
    imgitem[index].className = 'item itemontop';
    time=0;
})


goleft.addEventListener('click', function(){
    clearzindex();
    if(index == 0){
        index = 3;
    }
    else {
        index--;        
    }
    dianbtn[index].className = 'dian dianactive';
    imgitem[index].className = 'item itemontop';
    time=0;
})

for(let i=0;i<4;i++){
    dianbtn[i].addEventListener('click',function(){
        clearzindex();
        let datai = this.getAttribute('data-i');
        dianbtn[datai].className='dian dianactive';
        imgitem[datai].className='item itemontop';
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
    imgitem[index].className = 'item itemontop';
    dianbtn[index].className = 'dian dianactive';    
}

setInterval(function(){
    time++;
    if(time == 30){
        gonext();
        time=0;        
    }


},100)

}


{//left1
    let lookmore = document.querySelector('.lookmore');
    let more  = document.querySelector('.more');
    let much = document.querySelector('.much');
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
    for(let j=0;j<item.length;j++){
        let k=j;
        if(j<10){
            item[j].addEventListener('mouseover',()=>{
                a[k].style.color='#00c758';
            })    
            item[j].addEventListener('mouseout',()=>{
                a[k].style.color='black';
            })               
        }
        else {
            item[j].addEventListener('mouseover',()=>{
                a[k-1].style.color='#00c758';
            })    
            item[j].addEventListener('mouseout',()=>{
                a[k-1].style.color='black';
            })                 
        }
             
    }

}












