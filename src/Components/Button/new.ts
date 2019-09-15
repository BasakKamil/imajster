
let message: string;
let number: number;



message = 'abc';
number = 28;

let endWishC = (<String>message).endsWith('c');



const ColorRed = 0;
const ColorBlue = 1; 
const ColorBlack = 2;

enum Color {Red=0,Blue=1,Black=2,Green=3};
let backgroundcolor = Color.Red;


function log(message,number){

    console.log(message,number );
    console.log(endWishC + " " + number);
}

export default log ;