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


function onKeyDownHandler(e) {
  const key = e.key;
  
  let index = 0;
  
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
    onKeyDownHandler(event);
  });
}
