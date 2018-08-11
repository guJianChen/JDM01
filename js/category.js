(function () {
//  拖拽
  drag();
  drag2();
  function drag() {
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    var currentY = 0;
    var cLeft = document.querySelector('.c_left');
    var ul = document.querySelector('.c_left ul');
    var minY = cLeft.offsetHeight - ul.offsetHeight;
    console.log(minY);
    cLeft.addEventListener('touchstart',function (e) {
      // console.log("start");
      startY = e.targetTouches[0].clientY;
    })
    cLeft.addEventListener('touchmove',function (e) {
      // console.log("move");
      ul.style.transition = " none ";
      moveY = e.targetTouches[0].clientY;
      distanceY = moveY - startY;
      ul.style.transform = " translateY("+ (currentY+distanceY) +"px)"

    })
    cLeft.addEventListener('touchend',function (e) {
      // console.log("end");
      currentY += distanceY;
      if( currentY > 0 ) {
        currentY = 0;
      }
      if( currentY < minY) {
        currentY = minY;
      }
      console.log(currentY);
      ul.style.transition = " transform .3s";
      ul.style.transform = "translateY(" + currentY  +"px)"
      // translateY(0);
    })
  }

  function drag2() {
    var currentY = 0;
    var startY = 0;
    var distanceY = 0;
    var moveY = 0;
    var inRight = document.querySelector('.in_right');
    var cRight = document.querySelector('.c_right');
    var minY = cRight.offsetHeight - inRight.offsetHeight;
    console.log(minY);

    cRight.addEventListener('touchstart',function (e) {
      startY = e.targetTouches[0].clientY;
    })

    cRight.addEventListener('touchmove',function (e) {
      inRight.style.transition = "none";
      moveY = e.targetTouches[0].clientY;
      distanceY = moveY - startY;
      inRight.style.transform = "translateY(" + (currentY + distanceY) + "px)"
      console.log(currentY);
    })
    cRight.addEventListener('touchend',function (e) {
      currentY += distanceY;
      console.log(currentY);
      if(currentY > 0) {
        currentY = 0;
      }
      if(currentY < minY ){
        currentY = minY
      }
      inRight.style.transition = "transform .3s";
      inRight.style.transform = "translateY( " + currentY +  "px)"

    })
  }
})();