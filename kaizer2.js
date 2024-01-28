const contactMeTexts = [
  "Contact",
  "Makipag-ugnay",
  "接触",
  "кантакт",
  "Kontakt",
  "接触"
];
const contactMeElement = document.getElementById("contactMeText");
let currentIndex = 0;

function typeEffect(text, i, callback) {
  if (i < text.length) {
    contactMeElement.textContent += text.charAt(i);
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
    contactMeElement.innerHTML = "";
    typeEffect(contactMeTexts[currentIndex], 0, function () {
      currentIndex = (currentIndex + 1) % contactMeTexts.length;
      startTypingEffect();
    });
  }, 1000); // Adjust the delay between texts (milliseconds)
}

// Call startTypingEffect directly
startTypingEffect();