function login() {
	user_ = document.getElementById("user_").value;
	pass_ = document.getElementById("Pass_").value;
	if (user_.toLowerCase() == "foody9000") {
		if (pass_ == "Lala0310") {
			alert("Successfully Logged In");
			window.location.href = "../Home-Page/html.html";
		} else {
			alert("Wrong Username Or Password");
		}
	} else {
		alert("Wrong Username Or Password");
	}
}