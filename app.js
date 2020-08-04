import { words } from './data.js';

const jumbotron = document.querySelector('.jumbotron');
const btn25 = document.getElementById('w25');
const btn50 = document.getElementById('w50');
const btn75 = document.getElementById('w75');
const btn100 = document.getElementById('w100');
const listItems = document.getElementById('words');

btn25.addEventListener('click', {
  handleEvent: mixArray,
  arr: words,
  qty: 25,
  list: listItems,
});
btn50.addEventListener('click', {
  handleEvent: mixArray,
  arr: words,
  qty: 50,
  list: listItems,
});
btn75.addEventListener('click', {
  handleEvent: mixArray,
  arr: words,
  qty: 75,
  list: listItems,
});
btn100.addEventListener('click', {
  handleEvent: mixArray,
  arr: words,
  qty: 100,
  list: listItems,
});

//jumbotron.remove()

// function someFunk() {
//   console.log(this.a, this.b);
// }

function mixArray() {
  const result = [];
  while (result.length < this.qty) {
    let randomIndex = Math.floor(Math.random() * this.arr.length);
    if (result.includes(this.arr[randomIndex])) continue;
    result[result.length] = this.arr[randomIndex];
    //!result.includes(arr[randomIndex]) ?
    //result[result.length] = arr[randomIndex] : null
  }
  //return result;
  //console.log(result)
  showResult(result, this.list);
}

function showResult(arr, list) {
  list.innerHTML = '';
  const listString = arr.reduce(
    (acc, item) =>
      (acc += `   
        <div class="col-md-6 col-lg-3 py-3 text-center text-md-left">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${item}</h5>
            </div>
          </div>
        </div>`),
    ''
  );
  list.insertAdjacentHTML('beforeend', listString);
}

// console.log(mixArray(words, 20));
