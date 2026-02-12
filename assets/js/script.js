function party() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(party, 800);
});

const surpriseButton = document.getElementById("surprise-btn");
surpriseButton.addEventListener("click", () => {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
