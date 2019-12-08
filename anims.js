window.onload= () => {
  var blurbOne = document.getElementById("blurb-one")
  var blurbTwo = document.getElementById("blurb-two")
  var blurbs = document.getElementById("blurbs")
  var demonWord = document.getElementById("demon-word")
  var portrait = document.getElementById("portrait")

  blurbOne.className = "blurb one initanim"
  blurbTwo.className = "blurb two initanim"
  demonWord.className = "demon initanim"
  portrait.className = "portrait initanim"

  window.onscroll = () => {
    if (portrait.getBoundingClientRect().top <= 800) {
      portrait.className = "portrait anim"
    }

    if (blurbs.getBoundingClientRect().top <= 100) {
      blurbOne.className = "blurb one anim"
      blurbTwo.className = "blurb two anim"
    }

    if (blurbs.getBoundingClientRect().top <= 0) {
      demonWord.className = "demon anim"
    }
  }
}

var screenshots = {
  "thumb1": "ss1.jpg",
  "thumb2": "ss2.jpg",
  "thumb3": "ss3.jpg",
  "thumb4": "ss4.jpg"
}

function screenshotClicked(id) {
  console.log(id)
  document.getElementsByClassName("modal")[0].style.display = "block"
  document.getElementsByClassName("modal")[1].style.display = "block"
  document.body.className = "modalon"

  document.getElementById("current-screenshot").setAttribute('src', screenshots[id])
}

function screenshotUnclicked() {
  document.getElementsByClassName("modal")[0].style.display = "none"
  document.getElementsByClassName("modal")[1].style.display = "none"
  document.body.className = ""
}
