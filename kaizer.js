const aboutMeTexts = [
  "About me",
  "Tungkol sa akin",
  "私について",
  "пра мяне",
  "über mich",
  "关于我"
];
const aboutMeElement = document.getElementById("aboutMeText");
let currentIndex = 0;

function typeEffect(text, i, callback) {
  if (i < text.length) {
    aboutMeElement.textContent += text.charAt(i);
    i++;
    setTimeout(function () {
      typeEffect(text, i, callback);
    }, 50); // Adjust the typing speed (milliseconds)
  } else {
    callback();
  }
}

function startTypingEffect() {
  setTimeout(function () {
    aboutMeElement.innerHTML = "";
    typeEffect(aboutMeTexts[currentIndex], 0, function () {
      currentIndex = (currentIndex + 1) % aboutMeTexts.length;
      startTypingEffect();
    });
  }, 1000); // Adjust the delay between texts (milliseconds)
}

// Call startTypingEffect directly
startTypingEffect();