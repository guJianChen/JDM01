window.onload=function () {
  //倒计时模块
  (function () {
    header();
    downTime();
    news();
    banner();

    function header() {
      var banner = document.querySelector('.jd-banner');
      var height = banner.offsetHeight;
      var header = document.querySelector('.jd-header');
      window.addEventListener('scroll',function () {
        header.style.background = "rgba(242,48,48,"+ window.pageYOffset / height +")"
      })
    }

    function downTime() {
      var spans = document.querySelectorAll('.time span:nth-child(odd)');
      console.log(spans);
      var time = 3600;
      var timer = setInterval(function () {
        var h = Math.floor(time / 3600) ;
        var m = Math.floor(time % 3600 / 60);
        var s = time % 60;

        h = h < 10 ? '0'+h : h;
        m = m < 10 ? '0'+m : m;
        s = s < 10 ? '0'+s : s;

        // console.log(h);
        // console.log(m);
        // console.log(s);
        // console.log(spans);

        spans[0].innerHTML = h;
        spans[1].innerHTML = m;
        spans[2].innerHTML = s;
        time--;

        if(time < 0 ){
          time = 5 * 60 * 60;
        }
      },1000)
    }

    function news () {
      var lis = document.querySelectorAll('.jd_news ul li');
      var ul = document.querySelector('.jd_news ul');
      var liHeight = lis[0].offsetHeight; //30
      console.log(lis.length);
      var index = 0;
      setInterval(function () {


        index ++;
        ul.style.transform = "translateY(-"+index*liHeight+"px)"
        ul.style.webkitTransform = "translateY(-"+index*liHeight+"px)"
        ul.style.transition = "transform .3s linear"
        ul.style.webkitTransition = "transform .3s linear"

        ul.addEventListener('transitionend',function () {
          if(index >= lis.length-1){
            index = 0;
            ul.style.transition = 'none';
            ul.style.webkitTransition = 'none';
            ul.style.transform = 'translateY(0)';
            ul.style.webkitTransform = 'translateY(0)';
          }
        })

      },1500)
    }

    function banner () {
      var index = 1;
      var banner = document.querySelector('.jd-banner');
      var width = banner.offsetWidth;
      var ul = document.querySelector('.jd-banner ul');
      var lis = document.querySelectorAll('ul li')
      var timer = setInterval(turn,1000)
      function turn () {
        index++;
        ul.style.transition = " transform .5s";
        ul.style.transform = "translateX("+(-index * width)+"px)"
      };
      ul.addEventListener('transitionend',function () {
        if( index >= 9 ) {
          ul.style.transition = 'none';
          index = 1;
          ul.style.transform = "translateX(-10%)";
        }

        if( index < 1) {
          ul.style.transition = 'none';
          index = 8;
          ul.style.transform = "translateX("+ (-index*width) +"px)"
        }

        dot(index - 1);
      })

      var startX;
      var distanceX;
      var moveX;
      banner.addEventListener('touchstart',function (e) {
        clearInterval(timer);
        startX = e.targetTouches[0].clientX;
        console.log(startX);
      })

      banner.addEventListener('touchmove',function (e) {
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX - startX;
        // console.log(distanceX);
        ul.style.transition = "none";
        ul.style.transform = "translateX("+ (-index*width + distanceX) +"px)";

      })
      banner.addEventListener('touchend',function (e) {
        if(Math.abs(distanceX) > width / 3) {
          if( distanceX > 0 ) {
            index --;
          }
          if( distanceX < 0) {
            index ++;
          }
        }
        ul.style.transition = "transform .3s";
        ul.style.transform = " translate("+ (-index * width) +"px)"
        timer = setInterval(turn,1000);
        startX = 0;
        moveX = 0;
        distanceX = 0;

      })



      function move(value) {
         ul.style.transform =" translateX("+value+"px)"
         ul.style.webkitTransform =" translateX("+value+"px)"
      }

      function transition(time) {
        return ul.style.transition = " transform "+ time +" ";
      }
      window.onresize = function () {
        width = banner.offsetWidth;
        ul.style.transform = "translateX(" + (-index * width) + ")"
        ul.style.transition = "none";
      }
    };





    function dot( index ) {
      var ol = document.querySelector('.jd-banner ol');
      var lis = ol.querySelectorAll('li');
      console.log(lis);
      lis.forEach(function (v,i ) {
        v.classList.remove('current');
        lis[index].classList.add('current');
      })



    }

  })();


}