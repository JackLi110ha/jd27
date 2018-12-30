var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1000,
        //到最后一张停止自动轮播图 但是loop了后就停不下来了
        stopOnLastSlide: true,
        // 是否要当触摸的时候禁止自动轮播图  ture就禁止 false不禁止
        disableOnInteraction: false,
    },
    //如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

//倒计时
var sp=document.getElementsByClassName("sp");
var v1=parseInt(sp[0].innerHTML);
var v2=parseInt(sp[1].innerHTML);
var v3=parseInt(sp[2].innerHTML);
var v4=parseInt(sp[3].innerHTML);
var v5=parseInt(sp[4].innerHTML); //0-6
var v6=parseInt(sp[5].innerHTML); //0-9


var timeID=setInterval(function(){
    if((v1+v2+v3+v4+v5+v6) == 0){
        clearInterval(timeID);
        v1=0;
        v2=0;
        v3=0;
        v4=0;
        v5=0;
        v6=0;
        return ;
    }

    v6--;
    if(v6<0){
        v6=9;
        v5--;
    }
    if(v5<0){
        v5=5;
        v4--;
    }
    if(v4<0){
        v4=9;
        v3--;
    }
    if(v3<0){
        v3=5;
        v2--;
        
    }
    if(v2<0){
        if(v1==0&&v2!=0){
            v1--;
        }
        
    }
    if(v1==0){
        v1=0;
    }
    sp[5].innerHTML=v6;
    sp[4].innerHTML=v5;
    sp[3].innerHTML=v4;
    sp[2].innerHTML=v3;
    sp[1].innerHTML=v2;
    sp[0].innerHTML=v1;
    
},100);

