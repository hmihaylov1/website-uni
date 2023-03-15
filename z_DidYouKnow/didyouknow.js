const funFacts = [
    "The shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes.",
    "A cockroach can live several weeks without its head.",
    "The average person spends six months of their lifetime waiting for red lights to turn green.",
    "Honey never spoils. You can eat 32,000-year-old honey.",
    "The longest wedding veil was longer than 63 football fields.",
    "Giraffes have no vocal cords.",
    "A baby octopus is about the size of a flea when it is born.",
    "A group of flamingos is called a flamboyance.",
    "The first oranges weren't actually orange.",
    "A group of crows is called a murder.",
  ];
  
  const funFactSection = document.getElementById("fun-fact-section");
  const refreshButton = document.getElementById("refresh-button");
  
  function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactSection.innerText = funFacts[randomIndex];
  }
  
  document.addEventListener("DOMContentLoaded", displayRandomFact);
  
  refreshButton.addEventListener("click", displayRandomFact);
  