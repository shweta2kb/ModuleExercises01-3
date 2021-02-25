function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
}
module.exports = randomSelection;
//TODO: Export the randomFromArray function.