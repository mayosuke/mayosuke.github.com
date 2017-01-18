var pageVariations = [
function() {
  console.log('original');
  document.getElementsByTagName('p')[0].innerHTML='hello web test!!! this is original';
},
function() {
  console.log('pattern1');
  document.getElementsByTagName('p')[0].innerHTML='hello web test!!! this is pattern1';
}];
$(document).ready(
  pageVariations[chosenVariation]
);

