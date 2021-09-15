window.onload = function (){
  let input_img_range = document.querySelector('.img-size'),
    input_font_size_range = document.querySelector('.font-size'),
    color_text_selected = document.querySelector('.selected_color'),
    firstName = document.querySelector('.firstName'),
    age = document.querySelector('.age'),
    logo = document.querySelector('.logo img');

  firstName.style.fontSize = input_font_size_range.value + 'px'
  age.style.color = color_text_selected.value
  logo.style.width = input_img_range.value + 'px'

  document.getElementById('test_label').oncopy = function (){
    return false;
  }
  document.getElementById('test_label').oncontextmenu = function (){
    return false;
  }
  document.getElementById('test_label').onmouseover = function (){
    console.log(this)
    this.style.color = 'red'
  }
  console.log(document.getElementsByTagName('form'))
  input_img_range.oninput = function () {
    logo.style.width = input_img_range.value + 'px'
  }

  input_font_size_range.oninput = function (){
    firstName.style.fontSize = input_font_size_range.value + 'px'
  }

  color_text_selected.onchange = function (){
    age.style.color = color_text_selected.value
  }
}