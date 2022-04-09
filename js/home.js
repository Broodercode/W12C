var auth = document.getElementById("home");
var logout = document.getElementById("logout");

auth.innerText = "test";

function onAuth(response) {
  let colArr = response.data.data;

  auth.innerHTML = "";
  colArr.forEach((el) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.style.backgroundColor = `${el.color}`;
    p.append(`The color ${el.name} was created in the year ${el.year}`);
    auth.append(p);
  });
}
function onLogout() {
  Cookies.remove("token");
  authCheck();
}
function onError(error) {
  console.log(error);
}
function authCheck() {
  let token = Cookies.get("token");

  if (token != "QpwL5tke4Pnpja7X4") {
    alert("invalid username (or password)");
    window.location.assign("/index.html");
  } else if (token == "QpwL5tke4Pnpja7X4") {
    axios.get("https://reqres.in/api/unknown").then(onAuth).catch(onError);
  }
}

authCheck();
logout.addEventListener("click", onLogout);
