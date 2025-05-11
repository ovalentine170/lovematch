function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const result = document.getElementById("result");
  
    if (name1 === "" || name2 === "") {
      result.innerHTML = "Please enter both names 💔";
      return;
    }
  
    const loveScore = Math.floor(Math.random() * 101); // 0 to 100
    let message = "";
  
    if (loveScore > 80) {
      message = "💘 You are a match made in heaven!";
    } else if (loveScore > 50) {
      message = "💕 There's something sweet growing!";
    } else if (loveScore > 30) {
      message = "💞 Might need some effort, but love can bloom!";
    } else {
      message = "💔 Love needs more spark!";
    }
  
    result.innerHTML = `${name1} ❤️ ${name2}<br>Love Score: ${loveScore}%<br>${message}<br><em>"${getRandomQuote()}"</em>`;
  }
  
  // Love Quotes
  const loveQuotes = [
    "Love is not finding someone to live with, it's finding someone you can't live without.",
    "You are my today and all of my tomorrows.",
    "In a sea of people, my eyes will always search for you.",
    "Every love story is beautiful, but ours is my favorite.",
    "Love is composed of a single soul inhabiting two bodies."
  ];
  
  function getRandomQuote() {
    return loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  }
  
  // Floating Hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    document.body.appendChild(heart);
  
    setTimeout(() => heart.remove(), 4000);
  }
  
  setInterval(createHeart, 500);
  
  // Share on WhatsApp
  function shareLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    if (!name1 || !name2) {
      alert("Please enter both names to share ❤️");
      return;
    }
  
    const message = `Check our love score ❤️: ${name1} & ${name2}! Try it here: https://your-love-app-url.com`;
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
  