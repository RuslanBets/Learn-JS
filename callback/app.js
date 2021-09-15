window.onload = function () {
  let userData = {
      firstName: 'Vitalii',
      lastName: 'Bezghin',
      email: 'test@ukr.net',
      phone: '0931205426',
      pupil: {}
    },
    user_data_box = document.querySelector('.user-data'),
    get_data = document.querySelector('.get_data')

  console.log(userData)
  get_data.onclick = function () {

    populateData(loadUserData(), function () {
      loadUserData().pupil = {
        firstName: 'Ruslan',
        lastName: 'Ruslanovich',
        email: 'ruslanovich@ukr.net',
      }
    })
  }

  function loadUserData () {
    return userData
  }

  function populateData (userInfo = [], someActionForUserData = null) {

    someActionForUserData(userInfo ?? loadUserData())

    updateView(userInfo ?? loadUserData())
  }

  function updateView (data) {
    for (let key in data) {
      let li = document.createElement('li')
      if (key === 'pupil') {
        li.innerHTML = key

        let new_ul = document.createElement('ul')

        li.append(new_ul)

        for (let i in data[key]) {
          let new_li = document.createElement('li')
          new_li.innerHTML = data[key][i]
          new_ul.append(new_li)
        }

        user_data_box.appendChild(li)
      } else {
        li.innerHTML = data[key]
        user_data_box.appendChild(li)
      }
    }
  }
}