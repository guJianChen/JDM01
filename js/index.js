(function () {
  header();
  news();
  time();
  banner();
  //头部渐变色
  function header() {
    var banner = document.querySelector('.jd_banner');
    var header = document.querySelector('.header');
    window.addEventListener('scroll',function (e) {
      header.style.background = "rgba(255,0,0,"+ window.pageYOffset / banner.offsetHeight +")"
    })
  }
  //新闻轮播模块
  function news() {
    var ul = document.querySelector('.jd_news ul');
    var lis = document.querySelectorAll('.jd_news ul li');
    var height = lis[0].offsetHeight;
    var index = 0;

    setInterval(function () {
      index ++ ;
      ul.style.transition = " transform .5s";
      ul.style.transform = " translateY(-" + index * height+ "px)"

      ul.addEventListener('transitionend',function () {
        if(index >= lis.length -1 ) {
          index = 0;
          ul.style.transition = "none";
          ul.style.transform = "translateY(0)";
        }
      })
    },1000)
  }
  //倒计时模块
  function time() {
    var time = 10;
    var spans = document.querySelectorAll('.sec_title .time span:nth-child(odd)');
    console.log(spans);
    setInterval(function () {
      var h = Math.floor(time / 3600);
      var m = Math.floor(time % 3600 / 60);
      var s = Math.floor(time % 60);
       h = h < 10 ? "0"+h : h;
       m = m < 10 ? "0"+m : m;
       s = s < 10 ? "0"+s : s;
      spans[0].innerHTML = h;
      spans[1].innerHTML = m;
      spans[2].innerHTML = s;
      time --;
      if(time < 0 ){
        time = 60;
      }

    },1000)
  }
  //轮播图模块
  function banner() {
    var ul = document.querySelector('.jd_banner ul');
    var lis = document.querySelectorAll(".jd_banner ul li");
    var banner = document.querySelector('.jd_banner');
    var width = banner.offsetWidth;
    var index = 1;
    setInterval(function () {
      index++;
      ul.style.transition = " transform .5s";
      ul.style.transform = " translateX("+ (-index * width ) +"px)"

      ul.addEventListener("transitionend",function () {
        if(index >= 9) {
          index = 1;
          ul.style.transition = "none";
          ul.style.transform = " translateX("+(-index * width)+"px)";
        }
        if(index < 1) {
          index = 8;
          ul.style.transition = "none";
          ul.style.transform = "translateX("+ (-index * width) +"px)"
        }
        dot(index - 1);
      })
    },1000)

  }
  function dot(index) {
    var lis = document.querySelectorAll('.jd_banner ol li');
    lis.forEach(function (v, i) {
      v.classList.remove('current');
      lis[index].classList.add('current');
    })
  }


})();
