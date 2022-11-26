// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function(){
  cat.length = 0;
  cat.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
    return cats;
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return cats;
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift();
    return cats;
}
function appendCat(Broom){
    var name_1 = [ ... cats,Broom];
    return name_1;
}
function prependCat(Arnold){
    var name_2 = [Arnold, ...cats];
    return name_2;
}
function removeLastCat(){
    var cat = cats.slice(0,cats.length-1);
    return cat;
}
function removeFirstCat(){
    var cat = cats.slice(1)
    return cat;
}