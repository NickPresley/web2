function enterName() {
    xnm = document.getElementById("name_").innerText;
    xnu = document.getElementById("num_").innerText;
    xps = document.getElementById("pass_").innerText;
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