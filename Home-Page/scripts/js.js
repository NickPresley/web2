function enterName() {
    document.getElementById("ctr-").id.valueOf = document.getElementById("ctr-").id.valueOf + "1"
    document.getElementById("ctr-").id = document.getElementById("ctr1").id + "1"
    document.getElementById("ctr-").id = document.getElementById("ctr2").id + "1"
    document.getElementById("ctr-").id = document.getElementById("ctr3").id + "1"
    xnm = document.getElementById("name_").value;
    xnu = document.getElementById("num_").value;
    xps = document.getElementById("pass_").value;
    ctr = document.createElement("tr");
    ctr.id = "ctr-";
    document.getElementById("table").appendChild(ctr);
    ctr1 = document.createElement("th");
    ctr2 = document.createElement("th");
    ctr3 = document.createElement("th");
    ctr1.id = "ctr1";
    ctr2.id = "ctr2";
    ctr3.id = "ctr3";
    document.getElementById("ctr-").appendChild(ctr1);
    document.getElementById("ctr-").appendChild(ctr2);
    document.getElementById("ctr-").appendChild(ctr3);
    document.getElementById("ctr1").innerText = xnm
    document.getElementById("ctr2").innerText = xnu
    document.getElementById("ctr3").innerText = xps
}