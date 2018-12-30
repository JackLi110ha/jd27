window.addEventListener('load',function(){
     //左边侧栏 
    new Swiper('.content-left .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        
    });
    //右边侧栏
   new Swiper('.content-right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,

    });


    //左边侧栏点击事件
    var liList=document.querySelectorAll(".content-left li");
    var wrapper=document.querySelector(".swiper-wrapper");
    var container=document.querySelector(".swiper-container");
    var slide=document.querySelector(".swiper-slide");
    
    var liHeight=liList[0].offsetHeight;
    //父盒子高度
    var parent=container.offsetHeight;
    //子盒子高度
    var children=slide.offsetHeight;
    //获取超出距离
    var getLength=parent-children;

    console.log(getLength);

    for(var i=0;i<liList.length;i++){
        //触摸开始
        //liList[i].setAttribute("index",i);
        liList[i].dataset['index']=i;
        liList[i].onclick=function(){
            
            //获取点击距离顶部的距离
            var length1=-(this.dataset['index']*liHeight);

            //不能超出边界
            // console.log(maxHeight);
            if(length1<getLength){
                length1=getLength;
            }

            wrapper.style.transform="translateY("+length1+"px)";
            wrapper.style.transition="all 0.2s";
            // transition: all 1s;
            for(var i=0;i<liList.length;i++){
                liList[i].classList.remove('active');
            }
            this.classList.add('active');

        }
    }
    
});
