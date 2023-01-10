const result = document.createElement("p");
result.setAttribute("id", "result");
const body = document.getElementsByTagName("body")[0];
console.log(body);
const fullName = document.getElementsByName("name")[0];
const age = document.getElementsByName("age")[0];
const birthdate = document.getElementsByName("birthdate")[0];
console.log(fullName);
body.append(result);
result.innerHTML = `${fullName.name}: ${fullName.value},`