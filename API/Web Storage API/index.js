// localStorage.setItem("userName","anisul");
// localStorage.setItem("password","sakib127@");

// const userName = localStorage.getItem("userName");
// const userPassword = localStorage.getItem("password");

// console.log(userName, userPassword);

// localStorage.removeItem("userName");
// localStorage.removeItem("password");


// const countries = ["ban","ind","pak"];
// localStorage.setItem("countries",JSON.stringify(countries));

const countriesList = JSON.parse(localStorage.getItem("countries"));

console.log(countriesList);