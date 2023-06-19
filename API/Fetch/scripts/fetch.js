// fetch('https://jsonplaceholder.typicode.com/posts').then(res=>{
//     if(!res.ok){
//         var mes = `Error : ${res.status}`;
//         throw new Error(mes);
//     }
//     return res.json()}).then(res=>console.log(res)).catch(err=>console.log(err));
// //                                                      readable stream converted into json

const makeRequest = async (url,config) => {
    const res = await fetch(url,config);
    if(!res.ok){
        var mes = `Error : ${res.status}`;
        throw new Error(mes);
    }
    const data = await res.json();
    return data;
}

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts').then(res=>console.log(res)).catch(err=>console.log(err));
}

const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(res=>console.log(res)).catch(err=>console.log(err));
}

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'fooman',
          body: 'barman',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(res=>console.log(res)).catch(err=>console.log(err));
}

const updateSingleData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foomanGSDJHSGDJHSDDGDSJJH',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(res=>console.log(res)).catch(err=>console.log(err));
}

const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      }).then(res=>console.log(res)).catch(err=>console.log(err));
}

deleteData();