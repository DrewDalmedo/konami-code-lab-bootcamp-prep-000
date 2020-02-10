const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function onKeyDownHandler(e, index) {
  const key = e.key;
  
  if (key === alphabet[index]) {
    index++;
    
    if (index === alphabet.length) {
      alert("KONAMI CODEEEEEE");
    }
    else {
      index = 0;
    }
  }
}

function init() {
  // your code here
  document.body.addEventListener("keydown", (event) => {
    let index = 0;
    
    
  });
}
