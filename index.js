// Write your solution here!
const cats=["Milo","Otis","Garfield"]

function destructivelyAppendCat(Ralph){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    let newCats = cats.slice();
  newCats.push(name);      
  return newCats; 
}
function prependCat(name){

        return [name].concat(cats.slice(0));
      }
function removeLastCat(){
    return cats.slice(0, cats.length - 1)
}
function removeFirstCat(){
    return cats.slice(1 )
}