let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function Increment() {
  count += 1;
  countEl.innerText = count;
}

function Save() {
  let countstr = " " + count  + " " + "-" + " ";
  saveEl.textContent += countstr;
  count = 0;
}
