const makeRequest = async (config) => {
  return await axios(config);
}

const getData = () => {
  makeRequest('https://jsonplaceholder.typicode.com/posts/').then(res=>console.log(res.data)).catch(err=>console.log(err));
}

const sendData = () => {
  makeRequest( {
    url: 'https://jsonplaceholder.typicode.com/posts/',
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })}).then(res=>console.log(res)).catch(err=>console.log(err));
}

const updateData = () => {
  makeRequest( {
    url: 'https://jsonplaceholder.typicode.com/posts/1/',
    method: 'PUT',
    data: JSON.stringify({
      id: 1,
      title: 'foomaq',
      body: 'barmlp',
      userId: 1,
    })}).then(res=>console.log(res.data)).catch(err=>console.log(err));
}

const deleteData = () => {
  makeRequest( {
    url: 'https://jsonplaceholder.typicode.com/posts/1/',
    method: 'DELETE'
    }).then(res=>console.log(res.data)).catch(err=>console.log(err));
}

deleteData();