// GET REQUEST
function getTodos() {
  // console.log('GET Request');
  // axios({
  //   method:'get',
  //   url:'https://jsonplaceholder.typicode.com/todos',
  //   params:{
  //     _limit:5
  //   }
  // })
  // .then (res => showOutput(res))
  // .catch(msg => console.log(msg))


  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then (res => showOutput(res))
      .catch(msg => console.log(msg))
}

// POST REQUEST
function addTodo() {
  //console.log('POST Request');
  // axios({
  //   method:'post',
  //   url:'https://jsonplaceholder.typicode.com/todos',
  //   data:{
  //     title:'new todo',
  //     completed: false
  //   }
  // })
  // .then (res => showOutput(res))
  // .catch(msg => console.log(msg))


  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title:'new_todo',
    completed: false
  })
      .then (res => showOutput(res))
      .catch(msg => console.log(msg))

}

// PUT/PATCH REQUEST
function updateTodo() {
  // console.log('PUT/PATCH Request');

  axios.put('https://jsonplaceholder.typicode.com/todos/1',{
    title:'updated todo',
    completed: false
  })
      .then (res => showOutput(res))
      .catch(msg => console.log(msg))
}

// DELETE REQUEST
function removeTodo() {
  // console.log('DELETE Request');

  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
      .then (res => showOutput(res))
      .catch(msg => console.log(msg))
}

// SIMULTANEOUS DATA
function getData() {
  //console.log('Simultaneous Request');

  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
  ])
    .then(axios.spread((todos,posts) =>showOutput(posts)))
    .catch(msg => console.log(msg))

}

// CUSTOM HEADERS
function customHeaders() {
  //console.log('Custom Headers');

  const config={
    headers :{
      'Content-Type':'application/json',
      Authorization: 'sometoken'
    }
  }

  axios.put('https://jsonplaceholder.typicode.com/todos/1',{
    title:'updated todo',
    completed: false
  },
  config)

      .then (res => showOutput(res))
      .catch(msg => console.log(msg))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  //console.log('Transform Response');

  const option ={
      method:'post',
      url:'https://jsonplaceholder.typicode.com/todos',
      data:{
        title:'Hello ',
        
      },
      transformResponse: axios.defaults.transformResponse.concat(data =>{
        data.title=data.title.toUpperCase();

        return data;
      })
  }
  
  axios(option).then(res => showOutput(res))

}

// ERROR HANDLING
function errorHandling() {
  //console.log('Error Handling');

  axios.get('https://jsonplaceholder.typicode.com/todo')
      .then (res => showOutput(res))
      .catch(msg =>{
        if(msg.response){
          console.log(msg.response.data)
          console.log(msg.response.status)
          console.log(msg.response.headers)
        }
      })
}

// CANCEL TOKEN
function cancelToken() {
  //console.log('Cancel Token');

  const source= axios.CancelToken.source();

  axios.get('https://jsonplaceholder.typicode.com/todos',{
    cancelToken :source.token
  })
  .then (res => showOutput(res))
  .catch(thrown =>{
    if(axios.isCancel(thrown)){
      console.log('Request cancel',thrown.message)
    }
  })
  if (true){
    source.cancel('request cancel')
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config =>{
  console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`);

  return config
},err =>{
  return new Promise.reject(err);
})

// AXIOS INSTANCES

const instances= axios.create({
  baseURL :'https://jsonplaceholder.typicode.com'
})
instances.get('/comments').then(res =>showOutput(res))



// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
