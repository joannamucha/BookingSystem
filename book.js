var tables = document.querySelectorAll('article.restaurant, article.terrace');
console.log(tables);

for ( var i = 0; i < tables.length; i++ ) (function(i){
  tables[i].onclick = function() {
      console.log('I am clicked');
  }
})(i);
