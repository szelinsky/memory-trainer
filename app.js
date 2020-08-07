import { words } from './data.js';

//const jumbotron = document.querySelector('.jumbotron');
const listItems = document.getElementById('words');

(function (...args) {
  for (let arg of args) {
    document.getElementById('btn' + arg).addEventListener('click', {
      handleEvent: mixArray,
      arr: words,
      qty: arg,
      list: listItems,
    });
  }
})(25, 50, 75, 100);

function mixArray() {
  const result = [];
  while (result.length < this.qty) {
    let randomIndex = Math.floor(Math.random() * this.arr.length);
    if (result.includes(this.arr[randomIndex])) continue;
    result[result.length] = this.arr[randomIndex];
  }
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