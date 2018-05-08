var tables = document.querySelectorAll('article.restaurant, article.terrace');
var form = document.getElementById('tableStatus');
console.log(tables);

for ( var i = 0; i < tables.length; i++ ) (function(i){
  tables[i].onclick = function() {
  form.classList.add('tableStatusDisplay');
  console.log('I am clicked');
  }
})(i);
