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
    if (index === codes.length) {
      alert("KONAMI");
    }
    index++;
  }
  else {
    index = 0;
  }
}


function init() {
  // your code here
  document.body.addEventListener("keydown", (event) => {
    let index = 0;
    
    onKeyDownHandler(event, index);
  });
}
