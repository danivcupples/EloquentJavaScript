//Looping a Triangle
var string = "#";
while (string.length <= 7) {
	console.log(string);
	string = string + "#";
}

//FizzBuzz
for(var number = 1; number <= 100; number++){
	if (number % 5 != 0 && number % 3 == 0)
	  console.log("Fizz");
	else if (number % 5 == 0 && number % 3 != 0)
	  console.log("Buzz");
	else if (number % 3 == 0 && number % 5 == 0)
	  console.log("FizzBuzz");
	else
	  console.log(number);
}

//Chess Board
/* Program creates a single string. 
Alternates "H" and " ".
Uses newline characters (\n) to separate lines.
8 characters. 8 lines.
Define variable size. 
Set equal to 8.
Adjust program to allow size to be edited only by changing the variable. */ 

var size = 8;

var chessBoard = "";

for (var y = 0; y < size; y++){
	for (var x = 0; x < size; x++){
		if ((x + y) % 2 == 0)
			chessBoard += "#";
		else
			chessBoard += " ";
	}
	chessBoard += "\n";
}
console.log(chessBoard);