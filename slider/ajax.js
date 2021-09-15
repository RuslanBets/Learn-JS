$(function () {
  // fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => console.log(json))

  let todos_list_main_box = $('#todos'),
    todos = []
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    method: 'GET',
    success: function (res) {
      populateTodosList(res)
    },
    error: function (err) {
      console.log(err)
    }
  })

  function populateTodosList (elements) {
    console.log(elements)
    for (let i = 0; i < elements.length; i++){
      todos_list_main_box.append(`<li>${elements[i].id},   ${elements[i].title}</li>`)
      // todos_list_main_box.append("<li>" + elements[i].id + ', ' + elements[i].title + "</li>")
    }
  }
})