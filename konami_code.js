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
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
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
    
    onKeyDownHandler(event, index);
    
  });
}
