var tables = document.querySelectorAll('article.restaurant, article.terrace');
var form = document.getElementsByClassName('tableStatus')[0];
console.log(tables);

for ( var i = 0; i < tables.length; i++ ) (function(i){
  tables[i].onclick = function() {
  form.classList.add('tableStatusDisplay');
  console.log('I am clicked');
  }
})(i);

var redTable = document.getElementById('red');
redTable.onclick = function () {
let tableOne = document.getElementsByClassName('restaurant__tableOne')[0];
console.log('whatever');
  tableOne.classList.add('red');
  var counter = 5400;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }

  }, 1000);

}
