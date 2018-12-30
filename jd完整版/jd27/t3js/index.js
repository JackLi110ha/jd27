window.addEventListener('load',function(){
    //设置顶部滚动渐变事件
    var banner=document.querySelector("#banner");
    var header=document.querySelector("#header");
    window.addEventListener('scroll',function(){
        //滚出去的高度做兼容处理
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var opacity=scrollTop/banner.offsetWidth;
        header.style.backgroundColor="rgb(222, 24, 27,"+opacity+")";
    });
    //倒计时效果
    var time=7200;
    var span=document.querySelectorAll(".killTime span:not(:nth-child(3n))");


    setInterval(function(){
        getTime();
        time--;
    },1000);
    function getTime(){
        if(time==0){
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
    //swiper效果
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay:1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
       
        
      })        
});