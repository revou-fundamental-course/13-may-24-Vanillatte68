// TAB FUNCTION
function clickHandle(evt, option) {
  let i, content, tabButton;

  // This is to clear the previous clicked content.
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  // Set the tab to be "active".
  tabButton = document.getElementsByClassName("tab_btn");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }

  // Display the clicked tab and set it to active.
  document.getElementById(option).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultTab").click();
// TAB FUNCTION

// get form variable
const keliling_form = document.getElementById("keliling_form");
const luas_form = document.getElementById("luas_form");

// keliling event
keliling_form.addEventListener("submit", function (event) {
  event.preventDefault();

  var validasi = /^[0-9]+$/;
  var sisi_a = document.getElementById("sisi_a").value;
  var sisi_b = document.getElementById("sisi_b").value;
  var sisi_c = document.getElementById("sisi_c").value;
  const kllHasil = document.getElementById("kllHasil");

  if ((sisi_a && sisi_b && sisi_c).match(validasi)) {
    var sisi_a = parseInt(sisi_a);
    var sisi_b = parseInt(sisi_b);
    var sisi_c = parseInt(sisi_c);

    var kll = sisi_a + sisi_b + sisi_c;

    kllHasil.innerHTML = "";
    kllHasil.innerHTML += `<span>Hasil:<br/>K = A + B + C<br/>K = ${sisi_a} + ${sisi_b} + ${sisi_c}<br/>K = ${kll}</span>`;
  } else {
    alert("Masukkan angka 0-9");
  }
});

// luas event
luas_form.addEventListener("submit", function (event) {
  event.preventDefault();

  var validasi = /^[0-9]+$/;
  var tinggi = document.getElementById("tinggi").value;
  var alas = document.getElementById("alas").value;
  const luasHasil = document.getElementById("luasHasil");

  if ((tinggi && alas).match(validasi)) {
    var tinggi = parseFloat(tinggi);
    var alas = parseFloat(alas);

    var luas = (tinggi * alas) / 2;

    luasHasil.innerHTML = "";
    luasHasil.innerHTML += `<span>Hasil:<br/>L = (Tinggi x Alas) / 2<br/>L = (${tinggi} x ${alas}) / 2<br/>L = ${luas}</span>`;
  } else {
    alert("Masukkan angka 0-9");
  }
});

function resetForm() {
  keliling_form.reset();
  luas_form.reset();
  document.getElementById("kllHasil").innerHTML = "";
  document.getElementById("luasHasil").innerHTML = "";
}
