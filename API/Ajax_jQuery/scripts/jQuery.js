const makeRequest = async (url,method,data) => {
  try{
    const result = await $.ajax({
      url: url,
      method: method,
      data: data
    });
    return result;
  }catch(err){
    console.log(err);
  }
};

const getData = () => {
  makeRequest('https://jsonplaceholder.typicode.com/posts/1','GET').then(res=>console.log(res));
};

const sendData = () => {
  makeRequest('https://jsonplaceholder.typicode.com/posts/','POST', {
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })}).then(res=>console.log(res));
};

const updateData = () => {
  makeRequest('https://jsonplaceholder.typicode.com/posts/1','PUT', {
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    })}).then(res=>console.log(res));
};

const deleteData = () => {
  makeRequest('https://jsonplaceholder.typicode.com/posts/1','DELETE').then(res=>console.log(res));
};


deleteData();