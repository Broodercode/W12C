var loginSubmit = document.getElementById("login-submit");

function handlePostLogin(e) {
  console.log(e.data.token);
  let token = e.data.token;
  if (token) {
    Cookies.set("token", token);
    window.location.assign("/home.html");
  }
}

function onError() {
  alert("Invalid Username");
}

function onPostLogin(response) {
  var userEmail = response.target.form[0].value;
  var userPassword = response.target.form[1].value;

  axios
    .post("https://reqres.in/api/login", {
      email: userEmail,
      password: userPassword,
    })
    .then(handlePostLogin)
    .catch(onError);
}

loginSubmit.addEventListener("click", onPostLogin);
