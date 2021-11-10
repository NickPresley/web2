var logins = [{
	"username": "foody9000", "password": "Lala0310"
}, {
	"username1": "brayden", "password": "Lala0310"
}]

function getUsername(code) {
	return logins.filter(
	  function(logins) {
		return logins.code == code
	  }
	);
  }
  user_ = document.getElementById("user_").value;
  pass_ = document.getElementById("Pass_").value;
  var found = getPassword(user_);

function login() {
	if (user_.toLowerCase() == "foody9000") {
		if (pass_ == found) {
			var x = alert("Successfully Logged In");
			window.location.href = "../Home-Page/html.html";
		} else {
			alert("Wrong Username Or Password");
		}
	} else {
		alert("Wrong Username Or Password");
	}
}