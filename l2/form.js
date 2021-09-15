window.onload = function (){
  let userName = 'Ruslan';

  addSomeText('Vitalii')

  function addSomeText(name) {
    userName = 'Your name is ' + name

    console.log(userName)
  }

}
// window.onload = function () {
//   let form = document.querySelector('form'),
//     firstName = document.getElementsByName('firstName')[0],
//     lastName = document.getElementsByName('lastName')[0],
//     email = document.getElementsByName('email')[0],
//     password = document.getElementsByName('password')[0],
//     confirm_password = document.getElementsByName('confirm_password')[0],
//     user_data = {};
//
//   form.onsubmit = function (e) {
//     e.preventDefault()
//
//     if (password.value == confirm_password.value){
//       user_data.firstName = firstName.value
//       user_data.lastName = lastName.value
//       user_data.email = email.value
//       user_data.password = password.value
//
//       form.style.display = 'none'
//
//       alert('You was successfully registered !!!!')
//     }else{
//       user_data = {}
//     }
//   console.log(user_data)
//   }
// }