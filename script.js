// 3D tilt for project cards and hero
const tiltTargets = document.querySelectorAll('.card, .hero-card, .project-card');
tiltTargets.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const rX = ((y - cy)/cy) * 6; // max 6deg
    const rY = ((cx - x)/cx) * 6;
    el.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
  });
  el.addEventListener('mouseleave', ()=> el.style.transform = 'rotateX(0) rotateY(0)');
});

// Cursor glow
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Slight neon ring follow effect
const profileWrap = document.querySelector('.profile-wrap');
if(profileWrap){
  profileWrap.addEventListener('mousemove', e => {
    const rect = profileWrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const ring = profileWrap.querySelector('.neon-ring');
    ring.style.transform = `translate(${x*6}px, ${y*6}px) scale(1.02)`;
  });
  profileWrap.addEventListener('mouseleave', ()=>{
    const ring = profileWrap.querySelector('.neon-ring');
    ring.style.transform = 'translate(0,0) scale(1)';
  });
}

// ================= GAME MATEMATIKA ==================
let mathA, mathB;

function startMathGame() {
  mathA = Math.floor(Math.random() * 10) + 1;
  mathB = Math.floor(Math.random() * 10) + 1;

  document.getElementById("math-question").innerText =
    `Berapa hasil: ${mathA} + ${mathB} ?`;
  document.getElementById("math-result").innerText = "";
}

function checkMathAnswer() {
  const ans = Number(document.getElementById("math-answer").value);
  const correct = mathA + mathB;

  if (ans === correct) {
    document.getElementById("math-result").innerText = "Benar! 🎉";
  } else {
    document.getElementById("math-result").innerText = `Salah, jawabannya ${correct}`;
  }
}



// ================= GAME BAHASA INGGRIS ==================
const englishWords = [
  { en: "dog", id: "anjing" },
  { en: "cat", id: "kucing" },
  { en: "book", id: "buku" },
  { en: "water", id: "air" },
  { en: "house", id: "rumah" }
];

let currentWord;

function startEnglishGame() {
  currentWord = englishWords[Math.floor(Math.random() * englishWords.length)];
  document.getElementById("eng-question").innerText =
    `Apa arti kata: "${currentWord.en}" ?`;
  document.getElementById("eng-result").innerText = "";
}

function checkEnglishAnswer() {
  const ans = document.getElementById("eng-answer").value.toLowerCase();

  if (ans === currentWord.id) {
    document.getElementById("eng-result").innerText = "Benar! 🎉";
  } else {
    document.getElementById("eng-result").innerText =
      `Salah, arti yang benar: ${currentWord.id}`;
  }
}
