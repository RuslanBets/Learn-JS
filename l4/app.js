window.onload = function () {
  let header = document.querySelector('header');

  window.onscroll = function (){
    if (pageYOffset < 30){
      header.style.background = ''
    }else{
      header.style.background = 'rgba(20, 2, 0, 0.8)'
    }
  }
}