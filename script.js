//constructor - instantiates the class - cap "C" - pass params thru - make an object use key value pairs - use 'this' this new instance should have all of these properties and they should have the values we provide - passsed thru params
//var Cat = function(name, color, weight, hairlangth, attitude, adorability){
//    
//    this.name = name;
//    this.weight = weight;
//    this.hairlength = hairlength;
//    this.attitude = attitude;
//    this.adorability = adorability;
//}

//using default constructor - instantiateing empty Cat object
//var diabloCat = new Cat();


//WITH new keyword - returns this
//WITHOUT - returns undefined

//THIS is just an arbitrary//value of this changes depending on when called - global name space - //window object - call cat actually calling cat on the window object - window.Cat()
// - removing baggae this would carry

//var diabloCat = new Cat(
//    'Diablo",
//    'red',
//    17,
//    'short',
//    'cranky',
//    'high'
//);


//***use dble or for falsy value as default cvalues to take over
var Quote = function(author, text){
    this.author=author || 'anonymous';
    this.text=text || '...' ;
}

var myQuote = new Quote();
myQuote.author = 'Hemmingway';
myQuote.text = 'tieiwmrieniid';
console.log(myQuote);

var yourQuote = new Quote('Smith', 'ssssssss');
console.log(yourQuote);
var lastQuote = new Quote('Last', 'xxxxxxx');
console.log(lastQuote);