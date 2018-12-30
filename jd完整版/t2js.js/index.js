window.addEventListener('load',function(){
    //监听屏幕滚动事件
    window.onscroll=function(){
        var header=document.getElementById("slide");
        var header=document.getElementById("header");
        
        var opacity=document.documentElement.scrollTop || document.body.scrollTop /200;
        //根据182的值给背景颜色添加清晰度 #de181b
        header.style.backgroundColor="rgba(222,24,27,"+opacity+")";
    }

    var span=document.querySelectorAll(".setKill span:not(:nth-child(3n))");
    

    //倒计时事件
    var time=7200;
    setTime();
    setInterval(function(){
        setTime();
        time--;
    },1000);

    function setTime(){
        if(time<=0){
            time=7200;
        }
        
        var h=Math.floor(time/60/60);
        var m=Math.floor(time%3600/60);
        var s=Math.floor(time%60);
        span[0].innerHTML=Math.floor(h/10);
        span[1].innerHTML=Math.floor(h%10);
        span[2].innerHTML=Math.floor(m/10);
        span[3].innerHTML=Math.floor(m%10);
        span[4].innerHTML=Math.floor(s/10);
        span[5].innerHTML=Math.floor(s%10);
    }

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            }
       
    })       
   
  
});


