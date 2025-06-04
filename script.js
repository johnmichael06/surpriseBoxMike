function openGift() {
  const lid = document.getElementById("giftHead");
  const surpriseBox = document.getElementById("surpriseBox");

  const isOpening = !lid.classList.contains("open");

  lid.classList.toggle("open");

  surpriseBox.innerHTML = "";

  if (isOpening) {
    const surprises = [
      "BOANG ka!",
      "WOW IKAW NI SAM?",
      "WOW SHET",
      "IGANG",
      "<img src='https://static.wikia.nocookie.net/e92f8681-a896-4220-9844-81b1aa3c3730/scale-to-width/755' alt='SIGMA'>",
      "<img src='https://static.wikia.nocookie.net/503aba5e-0573-4211-9b5e-a5bd038744d3/scale-to-width/755' alt='AMBOT'>",
      "GISAYANG SAYANG RA NAKO INYO ORAS Ns",
      "SUS!"
    ];

    const random = surprises[Math.floor(Math.random() * surprises.length)];

    const surpriseElement = document.createElement("div");
    surpriseElement.classList.add("surpriseText");
    surpriseElement.innerHTML = random;

    setTimeout(() => {
      surpriseBox.appendChild(surpriseElement);
    }, 400);
  }
}
