const quotes = [
  "“Code never lies, comments sometimes do.” – Ron Jeffries",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“A project is only finished when no one uses it anymore.” – Developer proverb",
  "“Work in progress… great things take time.”"
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").textContent = randomQuote;
