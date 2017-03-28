var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = 0
var gradeB = 0
var gradeC = 0
var gradeD = 0
var gradeF = 0 



for (var i=0; i<scores.length; i++) {
	
	if (scores[i]>90 && scores[i]<101) {
		gradeA = gradeA + 1

	} else if (scores[i]>80 && scores[i]<91){
		gradeB = gradeB + 1

	} else if (scores[i]>70 && scores[i]<81){
		gradeC = gradeC + 1

	} else if (scores[i]>60 && scores[i]<71){
		gradeD = gradeD + 1

	} else if (scores[i]>50 && scores[i]<61)
		gradeF = gradeF + 1

}

console.log ("there are ", gradeA, " a's in this class.");
console.log ("there are ", gradeB, " b's in this class.");
console.log ("there are ", gradeC, " c's in this class.");
console.log ("there are ", gradeD, " d's in this class.");
console.log ("there are ", gradeF, " f's in this class.");

var lowestNum = scores.sort(
	function(a,b){
		return a-b
} )

console.log("lowest score", lowestNum[0]);

console.log("highest score", lowestNum[11]);








