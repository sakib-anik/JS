// sessionStorage.setItem("user","anis");

// const userName = sessionStorage.getItem('user');
// console.log(userName);

// sessionStorage.removeItem('user');

// const stu = {id: 101,name:"sakib"};

// sessionStorage.setItem("student",JSON.stringify(stu));

const stud = JSON.parse(sessionStorage.getItem("student"));

console.log(stud);

