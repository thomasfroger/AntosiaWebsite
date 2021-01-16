showUsers()

function showGalerieEntiere() {
  document.getElementById("galerieStylo").style.display = "none";
  document.getElementById("galerieEntiere").style.display = "flex";
  document.getElementById("galerieSingleLine").style.display = "none";
  document.getElementById("galerieOther").style.display = "none";

}

function showGalerieStylo() {
  document.getElementById("galerieStylo").style.display = "flex";
  document.getElementById("galerieEntiere").style.display = "none";
  document.getElementById("galerieSingleLine").style.display = "none";
  document.getElementById("galerieOther").style.display = "none";

}

function showGalerieSingleLine() {
  document.getElementById("galerieStylo").style.display = "none";
  document.getElementById("galerieEntiere").style.display = "none";
  document.getElementById("galerieSingleLine").style.display = "flex";
  document.getElementById("galerieOther").style.display = "none";

}

function showGalerieOther() {
  document.getElementById("galerieStylo").style.display = "none";
  document.getElementById("galerieEntiere").style.display = "none";
  document.getElementById("galerieSingleLine").style.display = "none";
  document.getElementById("galerieOther").style.display = "flex";

}

function addRow() {

  var seconds = document.getElementById("countdown").textContent;
  var elem = document.getElementById("add");
  elem.classList.replace("add", "wait");
  var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) {
      clearInterval(countdown);
      elem.classList.replace("wait", "add");

    }
  }, 1000)
}



